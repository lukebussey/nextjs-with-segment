'use client';

import { analytics } from '@/components/analytics'

export default function Button() {
  return (
    <button
      className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={() => analytics.track('Button Clicked')}>
        Click Me
    </button>
  )
}