export const useTimeUtils = () => {
  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24

  return {
    seconds,
    minutes,
    hours,
    days,
  }
}
