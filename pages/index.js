import Head from 'next/head';
import dynamic from 'next/dynamic';

import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Error from '../components/Error';

import Breadcrumbs from '../sections/Breadcrumbs';
import Container from '../components/Container';
import Heading from '../components/Heading';

import Slider from '../sections/Slider';
import ShopRecentProducts from '../sections/ProductsSlider';
import InstagramPosts from '../sections/InstagramPosts';

export default function IndexView({ data, error }) {
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

  const slides = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/slider.png",
      link: "/"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/slider.png",
      link: "/"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "/slider.png",
      link: "/"
    },
  ]

  const instagram = [
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/343762488_3377568005842453_1903406461865234419_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uwKnSEOANDcAX85XrsT&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfAMgSSCUMlNNqX2C0jTc1EmdkuHJKiC7mUq3_yqo0cSIA&oe=65731E98",
      link: "/"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342900327_1559726454517390_730820892228993508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UcLW6zb9mbEAX90gozr&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfC6LtNo5ct49oYtR7CSObGpeWeF2l0Ie41uyVvonNb4wQ&oe=6574164A",
      link: "/"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342035581_1273766190214869_8628086711174110929_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CPq27_rzwTgAX8ttfXq&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfBjaOghhRSAaVXyr5YqOVCHm2_OT8lu12rFsfBGcNPcVg&oe=6572FE38",
      link: "/"
    },

    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342035581_1273766190214869_8628086711174110929_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CPq27_rzwTgAX8ttfXq&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfBjaOghhRSAaVXyr5YqOVCHm2_OT8lu12rFsfBGcNPcVg&oe=6572FE38",
      link: "/"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/343762488_3377568005842453_1903406461865234419_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uwKnSEOANDcAX85XrsT&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfAMgSSCUMlNNqX2C0jTc1EmdkuHJKiC7mUq3_yqo0cSIA&oe=65731E98",
      link: "/"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342900327_1559726454517390_730820892228993508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UcLW6zb9mbEAX90gozr&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfC6LtNo5ct49oYtR7CSObGpeWeF2l0Ie41uyVvonNb4wQ&oe=6574164A",
      link: "/"
    },

    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342900327_1559726454517390_730820892228993508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UcLW6zb9mbEAX90gozr&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfC6LtNo5ct49oYtR7CSObGpeWeF2l0Ie41uyVvonNb4wQ&oe=6574164A",
      link: "/"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342035581_1273766190214869_8628086711174110929_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CPq27_rzwTgAX8ttfXq&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfBjaOghhRSAaVXyr5YqOVCHm2_OT8lu12rFsfBGcNPcVg&oe=6572FE38",
      link: "/"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/343762488_3377568005842453_1903406461865234419_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uwKnSEOANDcAX85XrsT&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfAMgSSCUMlNNqX2C0jTc1EmdkuHJKiC7mUq3_yqo0cSIA&oe=65731E98",
      link: "/"
    },
  ]

  const navigations = [
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

  return <>
      <Head>
        <title>Strona główna</title>
        <meta name="description" content="Strona główna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header navigation={ navigation } />
      <Breadcrumbs breadcrumbs={ breadcrumbs } />

      <Container className={["overflow-hidden", "md:overflow-unset"]}>
        <Slider slides={ slides } />
      </Container>

      <Container>
        <ShopRecentProducts />
      </Container>

      <Container>
        <InstagramPosts posts={ instagram } />
      </Container>

      <Footer navigations={ navigations } />
    </>
};
