import styled from '@emotion/styled'
import { WrapperProps } from '.'

export const Container = styled.div<WrapperProps>`
  position: ${({ position }) => position ?? 'relative'};
  width: 100%;
  margin: ${({ center }) => (center ? '0 auto' : '0')};
  max-width: ${({ maxWidth }) => (typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth)};
  background-color: ${({ backgroundColor }) => backgroundColor ?? 'transparent'};
`
