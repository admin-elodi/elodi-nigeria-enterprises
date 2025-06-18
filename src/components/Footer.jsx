import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-10 px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Baroque-inspired Title */}
        <h3
          className="text-2xl font-serif font-bold mb-2 mt-8 tracking-wide text-center w-full truncate max-w-xs mx-auto"
          style={{
            letterSpacing: "0.08em",
            textShadow: "0 2px 8px rgba(244,180,0,0.08)",
          }}
        >
          Elodi Nigeria Enterprises
        </h3>
        {/* Decorative Divider */}
        <div className="w-80 border-t-4 border-yellow-200 rounded-full mb-4" />
        {/* Tagline */}
        <p className="text-sm text-gray-300 mb-8 text-center max-w-xl">
          Empowering your success through innovative technology and research solutions
        </p>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row gap-6 w-full justify-center items-stretch mb-8">
          {/* Quick Links */}
          <div className="flex-1 bg-white/5 backdrop-blur border border-yellow-100 rounded-xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105 duration-200 h-full min-h-[180px]">
            <h4 className="text-lg font-serif font-bold mb-3 text-yellow-200 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm w-full text-center">
              <li>
                <a
                  href="#about"
                  className="hover:text-[#F4B400] transition-colors duration-200"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#F4B400] transition-colors duration-200"
                >
                  Coding Is Fun
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#F4B400] transition-colors duration-200"
                >
                  Proposals
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#F4B400] transition-colors duration-200"
                >
                  Product Reviews
                </a>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="flex-1 bg-white/5 backdrop-blur border border-yellow-100 rounded-xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105 duration-200 h-full min-h-[180px]">
            <h4 className="text-lg font-serif font-bold mb-3 text-yellow-200 tracking-wide">
              Contact Us
            </h4>
            <p className="text-sm mb-1">elodinigeria@gmail.com</p>
            <p className="text-sm">+234 813 657 3235</p>
          </div>
          {/* Connect */}
          <div className="flex-1 bg-white/5 backdrop-blur border border-yellow-100 rounded-xl shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105 duration-200 h-full min-h-[180px]">
            <h4 className="text-lg font-serif font-bold mb-3 text-yellow-200 tracking-wide">
              Connect
            </h4>
            <p className="text-sm mb-2">Chat & Socials</p>
            <div className="flex gap-8 justify-center">
              {/* WhatsApp */}
              <a
                href="YOUR_WHATSAPP_GROUP_LINK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our WhatsApp group"
                className="hover:text-[#25D366] transition-colors duration-200 text-2xl"
              >
                {/* WhatsApp SVG */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#25D366" />
                  <path d="M23.5 19.6c-.3-.2-1.6-.8-1.8-.9-.2-.1-.3-.2-.5.1-.2.2-.6.8-.7 1-.1.2-.3.2-.5.1-.3-.2-1.1-.4-2.1-1.2-.8-.7-1.4-1.5-1.6-1.8-.1-.2 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.1-.2.2-.3.1-.1.1-.2 0-.4-.1-.2-.5-1.2-.7-1.7-.2-.5-.4-.4-.5-.4h-.4c-.1 0-.3 0-.5.2-.2.2-.7.7-.7 1.7 0 1 .7 2 1.1 2.5.4.5 2.2 2.8 5.3 3.6.7.2 1.2.3 1.6.2.5-.1 1.6-.7 1.8-1.4.2-.7.2-1.3.1-1.4z" fill="#fff"/>
                </svg>
              </a>
              {/* Telegram */}
              <a
                href="YOUR_TELEGRAM_GROUP_LINK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Join our Telegram group"
                className="hover:text-[#229ED9] transition-colors duration-200 text-2xl"
              >
                {/* Telegram SVG */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#229ED9" />
                  <path d="M23.2 10.6l-2.3 10.8c-.2.8-.7 1-.1 1.1.6.1 1-.1 1.4-.3l2.2-1.1c.5-.2.9-.7.7-1.2l-2-8.7c-.2-.7-.7-.8-1.3-.6l-8.8 3.4c-.8.3-.8.8-.1 1.1l2.5 1c.7.3 1.2.6 1.7 1.2l2.3 2.8c.4.5.8.5 1.2.1l4.2-4.1c.5-.5.2-.9-.3-1.1z" fill="#fff"/>
                </svg>
              </a>
              {/* X (Twitter) */}
              <a
                href="YOUR_X_LINK"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow us on X"
                className="hover:text-[#F4B400] transition-colors duration-200 text-2xl"
              >
                {/* X SVG */}
                <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="16" fill="#fff" />
                  <path d="M20.7 10h2.1l-4.6 5.3 5.4 6.7h-4.2l-3.3-4.1-3.8 4.1h-2.1l4.9-5.3-5.2-6.7h4.2l3.1 4 3.5-4zm-1.1 10.2h1.2l-6.7-8.7h-1.2l6.7 8.7z" fill="#000"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Subtle Baroque Border */}
        <div className="w-full border-t border-[#444] mb-4" />
        {/* Copyright */}
        <div className="text-center text-xs text-gray-400 tracking-wide mb-8 font-light">
          <span>
            © {year} Elodi Nigeria Enterprises. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
