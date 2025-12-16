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
