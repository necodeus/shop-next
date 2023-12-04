import Head from 'next/head';
import dynamic from 'next/dynamic';

import Error from '../../components/Error';
import Breadcrumbs from '../../sections/Breadcrumbs';
import Footer from '../../sections/Footer';
import Header from '../../sections/Header';
import Heading from '../../components/Heading';
import GridProduct from '../../components/GridProduct';
import Container from '../../components/Container';
import GridContainer from '../../components/GridContainer';

export default function ShopCategoryView({ data, error }) {
    const category = data.categories.find(item => item.id === data.currentCategory);
    const filteredProducts = data.products.filter(item => data.currentCategoryProducts.includes(item.id));

    return !error && <>
        <Head>
            <title>{ category.name }</title>
            <meta name="description" content={ category.description } />
            <link rel="icon" href="/favicon.ico" />
        </Head>

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
