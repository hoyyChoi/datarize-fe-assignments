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

export const Divider = styled.div`
  height: 1px;
  background: #e5e7eb;
`
