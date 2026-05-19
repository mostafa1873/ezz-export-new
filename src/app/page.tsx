'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirects to the default locale on the client side
    router.replace('/en');
  }, [router]);

  return null; // Render nothing while redirecting
}
