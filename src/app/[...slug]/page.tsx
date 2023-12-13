import Header from '@/sections/Header';
import Breadcrumbs from '@/sections/Breadcrumbs';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Footer from '@/sections/Footer';

const COMMON_URL = 'http://common-api.localhost/api/v1';

const betterFetch = async (url: string) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            return response.json()
        })
        .then(data => {
            return { data, isLoading: false }
        })
        .catch(error => {
            console.error(error)
            return { data: null, isLoading: false }
        })
}

function getPageBySlug(slug: string) {
    return betterFetch(`${COMMON_URL}/page?slug=${slug}`)
}

// const BLOG_URL = 'http://paper-api.localhost/api/v1';

// function getBlogPostByContentId(contentId: string) {
//     return betterFetch(`${BLOG_URL}/posts/${contentId}`)
// }

// const SHOP_URL = 'http://shop-api.localhost/api/v1';

// function getShopIndex() {
//     return betterFetch(`${SHOP_URL}/index`)
// }

export default async function BlogPostView(props: any) {
    const slug = props.params.slug.join("/");

    const { data, isLoading } = await getPageBySlug('/' + slug);

    console.log({
        data,
        isLoading
    });

    const type: any = "POST";

    return <>
        <Header />

        <Breadcrumbs breadcrumbs={[
            {
                title: "Strona główna",
                slug: "/"
            },
            {
                title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                slug: "/lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit"
            }
        ] as any} />

        {!isLoading && <div>Loading</div> || <div>{ data }</div>}

        <Footer />
    </>
};

// {type === "POST" && <Container>
//     <Heading>STRONA</Heading>

//     <div dangerouslySetInnerHTML={{__html: `
//         <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     `}}></div>
// </Container>}

// {type === "SHOP_INDEX" && <Container>
//     <Heading>SKLEP - INDEX</Heading>

//     <div dangerouslySetInnerHTML={{__html: `
//         <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
//         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//     `}}></div>
// </Container>}
