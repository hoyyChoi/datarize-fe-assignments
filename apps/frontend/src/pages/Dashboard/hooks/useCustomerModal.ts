import { useSearchParams, useNavigate } from 'react-router'
import type { Customer } from '@/apis/domain/customer/type'
import { useCallback } from 'react'

export const useCustomerModal = (customers?: Customer[]) => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const customerId = searchParams.get('customerId')

  const customer = customers?.find((c) => c.id === Number(customerId))

  const closeModal = useCallback(() => {
    navigate({ search: '' })
  }, [])

  return {
    customerId,
    customer,
    closeModal,
  }
}
