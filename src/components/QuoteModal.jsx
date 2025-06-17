import { useState } from 'react';

const QuoteModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', details: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSuccess(true);
    setTimeout(() => {
      setIsOpen(false);
      setSuccess(false);
      setFormData({ name: '', email: '', details: '' });
    }, 3000);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-[#F4B400] text-[#2E2E2E] px-6 py-3 rounded-lg hover:bg-[#FFB800] focus-visible"
      >
        Get a Quote
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full">
            <h2 className="text-xl md:text-2xl font-bold text-[#2E2E2E] mb-4">Request a Quote</h2>
            {success ? (
              <div className="text-green-600 mb-4">Quote request sent! We'll respond within 24 hours.</div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#2E2E2E] text-sm mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2 border rounded focus:border-[#F4B400] focus-visible"
                    required
                    aria-describedby="name-error"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-[#2E2E2E] text-sm mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2 border rounded focus:border-[#F4B400] focus-visible"
                    required
                    aria-describedby="email-error"
                  />
                  {error && (
                    <p id="email-error" className="text-[#D32F2F] text-sm mt-1">
                      {error}
                    </p>
                  )}
                </div>
                <div className="mb-4">
                  <label htmlFor="details" className="block text-[#2E2E2E] text-sm mb-1">
                    Project Details
                  </label>
                  <textarea
                    id="details"
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full p-2 border rounded focus:border-[#F4B400] focus-visible"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="text-[#2E2E2E] px-4 py-2 hover:text-[#0052CC] focus-visible"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0052CC] text-white px-4 py-2 rounded-lg hover:bg-[#4C83E6] focus-visible"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default QuoteModal;