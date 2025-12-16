import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import * as S from './BarChart.styled'
import { ChartTooltip } from '../ChartTooltip'
import type { ChartItem } from '@/pages/Dashboard/components/PurchaseChart'

type Props<T> = {
  data: T[]
  dataKey: keyof T
  xAxisKey: keyof T
  xAxisFormatter?: (value: string) => string
  tooltipFormatter?: (label: string) => string
  height?: number
}

export const BarChart = <T extends ChartItem>({
  data,
  dataKey,
  xAxisKey,
  xAxisFormatter,
  tooltipFormatter,
  height = 380,
}: Props<T>) => {
  return (
    <S.Container height={height}>
      <ResponsiveContainer>
        <RechartsBarChart data={data} margin={{ top: 20, right: 10, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
          <XAxis
            dataKey={xAxisKey as string}
            tickFormatter={xAxisFormatter}
            tick={{ fontSize: 13, fill: '#6b7280' }}
            axisLine={{ stroke: '#e5e7eb' }}
            tickLine={false}
          />
          <YAxis tick={{ fontSize: 14, fill: '#6b7280' }} axisLine={false} tickLine={false} />
          <Tooltip
            content={<ChartTooltip formatter={tooltipFormatter} />}
            cursor={{ fill: 'rgba(99, 102, 241, 0.08)' }}
            position={{ y: 0 }}
          />
          <Bar
            dataKey={dataKey as string}
            fill="url(#colorGradient)"
            radius={[8, 8, 0, 0]}
            isAnimationActive
            animationDuration={500}
            animationEasing="ease-out"
            maxBarSize={60}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#818cf8" stopOpacity={1} />
              <stop offset="100%" stopColor="#6366f1" stopOpacity={1} />
            </linearGradient>
          </defs>
        </RechartsBarChart>
      </ResponsiveContainer>
    </S.Container>
  )
}
