import React from 'react';
import Head from 'next/head';
import About from '../components/about/About';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Us | StyleHub</title>
        <meta name="description" content="Learn more about StyleHub and our story." />
      </Head>
      <About />
    </>
  );
}