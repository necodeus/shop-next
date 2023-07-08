import Head from 'next/head';
import dynamic from 'next/dynamic';

import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Breadcrumbs from '../sections/Breadcrumbs';
import Error from '../components/Error';
import Container from '../components/Container';
import Heading from '../components/Heading';
import ModalLogin from '../modals/SignIn';

const ModalNewOrder = dynamic(() => import('../modals/NewOrder'), { ssr: false });

export async function getServerSideProps({ res, query }) {
    const { success, statusCode, data, message } = await (await fetch(`${process.env.API_URI}/shop/views/${query.page}`, {
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

export default function PageView({ data, error }) {
    const page = data.pages.find(page => page.id === data.currentPage);

    return !error && <>
        <Head>
            <title>{ page.title }</title>
            <meta name="description" content="Strona" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ModalNewOrder />
        <ModalLogin />

        <Header navigation={data.navigations.main} />
        <Breadcrumbs breadcrumbs={data.breadcrumbs} />

        <Container>
            <Heading>{ page.title }</Heading>
            <div dangerouslySetInnerHTML={{__html: page.content}}></div>
        </Container>

        <Footer navigations={data.navigations} />
    </> || <Error code={error.code} message={error.message} />
};
