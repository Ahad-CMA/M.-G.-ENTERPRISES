import React from 'react';
import { Award, Shield, Clock, Users, CheckCircle, Target } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "16+ Years Experience",
      description: "Decades of expertise in construction and project management"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Licensed & Insured",
      description: "Fully licensed contractors with comprehensive insurance coverage"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Timely Delivery",
      description: "Committed to completing projects on time and within budget"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Skilled professionals dedicated to quality craftsmanship"
    }
  ];

  const values = [
    "Quality workmanship in every project",
    "Transparent communication throughout",
    "Competitive pricing with no hidden costs",
    "Sustainable and eco-friendly practices",
    "Customer satisfaction guarantee",
    "Modern construction techniques"
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium">
                <Target className="w-4 h-4" />
                <span>About M. G. ENTERPRISES</span>
              </div>
              
              <h2 className="text-4xl font-bold text-gray-900">
                Building Excellence Since 2008
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                M. G. ENTERPRISES has been a trusted name in the construction industry for over two decades. We specialize in residential, commercial, and industrial construction projects, delivering exceptional quality and value to our clients across Mumbai and Maharashtra.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence, attention to detail, and customer-first approach has made us one of the most reliable construction companies in the region. We combine traditional craftsmanship with modern construction techniques to create spaces that stand the test of time.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">Our Core Values</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Learn More
              </button>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="space-y-6">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-8 text-white">
              <h3 className="text-xl font-semibold mb-6">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">50+</div>
                  <div className="text-orange-100 text-sm">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">16+</div>
                  <div className="text-orange-100 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">300+</div>
                  <div className="text-orange-100 text-sm">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold mb-1">20+</div>
                  <div className="text-orange-100 text-sm">Expert Team</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;