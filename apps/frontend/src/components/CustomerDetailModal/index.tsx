import { useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router'
import { getCustomers, getCustomerPurchases } from '@/apis/domain/customer'
import { useFetch } from '@/hooks/useFetch'
import * as S from './CustomerDetailModal.styled'

export const CustomerDetailModal = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const customerId = searchParams.get('customerId')

  const { data: customers } = useFetch({
    requestFn: () => getCustomers(),
  })

  const {
    data: purchases,
    loading,
    error,
  } = useFetch({
    requestFn: () => getCustomerPurchases(Number(customerId)),
  })

  const customer = customers?.find((c) => c.id === Number(customerId))

  const handleClose = () => {
    navigate({ search: '' })
  }

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    if (customerId) {
      window.addEventListener('keydown', handleEsc)
    }
    return () => window.removeEventListener('keydown', handleEsc)
  }, [customerId])

  useEffect(() => {
    if (customerId && customer) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [customerId, customer])

  const formatCurrency = (amount: number) => new Intl.NumberFormat('ko-KR').format(amount)

  if (!customerId || !customer) return null

  return (
    <S.Overlay onClick={handleClose}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.HeaderInfo>
            <S.Title>{customer.name}</S.Title>
            <S.Subtitle>고객 ID: {customer.id}</S.Subtitle>
          </S.HeaderInfo>
          <S.CloseButton onClick={handleClose}>✕</S.CloseButton>
        </S.Header>
        <S.Content>
          <S.StatGrid>
            <S.StatCard>
              <S.StatLabel>구매 횟수</S.StatLabel>
              <S.StatValue>{customer.count}회</S.StatValue>
            </S.StatCard>
            <S.StatCard>
              <S.StatLabel>총 구매 금액</S.StatLabel>
              <S.StatValue highlight>₩{formatCurrency(customer.totalAmount)}</S.StatValue>
            </S.StatCard>
          </S.StatGrid>

          <S.Divider />

          <S.PurchaseSection>
            <S.SectionTitle>구매 내역</S.SectionTitle>

            {loading && <S.LoadingMessage>구매 내역을 불러오는 중...</S.LoadingMessage>}
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

            {!loading && !error && purchases && (
              <S.PurchaseList>
                {purchases.map((purchase, index) => (
                  <S.PurchaseItem key={index}>
                    <S.PurchaseThumbnail>
                      <img src={purchase.imgSrc} alt={purchase.product} />
                    </S.PurchaseThumbnail>

                    <S.PurchaseInfo>
                      <S.ProductName>{purchase.product}</S.ProductName>
                      <S.PurchaseDetails>
                        <S.DetailItem>
                          <S.DetailLabel>구매일</S.DetailLabel>
                          <S.DetailValue>{purchase.date}</S.DetailValue>
                        </S.DetailItem>
                        <S.DetailItem>
                          <S.DetailLabel>수량</S.DetailLabel>
                          <S.DetailValue>{purchase.quantity}개</S.DetailValue>
                        </S.DetailItem>
                        <S.DetailItem>
                          <S.DetailLabel>가격</S.DetailLabel>
                          <S.PriceValue>₩{formatCurrency(purchase.price)}</S.PriceValue>
                        </S.DetailItem>
                      </S.PurchaseDetails>
                    </S.PurchaseInfo>
                  </S.PurchaseItem>
                ))}
              </S.PurchaseList>
            )}
          </S.PurchaseSection>
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )
}
