import { clsx } from 'clsx'
import type { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatLongDate(input: string | number): string {
  const date = new Date(input)
  return date.toLocaleDateString('pt-br', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export function formatShortDate(input: string | number): string {
  const date = new Date(input)

  return new Intl.DateTimeFormat('pt-br').format(date)
}

export function formatNumberInHours(num: number) {
  const hours = Math.floor(num / 60)
  const minutes = num % 60
  return hours + 'h ' + minutes + 'm'
}

// export function formatArrayInText(list: any[]) {
//   return new Intl.ListFormat('pt-br', {
//     style: 'long',
//     type: 'conjunction',
//   }).format(list)
// }
