'use client';  // Add this for Next.js 13+ client components

import React, { useState, useEffect } from 'react';
import { useProducts } from '../../pages/api/productApi.js';  // Update import path as needed
import Product from '@/components/product/Product';  // Update import path
import Pagination from '@/components/pagination/Pagination';  // Update import path
import Search from '@/components/search/Search';  // Update import path

import styles from './Catalog.module.css';

export default function Catalog() {
const { products: apiProducts, loading, error } = useProducts();
    const [products, setProducts] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [sortType, setSortType] = useState('Featured');
    const [searchFilters, setSearchFilters] = useState({
        term: '',
        priceRange: { min: 0 }
    });
    const itemsPerPage = 3;

    useEffect(() => {
        if (apiProducts && apiProducts.length > 0) {
            setProducts([...apiProducts]);
        }
    }, [apiProducts]);

    const getFilteredAndSortedProducts = () => {
        let result = [...products];
        
        if (searchFilters.term && searchFilters.term.trim() !== '') {
            const term = searchFilters.term.toLowerCase().trim();
            result = result.filter(product => 
                (product.name && product.name.toLowerCase().includes(term)) ||
                (product.description && product.description.toLowerCase().includes(term))
            );
        }
        
        if (searchFilters.priceRange) {
            result = result.filter(product => 
                product.price >= searchFilters.priceRange.min
            );
        }
        
        switch(sortType) {
            case 'Price: Low to High':
                result.sort((a, b) => Number(a.price) - Number(b.price));
                break;
            case 'Price: High to Low':
                result.sort((a, b) => Number(b.price) - Number(a.price));
                break;
            case 'Name: A to Z':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'Name: Z to A':
                result.sort((a, b) => b.name.localeCompare(a.name));
                break;
            default:
                break;
        }
        
        return result;
    };

    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        setSortType(sortValue);
    };

    const handleSearch = (term) => {
        setSearchFilters(prev => ({
            ...prev,
            term
        }));
    };

    const handlePriceFilter = (priceRange) => {
        setSearchFilters(prev => ({
            ...prev,
            priceRange
        }));
    };

    const handleClearFilters = () => {
        setSearchFilters({
            term: '',
            priceRange: { min: 0 }
        });
    };

    const filteredProducts = getFilteredAndSortedProducts();
    const endOffset = itemOffset + itemsPerPage;
    const currentProducts = filteredProducts.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
        setItemOffset(newOffset);
        window.scrollTo(0, 0);
    };

    return (
        <section className={styles.catalog}>
             {loading ? (
            <div>Loading products...</div>
        ) : error ? (
            <div>Error loading products: {error}</div>
        ) : (
            <div className={styles.container}>
                <div className={styles.catalogContainer}>
                    <Search 
                        onSearch={handleSearch}
                        onPriceFilter={handlePriceFilter}
                        onClearFilters={handleClearFilters}
                    />
                    <div className={styles.catalogContent}>
                        <div className={styles.catalogHeader}>
                            <h1>All Products</h1>
                            <div className={styles.catalogTools}>
                                <div className={styles.catalogSort}>
                                    <label htmlFor="sort-by">Sort by:</label>
                                    <select 
                                        id="sort-by" 
                                        className={styles.sortSelect}
                                        value={sortType}
                                        onChange={handleSortChange}
                                    >
                                        <option>Featured</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Name: A to Z</option>
                                        <option>Name: Z to A</option>
                                    </select>
                                </div>
                                <div className={styles.catalogView}>
                                    <button className={`${styles.viewBtn} ${styles.active}`}>☰</button>
                                    <button className={styles.viewBtn}>⊞</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className={`${styles.productGrid} ${styles.catalogGrid}`}>
                            {currentProducts.length > 0 ? (
                                currentProducts.map(product => (
                                    <div key={product.id || product.name}>
                                        <Product {...product} />
                                    </div>
                                ))
                            ) : (
                                <div className={styles.noProductsMessage}>
                                    <p>No products match your search criteria.</p>
                                </div>
                            )}
                        </div>
                        
                        {filteredProducts.length > 0 && (
                            <Pagination 
                                pageCount={pageCount} 
                                onPageChange={handlePageClick} 
                            />
                        )}
                    </div>
                </div>
            </div>
         )}
    </section>
    );
}