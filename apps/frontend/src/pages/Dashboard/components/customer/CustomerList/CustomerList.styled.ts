import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ControlRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftControls = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const RefreshButton = styled.button<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  font-size: 14px;
  color: #374151;
  cursor: ${(p) => (p.disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover:not(:disabled) {
    background: white;
    border-color: #d1d5db;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  }

  &:active:not(:disabled) {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
  }
`

export const LoadingState = styled.div`
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #6b7280;
`

export const ErrorState = styled.div`
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: #ef4444;
`

export const EmptyState = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: #9ca3af;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
`
