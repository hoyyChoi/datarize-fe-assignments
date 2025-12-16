import { useMemo, useState } from 'react'
import { getCustomers } from '@/apis/domain/customer'
import { useFetch } from '@/hooks/useFetch'
import * as S from './CustomerList.styled'
import { CustomerDetailModal } from '../CustomerDetailModal'
import { useSearchParams } from 'react-router'

type SortField = 'totalAmount' | 'count'
type SortOrder = 'asc' | 'desc' | null

export const CustomerList = () => {
  const {
    data: customers,
    loading,
    error,
  } = useFetch({
    requestFn: () => getCustomers(),
  })

  const [searchQuery, setSearchQuery] = useState('')
  const [sortField, setSortField] = useState<SortField>('totalAmount')
  const [sortOrder, setSortOrder] = useState<SortOrder>(null)
  const [searchParams] = useSearchParams()
  const customerId = searchParams.get('customerId')

  const filteredAndSortedCustomers = useMemo(() => {
    if (!customers) return []

    let result = customers

    // 검색 필터링
    if (searchQuery.trim()) {
      result = result.filter((c) => c.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    // 정렬
    if (sortOrder) {
      result = [...result].sort((a, b) => {
        const aVal = a[sortField]
        const bVal = b[sortField]
        return sortOrder === 'asc' ? aVal - bVal : bVal - aVal
      })
    }

    return result
  }, [customers, searchQuery, sortField, sortOrder])

  const handleSort = (field: SortField) => {
    if (sortField !== field) {
      setSortField(field)
      setSortOrder('desc')
    } else {
      setSortOrder((prev) => {
        if (prev === null) return 'desc'
        if (prev === 'desc') return 'asc'
        return null
      })
    }
  }

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) return null
    if (sortOrder === 'asc') return ' ↑'
    if (sortOrder === 'desc') return ' ↓'
    return null
  }

  const formatCurrency = (amount: number) => new Intl.NumberFormat('ko-KR').format(amount)

  if (loading) {
    return (
      <S.Container>
        <S.StateRow>로딩 중...</S.StateRow>
      </S.Container>
    )
  }

  if (error) {
    return (
      <S.Container>
        <S.StateRow>{error}</S.StateRow>
      </S.Container>
    )
  }

  return (
    <>
      <S.Container>
        <S.SearchRow>
          <S.SearchInput
            placeholder="고객 이름 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </S.SearchRow>

        <S.TableWrapper>
          <S.Table>
            <S.TableHeadRow>
              <S.Cell>ID</S.Cell>
              <S.Cell>이름</S.Cell>
              <S.SortCell align="right" onClick={() => handleSort('count')} active={sortField === 'count'}>
                구매 횟수{getSortIcon('count')}
              </S.SortCell>
              <S.SortCell align="right" onClick={() => handleSort('totalAmount')} active={sortField === 'totalAmount'}>
                총 구매 금액{getSortIcon('totalAmount')}
              </S.SortCell>
            </S.TableHeadRow>

            <S.TableBody>
              {filteredAndSortedCustomers.length === 0 ? (
                <S.StateRow>검색 결과가 없습니다.</S.StateRow>
              ) : (
                filteredAndSortedCustomers.map((customer) => (
                  <S.TableRow key={customer.id} to={`?customerId=${customer.id}`}>
                    <S.Cell>{customer.id}</S.Cell>
                    <S.Cell>{customer.name}</S.Cell>
                    <S.Cell align="right">{customer.count}회</S.Cell>
                    <S.Cell align="right" bold>
                      ₩{formatCurrency(customer.totalAmount)}
                    </S.Cell>
                  </S.TableRow>
                ))
              )}
            </S.TableBody>
          </S.Table>
        </S.TableWrapper>
      </S.Container>

      {customerId && <CustomerDetailModal />}
    </>
  )
}
