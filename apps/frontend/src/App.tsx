import { useEffect } from 'react'
import { getCustomerPurchases, getCustomers } from './apis/domain/customer'
import { getPurchaseFrequency } from './apis/domain/purchase'
import Wrapper from './layout/Wrapper'
import Flex from './layout/Flex'

function App() {
  async function dataFetchAll() {
    try {
      console.log('===== 1. 고객 목록 (기본) =====')
      const customers = await getCustomers()
      console.log(customers)

      console.log('===== 2. 고객 목록 (query 포함) =====')
      const customersWithQuery = await getCustomers({
        sortBy: 'asc',
        name: '김',
      })
      console.log(customersWithQuery)

      console.log('===== 3. 특정 고객 구매 내역 =====')
      const customerPurchases = await getCustomerPurchases(1)
      console.log(customerPurchases)

      console.log('===== 4. 구매 빈도 (기본) =====')
      const purchaseFrequency = await getPurchaseFrequency()
      console.log(purchaseFrequency)

      console.log('===== 5. 구매 빈도 (기간 query 포함) =====')
      const purchaseFrequencyWithQuery = await getPurchaseFrequency({
        from: '2024-07-01',
        to: '2024-07-01',
      })
      console.log(purchaseFrequencyWithQuery)
    } catch (error) {
      console.error('API Error:', error)
    }
  }

  useEffect(() => {
    dataFetchAll()
  }, [])
  return (
    <Wrapper maxWidth={1280} style={{ backgroundColor: 'yellow', padding: '50px 0' }}>
      <Flex direction="column" gap={40} align="center">
        <span style={{ fontSize: '30px', fontWeight: '800' }}>Datarize Frontend 과제</span>
        <div style={{ backgroundColor: 'blue', width: '100%', height: '300px' }}>데이터 조회</div>
        <div style={{ backgroundColor: 'red', width: '100%', height: '300px' }}>고객 조회</div>
      </Flex>
    </Wrapper>
  )
}

export default App
