import { useCallback } from 'react'
import * as S from './DateRangePicker.styled'

export type DateRange = {
  from: string
  to: string
}

type Props = {
  value: DateRange
  onChange: (range: DateRange) => void
}

export const DateRangePicker = ({ value, onChange }: Props) => {
  const handleChange = useCallback(
    (field: 'from' | 'to') => (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange({ ...value, [field]: e.target.value })
    },
    [],
  )

  return (
    <S.Container>
      <S.DateInput type="date" value={value.from} max={value.to} onChange={handleChange('from')} />
      <S.Separator>~</S.Separator>
      <S.DateInput type="date" value={value.to} min={value.from} onChange={handleChange('to')} />
    </S.Container>
  )
}
