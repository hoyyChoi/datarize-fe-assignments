import { useState } from 'react'
import * as S from './SortAccordion.styled'

export type SortOption<T = string> = {
  value: T
  label: string
}

type Props<T> = {
  value: T
  options: SortOption<T>[]
  onChange: (value: T) => void
  label?: string
}

export const SortAccordion = <T,>({ value, options, onChange, label = '정렬' }: Props<T>) => {
  const [isOpen, setIsOpen] = useState(false)

  const currentLabel = options.find((opt) => opt.value === value)?.label || '선택 안 함'

  const handleSelect = (newValue: T) => {
    onChange(newValue)
    setIsOpen(false)
  }

  return (
    <S.Container>
      <S.Trigger onClick={() => setIsOpen(!isOpen)}>
        <S.Label>{label}</S.Label>
        <S.Value>{currentLabel}</S.Value>
        <S.Icon isOpen={isOpen}>▼</S.Icon>
      </S.Trigger>

      {isOpen && (
        <S.Content>
          {options.map((option, index) => (
            <S.Option key={index} isActive={value === option.value} onClick={() => handleSelect(option.value)}>
              {option.label}
            </S.Option>
          ))}
        </S.Content>
      )}
    </S.Container>
  )
}
