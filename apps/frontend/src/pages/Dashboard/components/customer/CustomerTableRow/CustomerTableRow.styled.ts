import styled from '@emotion/styled'
import { Link } from 'react-router'

export const Row = styled(Link)`
  display: grid;
  grid-template-columns: 80px 1fr 140px 180px;
  padding: 16px;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #f3f4f6;
  cursor: pointer;
  transition: background 0.15s ease;
  text-decoration: none;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #f8fafc;
  }
`

export const Cell = styled.div<{ align?: 'right'; bold?: boolean }>`
  text-align: ${(p) => p.align ?? 'left'};
  font-weight: ${(p) => (p.bold ? 600 : 400)};
  display: flex;
  align-items: center;
  justify-content: ${(p) => (p.align === 'right' ? 'flex-end' : 'flex-start')};
`
