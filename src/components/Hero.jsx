import { NavLink } from 'react-router-dom';

const Hero = () => {
  const contentBlocks = [
    {
      title: 'Website Development',
      description: 'Craft stunning, responsive websites that elevate your brand and drive conversions.',
      buttonText: 'Explore Websites',
      buttonLink: '/website-development',
    },
    {
      title: 'ICT Instruction',
      description: 'Master coding with hands-on courses in front-end, back-end, and full-stack development.',
      buttonText: 'View Courses',
      buttonLink: '/ict-instruction',
    },
    {
      title: 'Proposal Writing',
      description: 'Secure funding with professional grant and business proposals tailored to your goals.',
      buttonText: 'Request Quote',
      buttonLink: '#quote-modal', // Triggers modal (to be implemented)
    },
    {
      title: 'Our Impact',
      description: 'Empowering businesses and individuals with innovative tech and research solutions.',
      buttonText: 'Learn About Us',
      buttonLink: '/contact',
    },
  ];

  return (
    <section
      id="hero"
      className="bg-[#FFFFFF] pt-[120px] md:pt-[140px] pb-12 md:pb-16 lg:pb-20 font-inter"
      aria-labelledby="vision-heading"
    >
      <div className="container mx-auto px-8 sm:px-6 lg:px-8">
        {/* Vision and Mission Statement */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-8">
          <h1
            id="vision-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E2E2E] mb-4 tracking-tight"
          >
            Our Vision
          </h1>
          <p className="text-base md:text-lg text-[#2E2E2E] leading-relaxed">
            To empower Nigeria’s future through innovative technology, education, and research
            solutions that transform lives and businesses.
          </p>
        </div>

        {/* 2x2 Grid of Content Blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {contentBlocks.map(({ title, description, buttonText, buttonLink }, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
              role="region"
              aria-labelledby={`block-title-${index}`}
            >
              <div>
                <h2
                  id={`block-title-${index}`}
                  className="text-xl md:text-2xl font-semibold text-[#2E2E2E] mb-3"
                >
                  {title}
                </h2>
                <p className="text-sm md:text-base text-[#2E2E2E] mb-4 leading-relaxed">
                  {description}
                </p>
              </div>
              <NavLink
                to={buttonLink}
                className="inline-block bg-[#0052CC] text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-base font-medium hover:bg-[#4C83E6] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#F4B400] text-center"
                aria-label={`Go to ${buttonText}`}
                onClick={() => {
                  if (buttonLink === '#quote-modal') {
                    // Placeholder for modal trigger (e.g., open QuoteModal)
                    alert('Quote Modal Triggered');
                  }
                }}
              >
                {buttonText}
              </NavLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;