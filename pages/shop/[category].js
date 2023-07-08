import Head from 'next/head';
import dynamic from 'next/dynamic';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../../store/shopData';

import Error from '../../components/Error';
import Breadcrumbs from '../../sections/Breadcrumbs';
import Footer from '../../sections/Footer';
import Header from '../../sections/Header';
import Heading from '../../components/Heading';
import GridProduct from '../../components/GridProduct';
import Container from '../../components/Container';
import GridContainer from '../../components/GridContainer';
import ModalLogin from '../../modals/SignIn';

const ModalNewOrder = dynamic(() => import('../../modals/NewOrder'), { ssr: false });

export async function getServerSideProps({ res, query }) {
    console.log(query.category);
    const { data, success, statusCode, message } = await (await fetch(`${process.env.API_URI}/shop/views/c-${query.category}`, {
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
                    message: message,
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

export default function ShopCategoryView({ data, error }) {
    const category = data.categories.find(item => item.id === data.currentCategory);
    const filteredProducts = data.products.filter(item => data.currentCategoryProducts.includes(item.id));

    const dispatch = useDispatch();

    const { products } = useSelector((state) => state.shopData);
    const { orderProducts } = useSelector((state) => state.localData);

    useEffect(() => {
        let a = products.map(item => item.id); // produkty już pobrane
        let b = orderProducts.map(item => item.id); // produkty z koszyka
        let c = _.uniq(_.difference(b, a));

        dispatch(getProducts(c));
        console.log('CATEGORY');
    }, []);
    
    return !error && <>
        <Head>
            <title>{ category.name }</title>
            <meta name="description" content={ category.description } />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ModalNewOrder />
        <ModalLogin />

        <Header navigation={data.navigations.main} />
        <Breadcrumbs breadcrumbs={data.breadcrumbs} />

        <Container>
            <Heading>{category.name}</Heading>
        </Container>

        <Container>
            <GridContainer>
                {filteredProducts.map((product, index) => 
                    <GridProduct key={index} category={category} product={product} />
                )}
            </GridContainer>
        </Container>

        <Footer navigations={data.navigations} />
    </> || <Error code={error.code} message={error.message} />
};
