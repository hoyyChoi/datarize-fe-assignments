export interface PurchaseFrequencyItem {
  range: string // 금액 구간 문자열
  count: number // 해당 구간 구매 횟수
}

export type GetPurchaseFrequencyResponse = PurchaseFrequencyItem[]

export interface PurchaseFrequencyQuery {
  from?: string // ISO 8601
  to?: string // ISO 8601
}
