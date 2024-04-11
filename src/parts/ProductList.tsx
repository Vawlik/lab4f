import React, { useState, useEffect } from 'react';
import './css/ProductList.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import productsData from '../products.json';

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const pageSize = 5;
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [allLoaded, setAllLoaded] = useState(false);

    useEffect(() => {
        if (pageLoaded && !allLoaded) {
            loadProducts();
        } else {
            setPageLoaded(true);
        }
    }, [page, pageLoaded, allLoaded]);

    const loadProducts = () => {
        setLoading(true);
        const startIndex = pageSize * (page - 1);
        const endIndex = startIndex + pageSize;

        setTimeout(() => {
            const loadedProducts: Product[] = productsData.slice(startIndex, endIndex);
            setProducts(prevProducts => [...prevProducts, ...loadedProducts]);
            setLoading(false);

            if (loadedProducts.length === 0) {
                setAllLoaded(true);
            }
        }, 1000);
    };

    const fetchMoreData = () => {
        if (!loading && !allLoaded) {
            setPage(page + 1);
        }
    };

    return (
        <div className="product-list">
            <h2 className="products-heading">Товары</h2>
            <InfiniteScroll
                dataLength={products.length}
                next={fetchMoreData}
                hasMore={!allLoaded && hasMore}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Достигнут конец страницы</b>
                    </p>
                }
            >
                <div className="product-wrapper">
                    {products.map(product => (
                        <div key={product.id} className="product">
                            <img src={product.imageUrl} alt={product.name} />
                            <h3 className="product-name">{product.name}</h3>
                            <p className="product-description">{product.description}</p>
                            <p className="product-price"><strong>{product.price} $</strong></p>
                        </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    );
};

export default ProductList;
