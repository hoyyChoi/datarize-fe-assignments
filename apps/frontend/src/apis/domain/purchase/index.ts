import api from '@/apis/core'
import { GetPurchaseFrequencyResponse, PurchaseFrequencyQuery } from './type'

export const getPurchaseFrequency = async (params?: PurchaseFrequencyQuery): Promise<GetPurchaseFrequencyResponse> => {
  return api.get<GetPurchaseFrequencyResponse, PurchaseFrequencyQuery>('/api/purchase-frequency', params)
}
