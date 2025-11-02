import React from "react";
import { FaDownload } from "react-icons/fa";

function Certifications() {
  const certifications = [
    {
      id: "react-dev",
      name: "Microsoft Azure Fundamentals - AZ-900",
      issuer: "Microsoft",
      file: "/certificates/azure.png",
    },
    {
      id: "js-fun",
      name: "Introduction to OpenShift Applications",
      issuer: "RedHat",
      file: "/certificates/redhat.pdf",
    },
    {
      id: "web-bootcamp",
      name: "Postman API Fundamentals",
      issuer: "Postman",
      file: "/certificates/postman.png",
    },
  ];

  const handleDownload = (filePath) => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = filePath.split("/").pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Certifications
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            A showcase of my qualifications and commitment to continuous
            learning.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-lg p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 flex flex-col justify-between"
            >
              {/* Content */}
              <div className="flex-1 mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {cert.name}
                </h3>
                <p className="text-sm text-gray-500 italic">
                  Issued by {cert.issuer}
                </p>
              </div>

              {/* Download Button */}
              <button
                onClick={() => handleDownload(cert.file)}
                className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-3 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
                aria-label={`Download ${cert.name} certificate`}
              >
                <FaDownload className="text-lg" />
                <span>Download</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
