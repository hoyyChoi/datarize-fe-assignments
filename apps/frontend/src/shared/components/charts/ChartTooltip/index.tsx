import * as S from './ChartTooltip.styled'

type Props = {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
  formatter?: (label: string) => string
}

export const ChartTooltip = ({ active, payload, label, formatter }: Props) => {
  if (!active || !payload?.[0]) return null

  const displayLabel = formatter && label ? formatter(label) : label

  return (
    <S.Container>
      <S.Label>{displayLabel}</S.Label>
      <S.Value>{payload[0].value.toLocaleString()}건</S.Value>
    </S.Container>
  )
}
