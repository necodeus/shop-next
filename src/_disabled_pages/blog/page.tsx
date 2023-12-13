
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

    const title = 'Blog';

    const content = `
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    `;

    return <>
        <Header />

        <Breadcrumbs breadcrumbs={breadcrumbs} />

        <Container>
            <Heading>{title}</Heading>

            <div dangerouslySetInnerHTML={{__html: content}}></div>
        </Container>

        <Footer />
    </>
};
