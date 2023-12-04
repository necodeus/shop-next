
import Head from "next/head";
import dynamic from 'next/dynamic';

import Breadcrumbs from "../sections/Breadcrumbs";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Error from '../components/Error';
import Container from '../components/Container';
import Heading from "../components/Heading";

export default function BlogIndexView({ data, error }) {
    return !error && <>
        <Head>
            <title>Blog</title>
            <meta name="description" content="Blog" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header navigation={data.navigations.main} />
        <Breadcrumbs breadcrumbs={data.breadcrumbs} />

        <Container>
            <Heading>Blog</Heading>
            <div>Lista wpisów...</div>
        </Container>

        <Footer navigations={data.navigations} />
    </> || <Error code={error.code} message={error.message} />
};
