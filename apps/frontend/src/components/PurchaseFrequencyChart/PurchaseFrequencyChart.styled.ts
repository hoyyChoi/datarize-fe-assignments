// PurchaseFrequencyChart.styled.ts
import styled from '@emotion/styled'

export const Card = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.02em;
`

export const DateRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9ca3af;
  font-size: 14px;
  font-weight: 500;
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

export const ChartArea = styled.div`
  width: 100%;
  height: 400px;
`

export const TooltipBox = styled.div`
  background: rgba(17, 24, 39, 0.95);
  backdrop-filter: blur(8px);
  padding: 10px 14px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(255, 255, 255, 0.1);
`

export const TooltipLabel = styled.div`
  font-size: 12px;
  color: #d1d5db;
  margin-bottom: 4px;
`

export const TooltipValue = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
`
