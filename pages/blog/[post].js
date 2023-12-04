
import Head from 'next/head';

import Error from '../../components/Error';
import Breadcrumbs from "../../sections/Breadcrumbs";
import Footer from "../../sections/Footer";
import Header from "../../sections/Header";
import Heading from "../../components/Heading";
import Container from '../../components/Container';

export default function BlogPostView({ data, error }) {
    const post = data.posts.find(post => post.id === data.currentPost);

    return !error && <>
        <Head>
            <title>{ post.title }</title>
            <meta name="description" content={ post.description } />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header navigation={data.navigations.main} />
        <Breadcrumbs breadcrumbs={data.breadcrumbs} />

        <Container>
            <Heading>{post.title}</Heading>
            <div dangerouslySetInnerHTML={{__html: post.content}}></div>
        </Container>

        <Footer navigations={data.navigations} />
    </> || <Error code={error.code} message={error.message} />
};
