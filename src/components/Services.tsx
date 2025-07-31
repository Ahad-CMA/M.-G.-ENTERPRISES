import React from 'react';
import { Home, Building, Factory, Hammer, PaintBucket, Wrench } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Construction",
      description: "Custom homes, apartments, and residential complexes built with precision and care.",
      features: ["Custom Home Design", "Apartment Buildings", "Villa Construction", "Home Renovation"]
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Commercial Construction",
      description: "Office buildings, retail spaces, and commercial complexes for modern businesses.",
      features: ["Office Buildings", "Retail Spaces", "Shopping Centers", "Corporate Complexes"]
    },
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Industrial Construction",
      description: "Warehouses, factories, and industrial facilities built to industry standards.",
      features: ["Warehouse Construction", "Factory Buildings", "Industrial Complexes", "Storage Facilities"]
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Renovation & Remodeling",
      description: "Transform existing spaces with our comprehensive renovation services.",
      features: ["Home Renovation", "Office Remodeling", "Kitchen & Bathroom", "Interior Upgrades"]
    },
    {
      icon: <PaintBucket className="w-8 h-8" />,
      title: "Interior Design",
      description: "Complete interior solutions from concept to completion.",
      features: ["Space Planning", "Interior Decoration", "Furniture Selection", "Lighting Design"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Maintenance Services",
      description: "Ongoing maintenance and repair services for all types of properties.",
      features: ["Regular Maintenance", "Emergency Repairs", "Preventive Care", "Property Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Hammer className="w-4 h-4" />
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From residential homes to large commercial projects, we offer a complete range of construction services to meet all your building needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center justify-center w-16 h-16 bg-orange-100 rounded-xl text-orange-600 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Start Your Construction Project?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get in touch with our expert team for a free consultation and detailed project estimate. We're here to bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Free Quote
            </button>
            <button className="border-2 border-white/30 hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10">
              Call Now: +91 9594249860
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;