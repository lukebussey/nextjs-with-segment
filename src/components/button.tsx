'use client';

import { analytics } from '@/components/analytics'

export default function Button() {
  return (
    <button onClick={() => analytics.track('Button Clicked')}>Click Me</button>
  )
}