import Breadcrumbs from "@/sections/Breadcrumbs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Container from "@/components/Container";
import Heading from "@/components/Heading";

export default function ShopIndexView() {
    const breadcrumbs: any = [
        {
            title: "Strona główna",
            slug: "/"
        },
        {
            title: "Sklep",
            slug: "/sklep"
        }
    ];

    return <>
        <Header />
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <Container>
            <Heading>Sklep</Heading>
            <div>Lista produktów...</div>
        </Container>

        <Footer />
    </>
};
