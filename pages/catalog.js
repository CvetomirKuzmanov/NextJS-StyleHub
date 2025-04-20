import React from 'react';
import Head from 'next/head';
import Catalog from '../components/catalog/Catalog';

export default function CatalogPage() {
  return (
    <>
      <Head>
        <title>Product Catalog | StyleHub</title>
        <meta name="description" content="Browse our collection of products" />
      </Head>
      <Catalog />
    </>
  );
}