import * as S from './PurchaseChart.styled'
import { useCallback, useState } from 'react'
import { useFetch } from '@/hooks/useFetch'
import { formatRange } from '../../utils/formatRange'
import { getPurchaseFrequency } from '@/apis/domain/purchase'
import { DateRange, DateRangePicker } from '@/shared/components/DateRangePicker'
import { BarChart } from '@/shared/components/charts/BarChart'

export type ChartItem = {
  range: string
  count: number
}

export const PurchaseChart = () => {
  const [dateRange, setDateRange] = useState<DateRange>({ from: '2024-07-01', to: '2024-07-31' })
  const { data, loading, error, refetch } = useFetch<ChartItem[], DateRange>({
    requestFn: (params) => getPurchaseFrequency(params || dateRange),
  })

  const handleDateChange = useCallback((newRange: DateRange) => {
    setDateRange(newRange)
    refetch(newRange)
  }, [])

  return (
    <>
      <S.Header>
        <DateRangePicker value={dateRange} onChange={handleDateChange} />
      </S.Header>

      {loading && !data && <S.LoadingState>차트를 불러오는 중...</S.LoadingState>}
      {error && <S.ErrorState>{error}</S.ErrorState>}
      {data && (
        <BarChart
          data={data}
          dataKey="count"
          xAxisKey="range"
          xAxisFormatter={formatRange}
          tooltipFormatter={formatRange}
        />
      )}
    </>
  )
}
