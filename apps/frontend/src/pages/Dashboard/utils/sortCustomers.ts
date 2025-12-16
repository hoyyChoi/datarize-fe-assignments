import type { Customer } from '@/apis/domain/customer/type'

export type SortOrder = 'asc' | 'desc' | null

export const sortCustomers = (customers: Customer[], order: SortOrder) => {
  if (!order) return customers

  return [...customers].sort((a, b) => {
    const aVal = a.totalAmount
    const bVal = b.totalAmount
    return order === 'asc' ? aVal - bVal : bVal - aVal
  })
}
