import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import { useEffect, useState } from 'react'
import { getPurchaseFrequency } from '@/apis/domain/purchase'
import * as S from './PurchaseFrequencyChart.styled'

type ChartItem = {
  range: string
  count: number
}

type DateRange = {
  from: string
  to: string
}

const formatRange = (range: string) => {
  if (range.includes('+')) return '10만+'
  const [min, max] = range.split('-').map((v) => Number(v.trim()))
  return `${Math.floor(min / 10000)}~${Math.floor(max / 10000)}만`
}

export const PurchaseFrequencyChart = () => {
  const [data, setData] = useState<ChartItem[]>([])
  const [dateRange, setDateRange] = useState<DateRange>({ from: '2024-07-01', to: '2024-07-31' })

  useEffect(() => {
    async function fetchData() {
      const hasDateRange = dateRange.from && dateRange.to
      const res = await getPurchaseFrequency(hasDateRange ? { from: dateRange.from, to: dateRange.to } : undefined)
      setData(res)
    }
    fetchData()
  }, [dateRange])

  return (
    <S.Card>
      <S.Header>
        <S.Title>가격대별 구매 빈도</S.Title>
        <S.DateRow>
          <S.DateInput
            type="date"
            value={dateRange.from}
            onChange={(e) => setDateRange((prev) => ({ ...prev, from: e.target.value }))}
          />
          <span>~</span>
          <S.DateInput
            type="date"
            value={dateRange.to}
            onChange={(e) => setDateRange((prev) => ({ ...prev, to: e.target.value }))}
          />
        </S.DateRow>
      </S.Header>

      <S.ChartArea>
        <ResponsiveContainer>
          <BarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis
              dataKey="range"
              tickFormatter={formatRange}
              tick={{ fontSize: 13, fill: '#6b7280' }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 13, fill: '#6b7280' }} axisLine={false} tickLine={false} />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(99, 102, 241, 0.08)' }} position={{ y: 0 }} />
            <Bar
              dataKey="count"
              fill="url(#colorGradient)"
              radius={[8, 8, 0, 0]}
              isAnimationActive={false}
              maxBarSize={60}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818cf8" stopOpacity={1} />
                <stop offset="100%" stopColor="#6366f1" stopOpacity={1} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </S.ChartArea>
    </S.Card>
  )
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.[0]) return null

  return (
    <S.TooltipBox>
      <S.TooltipLabel>{formatRange(label)}</S.TooltipLabel>
      <S.TooltipValue>{payload[0].value.toLocaleString()}건</S.TooltipValue>
    </S.TooltipBox>
  )
}
