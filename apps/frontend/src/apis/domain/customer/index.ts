import api from '@/apis/core'
import { CustomersQuery, GetCustomerPurchasesResponse, GetCustomersResponse } from './type'

export const getCustomers = async (params?: CustomersQuery): Promise<GetCustomersResponse> => {
  return api.get<GetCustomersResponse, CustomersQuery>('/api/customers', params)
}

export const getCustomerPurchases = async (customerId: number): Promise<GetCustomerPurchasesResponse> => {
  return api.get<GetCustomerPurchasesResponse>(`/api/customers/${customerId}/purchases`)
}
