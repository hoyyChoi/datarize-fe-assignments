import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const DateInput = styled.input`
  padding: 8px 12px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  color: #374151;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #d1d5db;
  }

  &:focus {
    outline: none;
    border-color: #6366f1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`

export const Separator = styled.span`
  color: #9ca3af;
  font-size: 14px;
`
