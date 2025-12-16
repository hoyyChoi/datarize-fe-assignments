import styled from '@emotion/styled'

export const TableWrapper = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
`

export const Table = styled.div`
  width: 100%;
`

export const TableHeadRow = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 140px 180px;
  padding: 14px 16px;
  font-size: 13px;
  font-weight: 600;
  color: #6b7280;
  background: #f9fafb;
  border-bottom: 1px solid #e5e7eb;
`

export const TableBody = styled.div`
  min-height: 400px;
`

export const Cell = styled.div<{ align?: 'right' }>`
  text-align: ${(p) => p.align ?? 'left'};
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.align === 'right' ? 'flex-end' : 'flex-start')};
`
