import * as S from './CustomerDetailModal.styled'
import { createPortal } from 'react-dom'
import { getCustomers, getCustomerPurchases } from '@/apis/domain/customer'
import { useFetch } from '@/shared/hooks/useFetch'
import { useCustomerModal } from '@/pages/Dashboard/hooks/useCustomerModal'
import { useKeyboardEscape } from '@/pages/Dashboard/hooks/useKeyboardEscape'
import { useLockBodyScroll } from '@/pages/Dashboard/hooks/useLockBodyScroll'
import { CustomerStats } from '../CustomerStats'
import { PurchaseList } from '../PurchaseList'
import type { Customer, CustomerPurchase } from '@/apis/domain/customer/type'

export const CustomerDetailModal = () => {
  const { data: customers } = useFetch<Customer[]>({
    requestFn: () => getCustomers(),
  })

  const { customerId, customer, closeModal } = useCustomerModal(customers)

  const {
    data: purchases,
    loading,
    error,
  } = useFetch<CustomerPurchase[]>({
    requestFn: () => getCustomerPurchases(Number(customerId)),
  })

  useKeyboardEscape('Escape', closeModal, !!customerId)
  useLockBodyScroll(!!customerId && !!customer)

  if (!customerId || !customer) return null

  const modalContent = (
    <S.Overlay onClick={closeModal}>
      <S.Modal onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <S.HeaderInfo>
            <S.Title>{customer.name}</S.Title>
            <S.Subtitle>고객 ID: {customer.id}</S.Subtitle>
          </S.HeaderInfo>
          <S.CloseButton onClick={closeModal}>✕</S.CloseButton>
        </S.Header>

        <S.Content>
          <CustomerStats count={customer.count} totalAmount={customer.totalAmount} />
          <S.Divider />
          <PurchaseList purchases={purchases} loading={loading} error={error} />
        </S.Content>
      </S.Modal>
    </S.Overlay>
  )

  return createPortal(modalContent, document.body)
}
