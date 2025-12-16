# Datarize Frontend 과제 전형

작성자 : 우아한테크코스 7기 FE 최호연

---

## 📋 과제 목표

쇼핑몰의 7월 한 달간 구매 데이터를 시각화하고 분석할 수 있는 대시보드 애플리케이션 개발

### **핵심 목표**

- 가격대별 구매 빈도를 직관적으로 시각화 (차트)
- 고객 구매 데이터를 효율적으로 검색 및 정렬
- 개별 고객의 상세 구매 내역 제공

---

## 기능 요구사항

### 환경 버전

- Node.js: `20.13.1` / Yarn: `1.22.22`

### 주요 기능 구현

**1. 가격대별 구매 빈도 차트**

- [x] 바 차트 형태로 시각화 (Recharts 활용)
- [x] 차트 애니메이션 및 툴팁
- [x] 바 차트 x축 가독성 올리기 (~만)
- [x] 날짜 범위 선택 기능 (from ~ to)
- [x] 단일 날짜 조회 지원

**2. 고객 목록 및 검색 기능**

- [x] 총 구매 금액 기준 정렬 (오름차순/내림차순/정렬 안 함) / (클라이언트 사이드 필터링)
- [x] 고객 이름 실시간 검색 (클라이언트 사이드 필터링)
- [x] ID, 이름, 구매 횟수, 총 구매 금액 표시 (테이블 형식)
- [x] 검색 결과 없을 시 Empty

**3. 고객 상세 구매 내역**

- [x] Row 클릭 시 모달로 상세 정보 표시
- [x] URL 기반 상태 관리 (`?customerId=123`)로 공유 가능
- [x] 구매 날짜, 제품명, 수량, 가격, 썸네일 표시
- [x] ESC 키로 닫기, 배경 클릭 닫기 지원
- [x] Body 스크롤 잠금 처리

---

## 컴포넌트 구조

<img width="948" height="621" alt="component1" src="https://github.com/user-attachments/assets/602b669b-8c28-4949-b24c-8bc9ab4e913e" />

<img width="830" height="621" alt="component2" src="https://github.com/user-attachments/assets/b7881652-d585-4ed7-b988-77fb5a28bcfc" />

---

## 파일 구조

```bash
src/
├── apis/                          # API 레이어
│   ├── core/                      # API 핵심 유틸
│   │   ├── baseFetch.ts          # Fetch 래퍼
│   │   ├── index.ts              # API 인스턴스
│   │   └── type.ts               # 공통 타입
│   └── domain/                    # 도메인별 API
│       ├── customer/
│       │   ├── index.ts          # 고객 API
│       │   └── type.ts           # 고객 타입
│       └── purchase/
│           ├── index.ts          # 구매 API
│           └── type.ts           # 구매 타입
│
├── pages/                         # 페이지 컴포넌트
│   └── Dashboard/
│       ├── components/            # 페이지 전용 컴포넌트
│       │   ├── DashboardSection/  # 섹션 래퍼
│       │   ├── PurchaseChart/     # 구매 차트
│       │   ├── customer/          # 고객 관련
│       │   │   ├── CustomerList/
│       │   │   ├── CustomerTable/
│       │   │   └── CustomerTableRow/
│       │   └── customerDetail/    # 고객 상세
│       │       ├── CustomerDetailModal/
│       │       ├── CustomerStats/
│       │       ├── PurchaseList/
│       │       └── PurchaseItem/
│       ├── hooks/                 # 커스텀 훅
│       │   ├── useCustomerModal.ts
│       │   ├── useKeyboardEscape.ts
│       │   └── useLockBodyScroll.ts
│       ├── utils/                 # 유틸 함수
│       │   ├── filterCustomers.ts
│       │   ├── formatCurrency.ts
│       │   ├── formatRange.ts
│       │   └── sortCustomers.ts
│       ├── Dashboard.styled.ts
│       └── index.tsx
│
└── shared/                        # 공통 컴포넌트/훅
    ├── components/
    │   ├── DateRangePicker/       # 날짜 범위 선택
    │   ├── SearchInput/           # 검색 입력
    │   ├── SortAccordion/         # 정렬 아코디언
    │   └── charts/                # 차트 컴포넌트
    │       ├── BarChart/
    │       └── ChartTooltip/
    └── hooks/
        └── useFetch.ts            # 데이터 페칭 훅
```

---

## **구조 설계 원칙**

- **도메인 기반 분리**: 고객, 고객 상세, 구매 도메인 분리
- **공통/전용 분리**: `shared/`에 재사용 가능한 컴포넌트, `pages/`에 페이지 전용 컴포넌트
- **단일 책임**: 각 컴포넌트는 하나의 역할만 담당

---

## 라이브러리 선택 이유

```json
{
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router": "^7.10.1",
  "recharts": "^3.6.0"
}
```

- **스타일링**: Emotion

  - **CSS 직렬화 속도**: styled-components 대비 20% 빠름
  - **번들 크기**: 11KB (styled-components: 15KB)
  - 유연한 스타일링

- **차트 라이브러리**: Recharts
  - JSX로 직관적인 구조 표현
  - 커스터마이징 용이
  - 다른 차트라이브러리에 비해 번들크기 작음.

---

## 기술적 결정

### 1. 날짜 선택 UI: 개별 Input vs 달력 피커

**최종 선택: 개별 Input (`<input type="date">` 2개)**

**선택 이유:**

```tsx
// AS-IS (고려했던 방식)
<DatePicker mode="range" />  // 마우스로만 조작

// TO-BE (선택한 방식)
<input type="date" /> ~ <input type="date" />  // 키보드 입력 가능
``
```

- **빠른 데이터 입력**
  - 사용자가 키보드로 `2024-07-15` 직접 타이핑 가능
- **정확한 날짜 지정**
  - 달력에서 클릭보다 정확

### 2. 클라이언트 필터링 vs 서버 필터링

**최종 선택: 클라이언트 필터링**

```tsx
// API는 쿼리 파라미터 지원하지만 사용하지 않음
export const getCustomers = async (params?: CustomersQuery) => {
  return api.get("/api/customers", params); // params 전달 안 함
};

// 클라이언트에서 필터링/정렬
const processedCustomers = useMemo(() => {
  const filtered = filterCustomers(customers, searchQuery);
  return sortCustomers(filtered, sortOrder);
}, [customers, searchQuery, sortOrder]);
```

**선택 이유:**

| 기준      | 클라이언트 | 서버            | 선택                   |
| --------- | ---------- | --------------- | ---------------------- |
| UX 속도   | 즉각 반응  | 네트워크 지연   | 빠름                   |
| 서버 부하 | 요청 1번   | 타이핑마다 요청 | 적음                   |
| 최신성    | 낮음       | 높음            | 새로고침 버튼으로 보완 |

**트레이드오프:**

- 최신 데이터 보장 안 됨
- **새로고침 버튼 제공**으로 해결

```tsx
<RefreshButton onClick={refetch}>🔄 최신 데이터 불러오기</RefreshButton>
```
