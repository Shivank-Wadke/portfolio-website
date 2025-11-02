import React from "react";

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Contact Me
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Feel free to reach out for collaborations, questions, or just to say hello!
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Email */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center">
            <span className="text-4xl mb-3">📧</span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
            <a
              href="mailto:shivankwadke@gmail.com"
              className="text-blue-600 hover:underline break-all text-center"
            >
              shivankwadke@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center">
            <span className="text-4xl mb-3">📞</span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone</h3>
            <a
              href="tel:+919503319705"
              className="text-blue-600 hover:underline text-center"
            >
              +91-9503319705
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2 flex flex-col items-center">
            <span className="text-4xl mb-3">🔗</span>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">LinkedIn</h3>
            <a
              href="https://linkedin.com/in/shivank_wadke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline break-all text-center"
            >
              linkedin.com/in/shivank_wadke
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
