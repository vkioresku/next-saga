import Head from 'next/head';

import { Button } from '@Components/common';
import { useSelector } from 'react-redux';
import { wrapper, SagaStore } from '@State';
import { loadData } from '@State/actions';
import { END } from 'redux-saga';

const Home = () => {
  const placeholderData = useSelector(
    (state: { placeholderData: [] }) => state.placeholderData
  );

  return (
    <div>
      <Head>
        <title>Darqube</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Button onClick={() => console.log('click')} />
      </div>
      {placeholderData && (
        <pre>
          <code>{JSON.stringify(placeholderData, null, 2)}</code>
        </pre>
      )}
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  if (!store.getState()?.placeholderData) {
    store.dispatch(loadData());
    store.dispatch(END);
  }

  await (store as SagaStore).sagaTask.toPromise();
});

export default Home;
