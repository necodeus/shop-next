import Head from "next/head";

import Breadcrumbs from "../sections/Breadcrumbs";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Container from "../components/Container";
import Heading from "../components/Heading";

export default function ShopIndexView() {
    const main = [
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
    ];

    const breadcrumbs = [
        {
            title: "Strona główna",
            slug: "/"
        },
        {
            title: "Sklep",
            slug: "/sklep"
        }
    ];

    const navigations = {
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
    };

    return <>
        <Head>
            <title>Sklep</title>
            <meta name="description" content="Sklep" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header navigation={main} />
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <Container>
            <Heading>Sklep</Heading>
            <div>Lista produktów...</div>
        </Container>

        <Footer navigations={navigations} />
    </>
};
