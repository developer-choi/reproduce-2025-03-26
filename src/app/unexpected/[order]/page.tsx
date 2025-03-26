import dayjs from 'dayjs';

export default async function Page({params}: {params: Record<string, string | undefined>}) {
  await timeoutPromise(1000);

  return (
    <div>
      <h1>This page is {params.order}.</h1>
      <h2>This page was generated at {dayjs().format('HH:mm:ss')}.</h2>
    </div>
  );
}

function timeoutPromise(timeout: number) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
