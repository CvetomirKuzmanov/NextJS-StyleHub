import React from 'react';
import Head from 'next/head';
import HomePageContent from '../components/home/Home';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home | StyleHub</title>
        <meta name="description" content="Discover the latest trends and collections at StyleHub." />
      </Head>
      <HomePageContent />
    </>
  );
}