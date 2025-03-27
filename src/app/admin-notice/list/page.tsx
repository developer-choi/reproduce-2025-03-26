import dayjs from 'dayjs';
import Link from 'next/link';

export default async function Page() {
  const {list} = await getNoticeListApi();

  return (
    <div>
      <h1>admin-notice list page</h1>
      <ul>
        {list.map(item => (
          <li key={item.id} style={{paddingBlock: 16}}>
            <Link href={`/admin-notice/${item.id}/edit`}>{item.title} - created at {item.createdAt}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function getNoticeListApi() {
  // fetch('https://some.domain/notice', {
  //   headers: {
  //     ['access-token']: 'administrator access token token'
  //   },
  //   cache: 'no-store'
  // });

  return {
    list: [1, 2, 3].map(id => ({
      id,
      title: `admin notice item${id}`,
      createdAt: dayjs().format('HH:mm:ss')
    }))
  };
}
