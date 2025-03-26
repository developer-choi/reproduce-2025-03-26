'use client';

import {FormEvent, useCallback} from 'react';
import {useRouter} from 'next/navigation';

export default function Page() {
  const {push, refresh} = useRouter();
  
  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    // validate form data

    refresh();
    event.preventDefault();
    push('/admin-notice/list');
  }, [push, refresh]);
  
  return (
    <form onSubmit={onSubmit}>
      <button style={{padding: '16px 48px', color: 'white', backgroundColor: 'purple', fontWeight: 'bold'}}>Form submit</button>
    </form>
  );
}
