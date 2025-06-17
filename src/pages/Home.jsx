import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialSlider from '../components/TestimonialSlider';
import Footer from '../components/Footer';

const services = [
  {
    title: 'Website Development',
    description: 'Custom websites, e-commerce solutions, and redesigns to elevate your brand.',
    icon: '/src/assets/icons/web-dev.svg',
    ctaText: 'Explore Portfolio',
    ctaLink: '#website-dev',
  },
  {
    title: 'ICT Instruction',
    description: 'Practical front-end, back-end, and full-stack development courses.',
    icon: '/src/assets/icons/ict.svg',
    ctaText: 'View Courses',
    ctaLink: '#ict',
  },
  {
    title: 'Research Assistance',
    description: 'Tailored support for undergraduate, postgraduate, and master’s research.',
    icon: '/src/assets/icons/research.svg',
    ctaText: 'Get Help',
    ctaLink: '#research',
  },
  {
    title: 'Proposal Writing',
    description: 'Professional grant and business proposals for NGOs and MSMEs.',
    icon: '/src/assets/icons/proposal.svg',
    ctaText: 'Request Quote',
    ctaLink: '#proposal',
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E] text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                ctaText={service.ctaText}
                ctaLink={service.ctaLink}
              />
            ))}
          </div>
        </div>
      </section>
      <TestimonialSlider />
      <section className="py-12 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E] mb-4">Ready to Start?</h2>
          <p className="text-base md:text-lg text-[#2E2E2E] mb-6">
            Let’s bring your ideas to life with our expert services.
          </p>
          <a
            href="#contact"
            className="bg-[#0052CC] text-white px-6 py-3 rounded-lg hover:bg-[#4C83E6] focus-visible"
          >
            Contact Us
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;