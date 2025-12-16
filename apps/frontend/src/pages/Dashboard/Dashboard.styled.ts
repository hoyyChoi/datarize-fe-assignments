import styled from '@emotion/styled'

export const Page = styled.main`
  min-height: 100vh;
  background: #f8fafc;
  padding: 32px 0 80px;
`

export const Container = styled.div`
  width: 1280px;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
`

export const HeaderIcon = styled.img`
  width: 40px;
  height: 40px;
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
