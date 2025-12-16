import { CustomerList } from '@/components/CustomerList'
import * as S from './Dashboard'
import { PurchaseFrequencyChart } from '@/components/PurchaseFrequencyChart'

export const DashboardPage = () => {
  return (
    <S.Page>
      <S.Container>
        <S.Header>
          <S.HeaderIcon>📊</S.HeaderIcon>
          <S.HeaderText>
            <S.Title>구매 데이터 대시보드</S.Title>
            <S.Subtitle>2024년 7월 쇼핑몰 구매 데이터 분석</S.Subtitle>
          </S.HeaderText>
        </S.Header>

        <S.Card>
          <S.CardHeader>
            <div>
              <S.CardTitle>가격대별 구매 빈도</S.CardTitle>
              <S.CardDesc>선택한 기간 동안의 가격대별 구매 횟수를 보여줍니다</S.CardDesc>
            </div>
          </S.CardHeader>

          <PurchaseFrequencyChart />
        </S.Card>

        <S.Card>
          <S.CardHeader>
            <div>
              <S.CardTitle>고객 목록</S.CardTitle>
              <S.CardDesc>총 구매 금액 및 횟수 기준으로 고객을 조회합니다</S.CardDesc>
            </div>
          </S.CardHeader>
          <CustomerList />
        </S.Card>
      </S.Container>
    </S.Page>
  )
}
