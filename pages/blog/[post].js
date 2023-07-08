
import Head from 'next/head';
import dynamic from 'next/dynamic';

import Error from '../../components/Error';
import Breadcrumbs from "../../sections/Breadcrumbs";
import Footer from "../../sections/Footer";
import Header from "../../sections/Header";
import Heading from "../../components/Heading";
import Container from '../../components/Container';
import ModalLogin from '../../modals/SignIn';

const ModalNewOrder = dynamic(() => import('../../modals/NewOrder'), { ssr: false });

// move to pages/api/blog/[post].js
export async function getServerSideProps({ res, query }) {
    const { success, statusCode, data, message } = await (await fetch(`${process.env.API_URI}/shop/views/blog/${query.post}`, {
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

export default function BlogPostView({ data, error }) {
    const post = data.posts.find(post => post.id === data.currentPost);

    return !error && <>
        <Head>
            <title>{ post.title }</title>
            <meta name="description" content={ post.description } />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <ModalNewOrder />
        <ModalLogin />

        <Header navigation={data.navigations.main} />
        <Breadcrumbs breadcrumbs={data.breadcrumbs} />

        <Container>
            <Heading>{post.title}</Heading>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </Container>

        <Footer navigations={data.navigations} />
    </> || <Error code={error.code} message={error.message} />
};
