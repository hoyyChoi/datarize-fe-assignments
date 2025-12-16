export interface Customer {
  id: number
  name: string
  count: number // 구매 횟수
  totalAmount: number // 총 구매 금액
}

export type GetCustomersResponse = Customer[]

export interface CustomerPurchase {
  date: string
  product: string
  quantity: number
  price: number
  imgSrc: string
}

export type GetCustomerPurchasesResponse = CustomerPurchase[]

export interface CustomersQuery {
  sortBy?: 'asc' | 'desc'
  name?: string
}
