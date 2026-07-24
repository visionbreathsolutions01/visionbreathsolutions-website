import React from 'react';
import { FaAward, FaHandshake, FaShieldAlt, FaCertificate } from 'react-icons/fa';

const Trust = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      icon: <FaAward className="text-2xl text-yellow-500" />,
      year: "2023"
    },
    {
      title: "MongoDB Certified Developer",
      icon: <FaCertificate className="text-2xl text-green-500" />,
      year: "2023"
    }
  ]

  const partnerships = [
    {
      name: "AWS Partner Network",
      logo: "/partners/aws.png"
    },
    {
      name: "MongoDB Partner",
      logo: "/partners/mongodb.png"
    }
  ]

  return (
    <section id="trust" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-5 bg-gradient-to-br from-primary-500 to-secondary-500 bg-clip-text text-transparent">
            Why Trust Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We bring years of expertise, proven success, and a commitment to excellence in every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <FaHandshake className="text-2xl text-primary-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Client Success Focus</h3>
            <p className="text-gray-600">
              Our success is measured by your success. We maintain long-term partnerships with our clients
              through continuous support and evolution of their digital solutions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
              <FaShieldAlt className="text-2xl text-secondary-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Security First</h3>
            <p className="text-gray-600">
              We implement industry best practices for security and data protection in every project.
              Your data and your users' privacy are our top priority.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <FaAward className="text-2xl text-primary-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Certified Expertise</h3>
            <p className="text-gray-600">
              Our team holds certifications from industry leaders and stays updated with the latest
              technologies and best practices.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Trust
