// 원화로 변경 함수
export const formatCurrency = (amount: number) => new Intl.NumberFormat('ko-KR').format(amount)
