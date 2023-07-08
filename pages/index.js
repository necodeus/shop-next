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
import { useSelector } from 'react-redux';

const ModalLogin = dynamic(() => import('../modals/SignIn'), { ssr: false });
const ModalNewOrder = dynamic(() => import('../modals/NewOrder'), { ssr: false });

export async function getServerSideProps({ res }) {
  let resp = {};

  try {
    resp = await fetch(process.env.API_URI + '/shop/views/index', {
        headers: {
            'Authorization': 'Bearer ' + process.env.API_USER_TOKEN, 
            'Content-Type': 'application/json',
        }
    }).then(data => data.json());
  } catch (e) {
    console.log(e);
  }

  const { data, success, statusCode, message } = resp;

  if (message) {
    res.statusCode = statusCode;
    return {
        props: {
          error: {
              code: statusCode,
              message: message,
          },
        },
    }
  }

  return {
      props: {
        data,
      }
  }
}

export default function IndexView({ data, error }) {
  return !error && <>
      <Head>
        <title>Strona główna</title>
        <meta name="description" content="Strona główna" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      {<ModalNewOrder />}
      {<ModalLogin />}

      <Header navigation={ data.navigations.main } />
      <Breadcrumbs breadcrumbs={ data.breadcrumbs } />

      <Container className={["overflow-hidden", "md:overflow-unset"]}>
        <Slider slides={ data.slides } />
      </Container>

      <Container>
        <ShopRecentProducts />
      </Container>

      <Container>
        <InstagramPosts posts={ data.instagram } />
      </Container>

      <Footer navigations={ data.navigations } />
    </> || <Error code={ error.code } message={ error.message } />
};
