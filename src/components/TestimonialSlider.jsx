import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: 'Elodi delivered a stunning e-commerce site that boosted my sales!',
    author: 'Chidi, Business Owner',
  },
  {
    quote: 'The ICT course was hands-on and affordable. I landed my first dev job!',
    author: 'Tunde, Aspiring Developer',
  },
  {
    quote: 'Their research support made my thesis a success. Highly professional!',
    author: 'Aisha, Postgraduate Student',
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-[#F4B400] text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2E2E2E] mb-6">Client Success Stories</h2>
        <div className="max-w-xl mx-auto">
          <p className="text-base md:text-lg italic text-[#2E2E2E] mb-4">"{testimonials[current].quote}"</p>
          <p className="text-[#2E2E2E] font-bold text-sm">— {testimonials[current].author}</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;