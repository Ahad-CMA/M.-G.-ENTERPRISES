import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Sharma",
      position: "Homeowner",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "M. G. ENTERPRISES built our dream home exactly as we envisioned. Their attention to detail and quality of work is exceptional. The team was professional throughout the entire process."
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Business Owner",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "They constructed our office building on time and within budget. The quality of construction is outstanding, and their project management skills are top-notch. Highly recommended!"
    },
    {
      id: 3,
      name: "Amit Kumar",
      position: "Property Developer",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "We've worked with M. G. ENTERPRISES on multiple residential projects. Their expertise in construction and commitment to quality makes them our preferred construction partner."
    },
    {
      id: 4,
      name: "Sunita Desai",
      position: "Homeowner",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "The renovation of our home was completed beautifully. M. G. ENTERPRISES transformed our space while staying within our budget. Their team is reliable and skilled."
    },
    {
      id: 5,
      name: "Vikram Singh",
      position: "Factory Owner",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "They built our industrial facility with precision and efficiency. The construction quality meets all industry standards, and the project was delivered on schedule."
    },
    {
      id: 6,
      name: "Meera Joshi",
      position: "Restaurant Owner",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
      rating: 5,
      text: "M. G. ENTERPRISES helped us create the perfect restaurant space. Their understanding of commercial requirements and attention to detail is impressive. Great work!"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience with M. G. ENTERPRISES.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-50 rounded-xl p-8 relative hover:shadow-lg transition-shadow duration-300">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-orange-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">500+</div>
              <div className="text-orange-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">100%</div>
              <div className="text-orange-100">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">25+</div>
              <div className="text-orange-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold mb-2">50+</div>
              <div className="text-orange-100">Expert Team</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Join Our Happy Clients?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Experience the M. G. ENTERPRISES difference. Contact us today for a free consultation and let us bring your construction dreams to life.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Get Your Free Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;