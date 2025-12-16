import type { Customer } from '@/apis/domain/customer/type'
import * as S from './CustomerTableRow.styled'
import { formatCurrency } from '../../utils/formatCurrency'

type Props = {
  customer: Customer
}

export const CustomerTableRow = ({ customer }: Props) => {
  return (
    <S.Row to={`?customerId=${customer.id}`}>
      <S.Cell>{customer.id}</S.Cell>
      <S.Cell>{customer.name}</S.Cell>
      <S.Cell align="right">{customer.count}회</S.Cell>
      <S.Cell align="right" bold>
        ₩{formatCurrency(customer.totalAmount)}
      </S.Cell>
    </S.Row>
  )
}
