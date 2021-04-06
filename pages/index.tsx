import Head from 'next/head';

import Cube from '@Public/svg/cube.svg';
import { Button } from '@Components/common';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Darqube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div>This is an svg</div>
        <Cube />
        <div>This is a button</div>
        <Button onClick={() => console.log('click')} />
      </div>
    </div>
  );
}
