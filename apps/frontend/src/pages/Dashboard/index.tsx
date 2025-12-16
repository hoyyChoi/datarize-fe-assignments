import * as S from './Dashboard.styled'
import { DashboardSection } from './components/DashboardSection'
import { PurchaseChart } from './components/PurchaseChart'
import { CustomerList } from './components/CustomerList'

export const DashboardPage = () => {
  return (
    <S.Page>
      <S.Container>
        <S.Header>
          <S.HeaderIcon src="/logo.svg" alt="로고" />
          <S.HeaderText>
            <S.Title>구매 데이터 대시보드</S.Title>
            <S.Subtitle>2024년 7월 쇼핑몰 구매 데이터 분석</S.Subtitle>
          </S.HeaderText>
        </S.Header>

        <DashboardSection title="가격대별 구매 빈도" description="선택한 기간 동안의 가격대별 구매 횟수를 보여줍니다">
          <PurchaseChart />
        </DashboardSection>

        <DashboardSection title="고객 목록" description="총 구매 금액 및 횟수 기준으로 고객을 조회합니다">
          <CustomerList />
        </DashboardSection>
      </S.Container>
    </S.Page>
  )
}
