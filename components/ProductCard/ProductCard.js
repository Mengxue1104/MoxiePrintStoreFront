import React from 'react';
import Image from 'next/image'
import { productCard, productprice, name, description } from './styles.module.scss'


const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`
}


function ProductCard({ children, product, checkoutRequest, ...props }) {
    const { title, price, custom, image, key } = { ...product }
    return (
        <aside className={productCard}>
            <header>
                <Image
                    loader={myLoader}
                    src={image}
                    alt={title}
                    width={300}
                    height={300}
                    quality={50}
                    layout="intrinsic"
                />

            </header>
            <h2 className={name}>{title}</h2>
            <p className={productprice}>${price}</p>
            <p className={description}>{custom}</p>
            <footer>
                <form action="/api/checkout" method="POST">
                    <input type="hidden" name="key" value={key} />
                    <button type="submit">Buy Now</button>
                </form>
            </footer>
        </aside>
    )
}

export default ProductCard