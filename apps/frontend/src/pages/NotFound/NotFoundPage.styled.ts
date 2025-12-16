import styled from '@emotion/styled'

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
  text-align: center;
`

export const Code = styled.div`
  font-size: 96px;
  font-weight: 800;
  color: #6366f1;
  line-height: 1;
`

export const Title = styled.h1`
  margin-top: 16px;
  font-size: 24px;
  font-weight: 700;
  color: #111827;
`

export const Description = styled.p`
  margin-top: 8px;
  font-size: 14px;
  color: #6b7280;
  line-height: 1.6;
`

export const HomeButton = styled.button`
  margin-top: 24px;
  padding: 12px 20px;
  border-radius: 10px;
  border: none;
  background: #6366f1;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #4f46e5;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
  }
`
