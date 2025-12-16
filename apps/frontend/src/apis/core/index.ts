import baseFetch from './baseFetch'

const api = {
  get: <Res, Q = undefined>(path: string, query?: Q) => baseFetch<Res, undefined, Q>({ path, method: 'GET', query }),
  post: <Res, Req, Q = undefined>(path: string, body?: Req, query?: Q) =>
    baseFetch<Res, Req, Q>({ path, method: 'POST', query, body }),
  put: <Res, Req, Q = undefined>(path: string, body?: Req, query?: Q) =>
    baseFetch<Res, Req, Q>({ path, method: 'PUT', query, body }),
  patch: <Res, Req, Q = undefined>(path: string, body?: Req, query?: Q) =>
    baseFetch<Res, Req, Q>({ path, method: 'PATCH', query, body }),
  delete: <Res, Q = undefined>(path: string, query?: Q) =>
    baseFetch<Res, undefined, Q>({ path, method: 'DELETE', query }),
}

export default api
