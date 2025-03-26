'use client';

import React, {PropsWithChildren} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

export default function Layout({children}: PropsWithChildren) {
  const {refresh} = useRouter();

  return (
    <div>
      <nav>
        <Link style={{padding: 10}} href="/step/one">Go to one</Link>
        <Link style={{padding: 10}} href="/step/two">Go to two</Link>
        <Link style={{padding: 10}} href="/step/three">Go to three</Link>
      </nav>
      <button onClick={refresh} style={{padding: '8px 16px', color: 'white', fontWeight: 'bold', backgroundColor: 'red', border: 'none'}}>router.refresh()</button>
      {children}
    </div>
  );
}
