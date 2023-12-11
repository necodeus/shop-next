
import Breadcrumbs from "@/sections/Breadcrumbs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Container from '@/components/Container';
import Heading from "@/components/Heading";

export default function BlogIndexView() {
    const breadcrumbs: any = [
        {
            title: "Strona główna",
            slug: "/"
        },
        {
            title: "Blog",
            slug: "/blog"
        }
    ];

    return <>
        <Header />
        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <Container>
            <Heading>Blog</Heading>
            <div>Lista wpisów...</div>
        </Container>

        <Footer />
    </>
};
