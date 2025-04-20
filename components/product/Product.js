// app/components/Product.jsx
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Product.module.css';

export default function Product(product) {
  console.log('product', product)
  return (
    <div className={styles.productCard}>
      <div className={styles.productImgContainer}>
        <div className={styles.productImg}>
          <Link href={`/products/${product.name}/details`}>
            {/* Replace the h1 with the actual image */}
            <Image 
              src={product.image}
              alt={product.name}
              fill
              style={{objectFit: 'contain'}}
            />
          </Link>
        </div>
        <div className={styles.productActions}>
          <Link href={`/products/${product._id}/details`}>
            <div className={styles.productActionBtn}>👁️</div>
          </Link>
          <div className={styles.productActionBtn}>❤️</div>
        </div>
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <div className={styles.productPrice}>
          <span className={styles.currentPrice}>${product.price}</span>
        </div>
      </div>
    </div>
  );
}