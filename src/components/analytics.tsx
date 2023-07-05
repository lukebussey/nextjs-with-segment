'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation'
import { AnalyticsBrowser } from '@segment/analytics-next'

export const analytics = AnalyticsBrowser.load({
  writeKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY!
})

export default function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    analytics.page();
  }, [pathname, searchParams])

  return null;
}