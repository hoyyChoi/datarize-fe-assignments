import * as S from './CustomerList.styled'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router'
import { getCustomers } from '@/apis/domain/customer'
import { useFetch } from '@/shared/hooks/useFetch'
import { SearchInput } from '@/shared/components/SearchInput'
import { SortAccordion, type SortOption } from '@/shared/components/SortAccordion'
import { CustomerTable } from '../CustomerTable'
import { CustomerTableRow } from '../CustomerTableRow'
import { filterCustomers } from '../../../utils/filterCustomers'
import { sortCustomers, type SortOrder } from '../../../utils/sortCustomers'
import { CustomerDetailModal } from '../../customerDetail/CustomerDetailModal'

const SORT_OPTIONS: SortOption<SortOrder>[] = [
  { value: 'desc', label: '높은 순' },
  { value: 'asc', label: '낮은 순' },
  { value: null, label: '정렬 안 함' },
]

export const CustomerList = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState<SortOrder>(null)
  const [searchParams] = useSearchParams()
  const customerId = searchParams.get('customerId')

  const {
    data: customers,
    loading,
    error,
  } = useFetch({
    requestFn: () => getCustomers(),
  })

  const processedCustomers = useMemo(() => {
    if (!customers) return []
    const filtered = filterCustomers(customers, searchQuery)
    return sortCustomers(filtered, sortOrder)
  }, [customers, searchQuery, sortOrder])

  return (
    <>
      <S.Container>
        <S.ControlRow>
          <SearchInput value={searchQuery} onChange={setSearchQuery} placeholder="고객 이름 검색" />
          <SortAccordion value={sortOrder} options={SORT_OPTIONS} onChange={setSortOrder} label="총 구매 금액" />
        </S.ControlRow>

        {loading && !customers && <S.LoadingState>고객 목록을 불러오는 중...</S.LoadingState>}
        {error && <S.ErrorState>{error}</S.ErrorState>}
        {customers && (
          <>
            {processedCustomers.length === 0 ? (
              <S.EmptyState>검색 결과가 없습니다.</S.EmptyState>
            ) : (
              <CustomerTable>
                {processedCustomers.map((customer) => (
                  <CustomerTableRow key={customer.id} customer={customer} />
                ))}
              </CustomerTable>
            )}
          </>
        )}
      </S.Container>

      {customerId && <CustomerDetailModal />}
    </>
  )
}
