import styled from '@emotion/styled'

export const PurchaseItem = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #f9fafb;
  border-radius: 12px;
  transition: background 0.2s ease;

  &:hover {
    background: #f3f4f6;
  }
`

export const PurchaseThumbnail = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
  background: #e5e7eb;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const PurchaseInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ProductName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #111827;
`

export const PurchaseDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const DetailItem = styled.div`
  display: flex;
  gap: 8px;
  font-size: 13px;
`

export const DetailLabel = styled.span`
  color: #6b7280;
  min-width: 50px;
`

export const DetailValue = styled.span`
  color: #374151;
`

export const PriceValue = styled.span`
  color: #6366f1;
  font-weight: 600;
`
