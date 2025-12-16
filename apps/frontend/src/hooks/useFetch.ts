import { useEffect, useRef, useState } from 'react'

type UseFetchOptions<T, P = void> = {
  requestFn: (params?: P) => Promise<T>
}

type UseFetchReturn<T, P = void> = {
  data: T | null
  loading: boolean
  error: string | null
  refetch: (params?: P) => Promise<void>
}

export const useFetch = <T, P = void>({ requestFn }: UseFetchOptions<T, P>): UseFetchReturn<T, P> => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const requestFnRef = useRef(requestFn)
  requestFnRef.current = requestFn

  const fetchData = async (params?: P) => {
    try {
      setLoading(true)
      setError(null)
      const result = params !== undefined ? await requestFnRef.current(params) : await requestFnRef.current()
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : '데이터를 불러오지 못했습니다.')
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])

  return { data, loading, error, refetch: fetchData }
}
