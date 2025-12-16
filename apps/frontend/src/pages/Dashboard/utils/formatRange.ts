export const formatRange = (range?: string) => {
  if (!range) return 'x'

  const match = range.match(/^(\d+)\s*-\s*(\d+)$/)
  if (!match) return 'x'

  const min = Number(match[1])
  const max = Number(match[2])

  return `${Math.floor(min / 10000)}~${Math.floor(max / 10000)}만`
}
