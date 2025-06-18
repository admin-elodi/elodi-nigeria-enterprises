import { NavLink } from 'react-router-dom';
import webDevIcon from '@/assets/icons/web.webp';
import ictIcon from '@/assets/icons/code.jpg';
import proposalIcon from '@/assets/icons/business.webp';
import reviewIcon from '@/assets/icons/phone.webp';
import heroBg from '@/assets/images/banner.jpg';

const Hero = () => {
  const contentBlocks = [
    {
      title: 'Web Development',
      description: 'Build perfect websites or web apps for your business with our expert team.',
      buttonText: 'Fill Form',
      buttonLink: '/website-development',
      image: webDevIcon,
      alt: 'Web Development Icon',
    },
    {
      title: 'Coding Is Fun',
      description: 'Join online/offline classes to master coding, a life-changing skill.',
      buttonText: 'View Courses',
      buttonLink: '/ict-instruction',
      image: ictIcon,
      alt: 'Coding Instruction Icon',
    },
    {
      title: 'Proposals',
      description: 'Discovering the perfect format for your idea in terms of proposals, templates, briefs, etc',
      buttonText: 'Propose',
      buttonLink: '#quote-modal',
      image: proposalIcon,
      alt: 'Proposal Writing Icon',
    },
    {
      title: 'Product Reviews',
      description: 'Drive more traffic and sales with powerful, SEO-friendly product reviews.',
      buttonText: 'Request a Review',
      buttonLink: '/contact',
      image: reviewIcon,
      alt: 'Product Review Icon',
    },
  ];

  return (
    <section
      id="hero"
      className="bg-gray-300 pb-12 md:pb-16 lg:pb-20 font-inter"
      aria-labelledby="vision-heading"
    >
      {/* Hero Banner */}
      <div
        className="relative bg-cover bg-center h-96 flex items-center justify-center bg-yellow-100"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        
      </div>

      <div className="container py-16 mx-auto px-4 sm:px-6 lg:px-8">
        {/* "Our Services" Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2
            id="vision-heading"
            className="text-4xl md:text-4xl font-extrabold text-black mb-4 tracking-tighter animate-fade-in"
          >
            Discover Our Services
          </h2>
        </div>

        {/* 2x2 or 1x4 Grid of Content Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {contentBlocks.map(({ title, description, buttonText, buttonLink, image, alt }, index) => (
            <div
              key={index}
              className="bg-[#FFFFFF] p-8 rounded-lg border-2 border-black shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between w-full min-w-[260px] animate-slide-up"
              role="region"
              aria-labelledby={`block-title-${index}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <img
                  src={image}
                  alt={alt}
                  className="w-20 h-12 md:w-16 md:h-16 rounded-full mx-auto mb-4 transform hover:scale-110 transition-transform duration-300 border-2 border-black"
                />
                <h2
                  id={`block-title-${index}`}
                  className="text-xl md:text-2xl font-bold text-[#2E2E2E] mb-2 tracking-tight"
                >
                  {title}
                </h2>
                <p className="text-base text-[#2E2E2E] mb-4 leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="flex justify-center">
                <NavLink
                  to={buttonLink}
                  className="bg-black text-white py-2 rounded-lg hover:bg-[#4C83E6] focus:outline-none focus:ring-2 focus:ring-[#F4B400] w-full max-w-[200px] min-w-[180px] text-center"
                  aria-label={`Go to ${buttonText}`}
                  onClick={() => {
                    if (buttonLink === '#quote-modal') {
                      alert('Quote Modal Triggered'); // Placeholder
                    }
                  }}
                >
                  {buttonText}
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        {/* Promotional Banner */}
        <div className="mt-16 max-w-3xl mx-auto bg-gray-500 bg-opacity-95 rounded-xl shadow-lg px-6 py-8 text-center border-4 border-black animate-fade-in">
          <h3 className="text-2xl font-semibold text-yellow-100 mb-2 tracking-tight">
            Coming Soon!
          </h3>
          <p className="text-base md:text-lg text-white mb-0">
            Elodi Nigeria Enterprises is currently building a next-generation Africanfuturist social media platform.
            <span className="font-semibold text-yellow-100"> Stay tuned for the grand unveiling & first sign-ups!</span>
          </p>
          <button
            className="mt-8 bg-black text-yellow-100 font-semibold px-16 py-3 rounded-lg border-2 border-yellow-100 shadow-md hover:bg-yellow-100 hover:text-black transition-colors duration-300 cursor-not-allowed"
            aria-label="Sneak Preview: The Future of Social"
            disabled
          >
            👀 Sneak Preview
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
