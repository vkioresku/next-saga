import Head from 'next/head';

import { Button } from '@Components/common';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Darqube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button onClick={() => console.log('click')} />
      </div>
    </div>
  );
}
