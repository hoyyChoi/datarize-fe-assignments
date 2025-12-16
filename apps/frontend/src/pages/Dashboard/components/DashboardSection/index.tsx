import * as S from './DashboardSection.styled'

type Props = {
  title: string
  description: string
  children: React.ReactNode
}

export const DashboardSection = ({ title, description, children }: Props) => {
  return (
    <S.Section>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Header>
      {children}
    </S.Section>
  )
}
