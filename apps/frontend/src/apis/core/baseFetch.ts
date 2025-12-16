import type { HTTPMethod } from '../types'

const BASE_URL = 'http://localhost:4000'

interface BaseFetchProps<Req, Q> {
  path: string
  method: HTTPMethod
  body?: Req
  query?: Q
}

const baseFetch = async <Res, Req = undefined, Q = undefined>({
  path,
  method,
  query,
  body,
}: BaseFetchProps<Req, Q>): Promise<Res> => {
  const url = new URL(path, BASE_URL)

  if (query) {
    url.search = new URLSearchParams(
      Object.entries(query).reduce((acc, [key, value]) => {
        if (value !== undefined) {
          acc[key] = String(value)
        }
        return acc
      }, {} as Record<string, string>),
    ).toString()
  }

  const response = await fetch(url.toString(), {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body && method !== 'GET' && method !== 'DELETE' ? { body: JSON.stringify(body) } : {}),
  })

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`)
  }

  return (await response.json()) as Res
}

export default baseFetch
