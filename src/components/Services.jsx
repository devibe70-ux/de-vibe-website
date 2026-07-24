import { Monitor, PenTool, Rocket, Code } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: <Monitor size={32} />,
    title: 'Web Design & Development',
    description: 'Stunning, fast, and responsive websites tailored to your brand.'
  },
  {
    icon: <PenTool size={32} />,
    title: 'Branding & Identity',
    description: 'Memorable and unique branding that captures your vision.'
  },
  {
    icon: <Code size={32} />,
    title: 'Enterprise Software Solutions',
    description: 'Scalable corporate software solutions to streamline your operations.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Digital Strategy & Consulting',
    description: 'Everything you need to launch: from branding to digital presence.'
  }
];

export default function Services() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Web & Software Development Services",
    "provider": {
      "@type": "Organization",
      "name": "De Vibe Agency"
    },
    "serviceType": "Web Development, Corporate Software, Logo Design, Digital Consulting",
    "areaServed": "Global"
  };

  return (
    <>
      <Helmet>
        <title>Our Services - De Vibe Agency</title>
        <meta name="description" content="Explore our premium web design, enterprise software, and branding services." />
        <link rel="canonical" href="https://www.devibestudio.com/services" />
        <meta property="og:title" content="Our Services - De Vibe Agency" />
        <meta property="og:description" content="Explore our premium web design, enterprise software, and branding services." />
        <meta property="og:url" content="https://www.devibestudio.com/services" />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>
      <section id="services" style={{ minHeight: '80vh', padding: '6rem 0' }}>
        <div className="container">
          <h2>Our Services</h2>
          <div className="grid grid-2 grid-4">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
