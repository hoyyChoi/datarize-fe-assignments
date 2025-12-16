import styled from '@emotion/styled'
import { Link } from 'react-router'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const SearchRow = styled.div`
  display: flex;
  align-items: center;
`

export const SearchInput = styled.input`
  width: 380px;
  padding: 10px 14px;
  font-size: 14px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f9fafb;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: #6366f1;
    background: white;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`

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

export const TableRow = styled(Link)`
  display: grid;
  grid-template-columns: 80px 1fr 140px 180px;
  padding: 16px;
  font-size: 14px;
  color: #111827;
  border-bottom: 1px solid #f3f4f6;
  cursor: pointer;
  transition: background 0.15s ease;

  text-decoration: none;
  &:hover {
    text-decoration: none;
  }

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

export const SortCell = styled(Cell)<{ active?: boolean }>`
  cursor: pointer;
  user-select: none;
  color: ${(p) => (p.active ? '#6366f1' : '#6b7280')};
  font-weight: ${(p) => (p.active ? 600 : 500)};
  transition: color 0.2s ease;

  &:hover {
    color: #6366f1;
  }
`

export const StateRow = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: #9ca3af;
`
