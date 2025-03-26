'use client';

import React, {CSSProperties, PropsWithChildren, useCallback} from 'react';
import {useRouter} from 'next/navigation';

export default function Layout({children}: PropsWithChildren) {
  const {refresh, push} = useRouter();

  const style: CSSProperties = {
    padding: '8px 16px', color: 'white', fontWeight: 'bold', backgroundColor: 'purple', border: 'none', marginInline: 8
  };

  const pushAndRefresh = useCallback((pathname: string) => {
    refresh();
    push(pathname);
  }, [push, refresh]);

  return (
    <div>
      <nav>
        <button style={style} onClick={() => pushAndRefresh('/unexpected/one')}>router.refresh() and Go to one</button>
        <button style={style} onClick={() => pushAndRefresh('/unexpected/two')}>router.refresh() and Go to two</button>
        <button style={style} onClick={() => pushAndRefresh('/unexpected/three')}>router.refresh() and Go to three</button>
      </nav>
      <nav>
      </nav>
      {children}
    </div>
  );
}
