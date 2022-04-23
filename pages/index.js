import Head from 'next/head'
import PageTitle from "../components/PageTitle/PageTitle";
import ProductCard from "../components/ProductCard/ProductCard";
import { pane, cancelled, successful } from "./../styles/home.module.scss"
import { useRouter } from 'next/router'



export default function Home(props) {
    const products = props.products;
    const router = useRouter()
    const { canceled, success } = router.query

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Moxie Print" />
                <meta name="keywords" content="Moxie Print" />
                <title>Moxie Print</title>
            </Head>
            <PageTitle tagline="Moxie Print" title="Moxie Print" />
            {canceled && <h3 className={cancelled}>Payment Cancelled</h3>}
            {success && <h3 className={successful}>Payment Successfully!</h3>}
            <main className={pane}>
                {products.map(product => <ProductCard key={product.key} product={product} />)}
            </main>
        </>
    )
}

export async function getStaticProps() {

    const res = await fetch('https://a2-32ab6-default-rtdb.firebaseio.com/product.json')
    const productData = await res.json();
    const products = Object.values(productData)
    return {
        props: {
            products
        },
        revalidate: 60,
    }
}

