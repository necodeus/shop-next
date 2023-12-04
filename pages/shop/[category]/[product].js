import Head from 'next/head';
import dynamic from 'next/dynamic';

import Error from '../../../components/Error';
import Breadcrumbs from "../../../sections/Breadcrumbs";
import Footer from "../../../sections/Footer";
import Header from "../../../sections/Header";
import Container from '../../../components/Container';
import Heading from '../../../components/Heading';
import ProductDetails from '../../../sections/ProductDetails';
import ProductReviews from '../../../sections/ProductReviews';
import ProductInShopProduct from '../../../sections/Product';

export default function ShopProductView() {
    const data = {
        navigations: {
            main: [
                { id: 1, name: 'Strona główna', href: '/' },
                { id: 2, name: 'Sklep', href: '/shop' },
            ],
            footer: [
                { id: 1, name: 'Strona główna', href: '/' },
                { id: 2, name: 'Sklep', href: '/shop' },
            ],
        },
        breadcrumbs: [
            { id: 1, name: 'Strona główna', href: '/' },
            { id: 2, name: 'Sklep', href: '/shop' },
            { id: 3, name: 'Produkt 1', href: '/shop/produkt-1' },
        ],
    };

    const product = {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'Produkt 1',
        price: 100,
        images: [
            '/images/products/product-1.jpg',
            '/images/products/product-2.jpg',
            '/images/products/product-3.jpg',
            '/images/products/product-4.jpg',
            '/images/products/product-5.jpg',
            '/images/products/product-6.jpg',
        ],
    }

    return !error && <>
        <Head>
            <title>{ product.name }</title>
            <meta name="description" content={ product.description } />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        {<ModalNewOrder />}
        {<ModalLogin />}

        <Header navigation={data.navigations.main} />
        <Breadcrumbs breadcrumbs={data.breadcrumbs} />

        {<Container>
            <ProductInShopProduct currentProduct={product} />
        </Container>}

        <Container>
            <Heading>Więcej o produkcie</Heading>
            <ProductDetails />
        </Container>

        <Container>
            <Heading>Opinie</Heading>
            <ProductReviews />
        </Container>

        <Footer navigations={data.navigations} />
    </> || <Error code={error.code} message={error.message} />
};
