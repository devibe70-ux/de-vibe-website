import { Monitor, PenTool, Rocket, Code } from 'lucide-react';

const services = [
  {
    icon: <Monitor size={32} />,
    title: 'Website Making',
    description: 'Stunning, fast, and responsive websites tailored to your brand.'
  },
  {
    icon: <PenTool size={32} />,
    title: 'Logo Design',
    description: 'Memorable and unique branding that captures your vision.'
  },
  {
    icon: <Code size={32} />,
    title: 'Custom Software',
    description: 'Scalable corporate software solutions to streamline your operations.'
  },
  {
    icon: <Rocket size={32} />,
    title: 'Business Startup',
    description: 'Everything you need to launch: from branding to digital presence.'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-alt">
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
  );
}
