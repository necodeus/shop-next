import Head from 'next/head';
import dynamic from 'next/dynamic';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../../store/shopData';

import Error from '../../../components/Error';
import Breadcrumbs from "../../../sections/Breadcrumbs";
import Footer from "../../../sections/Footer";
import Header from "../../../sections/Header";
import Container from '../../../components/Container';
import Heading from '../../../components/Heading';
import ProductDetails from '../../../sections/ProductDetails';
import ProductReviews from '../../../sections/ProductReviews';
import ProductInShopProduct from '../../../sections/Product';

const ModalLogin = dynamic(() => import('../../../modals/SignIn'), { ssr: false });
const ModalNewOrder = dynamic(() => import('../../../modals/NewOrder'), { ssr: false });

export async function getServerSideProps({ res, query }) {
    const { data, success, statusCode, message } = await (await fetch(process.env.API_URI + `/shop/views/c-${query.category}/p-${query.product}`, {
        headers: {
            'Authorization': 'Bearer ' + process.env.API_USER_TOKEN, 
            'Content-Type': 'application/json',
        }
    })).json();

    if (!success) {
        res.statusCode = statusCode;
        return {
            props: {
                error: {
                    code: statusCode,
                    message,
                },
            },
        }
    }

    return {
        props: {
            data,
        }
    }
}

export default function ShopProductView({ data, error }) {
    const product = data?.products.find(product => product.id === data.currentProduct);

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.shopData);
    const { orderProducts } = useSelector((state) => state.localData);

    useEffect(() => {
        let a = products.map(item => item.id); // produkty już pobrane
        let b = orderProducts.map(item => item.id); // produkty z koszyka
        let c = _.uniq(_.difference(b, a));

        dispatch(getProducts(c));
        console.log('PRODUCT');
    }, []);
    
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
