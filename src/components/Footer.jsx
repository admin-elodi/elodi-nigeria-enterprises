const Footer = () => {
  return (
    <footer className="bg-[#2E2E2E] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Elodi Nigeria Enterprises</h3>
            <p className="text-sm">Empowering your success through innovative technology and research solutions.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-[#F4B400] focus-visible">About Us</a></li>
              <li><a href="#contact" className="hover:text-[#F4B400] focus-visible">Contact</a></li>
              <li><a href="#faq" className="hover:text-[#F4B400] focus-visible">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-sm">Email: elodinigeria@gmail.com</p>
            <p className="text-sm">Phone: +234 813 657 3235</p>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>© 2025 Elodi Nigeria Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;