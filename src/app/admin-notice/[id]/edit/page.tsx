'use client';

import {FormEvent, useCallback} from 'react';
import {useRouter} from 'next/navigation';

export default function Page() {
  const {push, refresh} = useRouter();
  
  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    // validate form data

    /** Scenario
     * 1. Enter the admin notice list page.
     * 2. Fetch the notice list with cache 'no-store'.
     * 3. Enter a specific notice edit page.
     * 4. (Edit the notice)
     * 5. Submit the form.
     * 6. Return to the list page.
     * 7. But the notice list page is still not updated because it remains in the client router cache.
     */
    refresh();
    event.preventDefault();
    push('/admin-notice/list');
  }, [push, refresh]);
  
  return (
    <>
      <h1>Edit admin-notice page</h1>
      <form onSubmit={onSubmit}>
        <input style={{height: 47}} placeholder="  notice title"/>
        <button style={{padding: '16px 48px', color: 'white', backgroundColor: 'purple', fontWeight: 'bold'}}>Save</button>
      </form>
    </>
  );
}
