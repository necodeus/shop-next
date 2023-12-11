import Header from '../sections/Header';
import Footer from '../sections/Footer';
import Breadcrumbs from '../sections/Breadcrumbs';
import Container from '../components/Container';
import Slider from '../sections/Slider';
import ShopRecentProducts from '../sections/ProductsSlider';
import InstagramPosts from '../sections/InstagramPosts';
import { Suspense } from 'react';

export default function Home() {
  const instagram: any = [
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/343762488_3377568005842453_1903406461865234419_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uwKnSEOANDcAX85XrsT&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfAMgSSCUMlNNqX2C0jTc1EmdkuHJKiC7mUq3_yqo0cSIA&oe=65731E98",
      link: "/as"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342900327_1559726454517390_730820892228993508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UcLW6zb9mbEAX90gozr&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfC6LtNo5ct49oYtR7CSObGpeWeF2l0Ie41uyVvonNb4wQ&oe=6574164A",
      link: "/ea"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342035581_1273766190214869_8628086711174110929_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CPq27_rzwTgAX8ttfXq&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfBjaOghhRSAaVXyr5YqOVCHm2_OT8lu12rFsfBGcNPcVg&oe=6572FE38",
      link: "/dw"
    },

    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342035581_1273766190214869_8628086711174110929_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CPq27_rzwTgAX8ttfXq&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfBjaOghhRSAaVXyr5YqOVCHm2_OT8lu12rFsfBGcNPcVg&oe=6572FE38",
      link: "/4r"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/343762488_3377568005842453_1903406461865234419_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uwKnSEOANDcAX85XrsT&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfAMgSSCUMlNNqX2C0jTc1EmdkuHJKiC7mUq3_yqo0cSIA&oe=65731E98",
      link: "/d3"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342900327_1559726454517390_730820892228993508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UcLW6zb9mbEAX90gozr&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfC6LtNo5ct49oYtR7CSObGpeWeF2l0Ie41uyVvonNb4wQ&oe=6574164A",
      link: "/xad"
    },

    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342900327_1559726454517390_730820892228993508_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UcLW6zb9mbEAX90gozr&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfC6LtNo5ct49oYtR7CSObGpeWeF2l0Ie41uyVvonNb4wQ&oe=6574164A",
      link: "/z2"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/342035581_1273766190214869_8628086711174110929_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=CPq27_rzwTgAX8ttfXq&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfBjaOghhRSAaVXyr5YqOVCHm2_OT8lu12rFsfBGcNPcVg&oe=6572FE38",
      link: "/a1"
    },
    {
      image: "https://scontent.fpoz4-1.fna.fbcdn.net/v/t39.30808-6/343762488_3377568005842453_1903406461865234419_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=uwKnSEOANDcAX85XrsT&_nc_ht=scontent.fpoz4-1.fna&oh=00_AfAMgSSCUMlNNqX2C0jTc1EmdkuHJKiC7mUq3_yqo0cSIA&oe=65731E98",
      link: "/xd"
    },
  ]

  const breadcrumbs: any = [
    {
      title: "Strona główna",
      slug: "/dasd"
    }
  ]

  return (
    <>
      <Header />
      <Breadcrumbs breadcrumbs={ breadcrumbs } />

      <Container className={["overflow-hidden", "md:overflow-unset"]}>
        <Slider />
      </Container>

      <Container>
        <ShopRecentProducts />
      </Container>

      <Container>
        <InstagramPosts posts={ instagram } />
      </Container>

      <Footer />
    </>
  )
}
