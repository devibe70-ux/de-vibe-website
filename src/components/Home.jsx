import { Helmet } from 'react-helmet-async';
import Hero from './Hero';
import About from './About';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>De Vibe | Premium Web & Software Agency</title>
        <meta name="description" content="Elevate your digital presence. De Vibe specializes in custom web development, corporate software solutions, and premium logo design." />
      </Helmet>
      <Hero />
      <About />
    </>
  );
}
