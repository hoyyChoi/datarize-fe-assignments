import styled from '@emotion/styled'

export const Card = styled.section`
  width: 100%;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
`

export const DateRow = styled.div`
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

export const ChartArea = styled.div`
  width: 100%;
  height: 380px;
  svg {
    outline: none;
  }
`

export const StateMessage = styled.div`
  padding: 80px 0;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
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
