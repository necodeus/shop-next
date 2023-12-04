import Head from 'next/head';
import dynamic from 'next/dynamic';

import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Breadcrumbs from '../sections/Breadcrumbs';
import Error from '../components/Error';
import Container from '../components/Container';
import Heading from '../components/Heading';

export default function PageView() {
    const navigation = {
        main: [
            {
                title: "Strona główna",
                slug: "/"
            },
            {
                title: "Sklep",
                slug: "/sklep"
            },
            {
                title: "Blog",
                slug: "/blog"
            },
            {
                title: "Kontakt",
                slug: "/kontakt"
            },
        ],
        footer: [
            {
                title: "Strona główna",
                slug: "/"
            },
            {
                title: "Sklep",
                slug: "/sklep"
            },
            {
                title: "Blog",
                slug: "/blog"
            },
            {
                title: "Kontakt",
                slug: "/kontakt"
            }
        ]
    }

    const breadcrumbs = [
        {
            title: "Strona główna",
            slug: "/"
        }
    ]

    const title = "Strona";

    const content = `
        <p>Strona</p>
    `;

    const navigations = navigation.footer;

    const main = navigation.main;

    return <>
        <Head>
            <title>{ title }</title>
            <meta name="description" content="Strona" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header navigation={main} />
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <Container>
            <Heading>{ title }</Heading>
            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </Container>

        <Footer navigations={navigations} />
    </>
};
