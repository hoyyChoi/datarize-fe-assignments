import styled from '@emotion/styled'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const Modal = styled.div`
  background: white;
  border-radius: 16px;
  width: 90%;
  max-width: 720px;
  max-height: 90vh;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  animation: slideUp 0.3s ease;
  display: flex;
  flex-direction: column;

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 28px;
  border-bottom: 1px solid #e5e7eb;
  flex-shrink: 0;
`

export const HeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #111827;
`

export const Subtitle = styled.span`
  font-size: 13px;
  color: #6b7280;
`

export const CloseButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: none;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background: #e5e7eb;
    color: #374151;
  }
`

export const Content = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  overflow-y: auto;
`

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`

export const StatCard = styled.div`
  background: #f9fafb;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const StatLabel = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
`

export const StatValue = styled.span<{ highlight?: boolean }>`
  font-size: 18px;
  font-weight: 700;
  color: ${(p) => (p.highlight ? '#6366f1' : '#111827')};
`

export const Divider = styled.div`
  height: 1px;
  background: #e5e7eb;
`

export const PurchaseSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
`

export const PurchaseList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

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

export const LoadingMessage = styled.div`
  padding: 32px;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
`

export const ErrorMessage = styled.div`
  padding: 32px;
  text-align: center;
  font-size: 14px;
  color: #ef4444;
`
