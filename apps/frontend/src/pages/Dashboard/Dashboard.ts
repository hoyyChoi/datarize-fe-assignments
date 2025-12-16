import styled from '@emotion/styled'

export const Page = styled.main`
  min-height: 100vh;
  background: #f8fafc;
  padding: 32px 0 80px;
`

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`

export const HeaderIcon = styled.div`
  width: 50px;
  height: 50px;
  font-size: 30px;
  border-radius: 10px;
  border: 1px solid #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: #0f172a;
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: #64748b;
`

export const Card = styled.section`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 6px 24px rgba(15, 23, 42, 0.04);
  margin-bottom: 24px;
`

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
`

export const CardDesc = styled.p`
  font-size: 13px;
  color: #64748b;
  margin-top: 4px;
`
