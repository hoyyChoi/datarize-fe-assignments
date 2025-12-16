import * as S from './SearchInput.styled'

type Props = {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export const SearchInput = ({ value, onChange, placeholder = '검색...' }: Props) => {
  return <S.Input type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
}
