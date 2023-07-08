import Head from "next/head";
import dynamic from 'next/dynamic';

import Breadcrumbs from "../sections/Breadcrumbs";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Error from '../components/Error';
import ModalLogin from "../modals/SignIn";
import Container from "../components/Container";
import Heading from "../components/Heading";

const ModalNewOrder = dynamic(() => import('../modals/NewOrder'), { ssr: false });

export async function getServerSideProps({ res }) {
    const { data, success, statusCode, message } = await (await fetch(process.env.API_URI + '/shop/views/index', {
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

export default function ShopIndexView({ data, error }) {
    return !error && <>
        <Head>
            <title>Sklep</title>
            <meta name="description" content="Sklep" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ModalNewOrder />
        <ModalLogin />

        <Header navigation={data.navigations.main} />
        <Breadcrumbs breadcrumbs={data.breadcrumbs} />

        <Container>
            <Heading>Sklep</Heading>
            <div>Lista produktów...</div>
        </Container>

        <Footer navigations={data.navigations} />
    </> || <Error code={error.code} message={error.message} />
};
