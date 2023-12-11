import Head from 'next/head';
import Breadcrumbs from '@/sections/Breadcrumbs';
import Footer from '@/sections/Footer';
import Header from '@/sections/Header';
import Heading from '@/components/Heading';
import GridProduct from '@/components/GridProduct';
import Container from '@/components/Container';
import GridContainer from '@/components/GridContainer';

export default function ShopCategoryView() {
    const breadcrumbs: any = [
        { id: 1, name: 'Strona główna', href: '/' },
        { id: 2, name: 'Sklep', href: '/shop' },
        { id: 3, name: 'Kategoria 1', href: '/shop/kategoria-1' },
    ];

    const category = {
        name: 'Kategoria 1',
    };

    const products = [
        {
            name: 'Produkt 1',
            price: 100,
            images: [
                '/images/products/product-1.jpg',
                '/images/products/product-2.jpg',
                '/images/products/product-3.jpg',
                '/images/products/product-4.jpg',
                '/images/products/product-5.jpg',
                '/images/products/product-6.jpg',
            ],
        },
        {
            name: 'Produkt 2',
            price: 200,
            images: [
                '/images/products/product-1.jpg',
                '/images/products/product-2.jpg',
                '/images/products/product-3.jpg',
                '/images/products/product-4.jpg',
                '/images/products/product-5.jpg',
                '/images/products/product-6.jpg',
            ],
        },
        {
            name: 'Produkt 3',
            price: 300,
            images: [
                '/images/products/product-1.jpg',
                '/images/products/product-2.jpg',
                '/images/products/product-3.jpg',
                '/images/products/product-4.jpg',
                '/images/products/product-5.jpg',
                '/images/products/product-6.jpg',
            ],
        },
        {
            name: 'Produkt 4',
            price: 400,
            images: [
                '/images/products/product-1.jpg',
                '/images/products/product-2.jpg',
                '/images/products/product-3.jpg',
                '/images/products/product-4.jpg',
                '/images/products/product-5.jpg',
                '/images/products/product-6.jpg',
            ],
        },
        {
            name: 'Produkt 5',
            price: 500,
            images: [
                '/images/products/product-1.jpg',
                '/images/products/product-2.jpg',
                '/images/products/product-3.jpg',
                '/images/products/product-4.jpg',
                '/images/products/product-5.jpg',
                '/images/products/product-6.jpg',
            ],
        },
        {
            name: 'Produkt 6',
            price: 600,
            images: [
                '/images/products/product-1.jpg',
                '/images/products/product-2.jpg',
                '/images/products/product-3.jpg',
                '/images/products/product-4.jpg',
                '/images/products/product-5.jpg',
                '/images/products/product-6.jpg',
            ],
        },
    ];

    return <>
        <Header />
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <Container>
            <Heading>{category.name}</Heading>
        </Container>

        <Container>
            <GridContainer>
                {products.map((product: any, index: any) =>
                    <GridProduct key={index} category={category} product={product} />
                )}
            </GridContainer>
        </Container>

        <Footer />
    </>
};
