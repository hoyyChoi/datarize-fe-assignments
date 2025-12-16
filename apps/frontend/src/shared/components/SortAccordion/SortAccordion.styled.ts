import styled from '@emotion/styled'

export const Container = styled.div`
  position: relative;
`

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: white;
    border-color: #d1d5db;
  }
`

export const Label = styled.span`
  font-size: 14px;
  color: #6b7280;
`

export const Value = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #374151;
`

export const Icon = styled.span<{ isOpen: boolean }>`
  font-size: 10px;
  color: #9ca3af;
  transition: transform 0.2s ease;
  transform: ${(p) => (p.isOpen ? 'rotate(180deg)' : 'rotate(0)')};
`

export const Content = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  min-width: 140px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 10;
`

export const Option = styled.button<{ isActive: boolean }>`
  width: 100%;
  padding: 10px 16px;
  text-align: left;
  font-size: 14px;
  background: ${(p) => (p.isActive ? '#eef2ff' : 'white')};
  color: ${(p) => (p.isActive ? '#6366f1' : '#374151')};
  border: none;
  cursor: pointer;
  transition: background 0.15s ease;

  &:hover {
    background: #f9fafb;
  }
`
