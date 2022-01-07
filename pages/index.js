import Head from "next/head";
import Image from "next/image";
import Intro from "../components/Intro";
import Services from "../components/Services";
import { data } from "../data";
import Testimonials from "../components/Testimonials";
export default function Home({ services }) {
  return (
    <div>
      <Head>
        <title>AVOCADO</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near Sweden"
        />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}
export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
