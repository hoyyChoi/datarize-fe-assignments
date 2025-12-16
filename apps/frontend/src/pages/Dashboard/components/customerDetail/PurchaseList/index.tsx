import * as S from './PurchaseList.styled'
import type { CustomerPurchase } from '@/apis/domain/customer/type'
import { PurchaseItem } from '../PurchaseItem'

type Props = {
  purchases?: CustomerPurchase[]
  loading: boolean
  error: string | null
}

export const PurchaseList = ({ purchases, loading, error }: Props) => {
  return (
    <S.PurchaseSection>
      <S.SectionTitle>구매 내역</S.SectionTitle>

      {loading && <S.LoadingMessage>구매 내역을 불러오는 중...</S.LoadingMessage>}
      {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
      {!loading && !error && purchases && (
        <S.PurchaseListWrapper>
          {purchases.map((purchase, index) => (
            <PurchaseItem key={index} purchase={purchase} />
          ))}
        </S.PurchaseListWrapper>
      )}
    </S.PurchaseSection>
  )
}
