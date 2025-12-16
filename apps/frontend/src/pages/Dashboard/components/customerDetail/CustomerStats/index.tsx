import * as S from './CustomerStats.styled'
import { formatCurrency } from '@/pages/Dashboard/utils/formatCurrency'

type Props = {
  count: number
  totalAmount: number
}

export const CustomerStats = ({ count, totalAmount }: Props) => {
  return (
    <S.StatGrid>
      <S.StatCard>
        <S.StatLabel>구매 횟수</S.StatLabel>
        <S.StatValue>{count}회</S.StatValue>
      </S.StatCard>
      <S.StatCard>
        <S.StatLabel>총 구매 금액</S.StatLabel>
        <S.StatValue highlight>₩{formatCurrency(totalAmount)}</S.StatValue>
      </S.StatCard>
    </S.StatGrid>
  )
}
