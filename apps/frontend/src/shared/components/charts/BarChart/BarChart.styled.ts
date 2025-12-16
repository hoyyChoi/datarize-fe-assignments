import styled from '@emotion/styled'

export const Container = styled.div<{ height: number }>`
  width: 100%;
  height: ${(p) => p.height}px;

  svg {
    outline: none;
  }
`
