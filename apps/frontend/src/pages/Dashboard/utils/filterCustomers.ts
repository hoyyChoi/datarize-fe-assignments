import type { Customer } from '@/apis/domain/customer/type'

export const filterCustomers = (customers: Customer[], query: string) => {
  if (!query.trim()) return customers
  return customers.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))
}
