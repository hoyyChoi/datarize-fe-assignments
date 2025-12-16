import styled from '@emotion/styled'

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
