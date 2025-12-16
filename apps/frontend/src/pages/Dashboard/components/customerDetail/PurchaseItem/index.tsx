import * as S from './PurchaseItem.styled'
import { CustomerPurchase } from '@/apis/domain/customer/type'
import { formatCurrency } from '@/pages/Dashboard/utils/formatCurrency'

type Props = {
  purchase: CustomerPurchase
}

export const PurchaseItem = ({ purchase }: Props) => {
  return (
    <S.PurchaseItem>
      <S.PurchaseThumbnail>
        <img src={purchase.imgSrc} alt={purchase.product} />
      </S.PurchaseThumbnail>

      <S.PurchaseInfo>
        <S.ProductName>{purchase.product}</S.ProductName>
        <S.PurchaseDetails>
          <S.DetailItem>
            <S.DetailLabel>구매일</S.DetailLabel>
            <S.DetailValue>{purchase.date}</S.DetailValue>
          </S.DetailItem>
          <S.DetailItem>
            <S.DetailLabel>수량</S.DetailLabel>
            <S.DetailValue>{purchase.quantity}개</S.DetailValue>
          </S.DetailItem>
          <S.DetailItem>
            <S.DetailLabel>가격</S.DetailLabel>
            <S.PriceValue>₩{formatCurrency(purchase.price)}</S.PriceValue>
          </S.DetailItem>
        </S.PurchaseDetails>
      </S.PurchaseInfo>
    </S.PurchaseItem>
  )
}
