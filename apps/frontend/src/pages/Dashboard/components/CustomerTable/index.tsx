import * as S from './CustomerTable.styled'

type Props = {
  children: React.ReactNode
}

export const CustomerTable = ({ children }: Props) => {
  return (
    <S.TableWrapper>
      <S.Table>
        <S.TableHeadRow>
          <S.Cell>ID</S.Cell>
          <S.Cell>이름</S.Cell>
          <S.Cell align="right">구매 횟수</S.Cell>
          <S.Cell align="right">총 구매 금액</S.Cell>
        </S.TableHeadRow>

        <S.TableBody>{children}</S.TableBody>
      </S.Table>
    </S.TableWrapper>
  )
}
