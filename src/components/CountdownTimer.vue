<script setup lang="ts">
import { computed, onMounted, reactive, ref } from 'vue'
import { useTimeUtils } from '@/utils'

const {
  seconds: _seconds,
  minutes: _minutes,
  hours: _hours,
  days: _days,
} = useTimeUtils()

const props = defineProps({
  endDate: Date,
})

interface DisplayModel {
  days: number | string
  hours: number | string
  minutes: number | string
  seconds: number | string
}

const display = reactive<DisplayModel>({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
})

function formatNumber(value: number) {
  return value < 10 ? '0' + value : value
}

function showRemaining() {
  const timer = setInterval(() => {
    const now = new Date()
    const end = props.endDate || new Date()

    const distance = end.getTime() - now.getTime()

    if (distance === 0) {
      clearInterval(timer)
      return
    }

    const days = Math.floor(distance / _days)
    const hours = Math.floor((distance % _days) / _hours)
    const minutes = Math.floor((distance % _hours) / _minutes)
    const seconds = Math.floor((distance % _minutes) / _seconds)

    display.days = formatNumber(days)
    display.hours = formatNumber(hours)
    display.minutes = formatNumber(minutes)
    display.seconds = formatNumber(seconds)
  }, _seconds)
}

const timeUntil = computed(() => {
  const { days, hours, minutes, seconds } = display

  const dias = days === '01' ? `${days} día` : `${days} días`
  const horas = hours === '01' ? `${hours} hora` : `${hours} horas`
  const minutos = minutes === '01' ? `${minutes} minuto` : `${minutes} minutos`
  const segundos =
    seconds === '01' ? `${seconds} segundo` : `${seconds} segundos`

  if (!days && !hours && !minutes && !seconds) {
    return ''
  }

  return `${dias}, ${horas}, ${minutos}, ${segundos}`
})

onMounted(() => {
  showRemaining()
})
</script>
<template>
  <div
    class="transition-all duration-500"
    :class="timeUntil ? 'opacity-100' : 'opacity-0'"
  >
    <h1 class="dark:text-zinc-700 text-zinc-300">GG Timer 🦄</h1>
    <h1 class="dark:text-zinc-700 text-zinc-300">{{ timeUntil }}</h1>
  </div>
</template>
