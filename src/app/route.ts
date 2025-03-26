import {redirect} from 'next/navigation';

export async function GET() {
  redirect('/step/one');
}
