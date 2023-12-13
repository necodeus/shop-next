import Breadcrumbs from '@/sections/Breadcrumbs';
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Container from '@/components/Container';
import ProductInShopProduct from '@/sections/Product';

import { ProductType } from '@/types/api';

export default function ShopProductView() {
    const breadcrumbs: any = [
        { id: 1, name: 'Strona główna', href: '/' },
        { id: 2, name: 'Sklep', href: '/shop' },
        { id: 3, name: 'Produkt 1', href: '/shop/produkt-1' },
    ];

    const product: ProductType = {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        name: 'Produkt 1',
        gross_price: 100,
        images: [
            '/images/products/product-1.jpg',
            '/images/products/product-2.jpg',
            '/images/products/product-3.jpg',
            '/images/products/product-4.jpg',
            '/images/products/product-5.jpg',
            '/images/products/product-6.jpg',
        ],
    }

    return <>
        <Header />

        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <Container>
            <ProductInShopProduct currentProduct={product} />
        </Container>

        <Footer />
    </>
};
