import React from 'react';
import Head from 'next/head';
import PageNotFound from '../components/pageNotFound/404';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>PageNotFound | StyleHub</title>
        <meta name="description" content="The Page Was Not Found On StyleHub!" />
      </Head>
      <PageNotFound />
    </>
  );
}