import React from 'react';
import { ArrowRight, CheckCircle, Award, Users, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-orange-500/20 text-orange-300 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>25+ Years of Excellence</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Building Your
                <span className="text-orange-400 block">Dream Spaces</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                From residential homes to commercial complexes, we deliver exceptional construction services with unmatched quality and precision.
              </p>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Quality Materials</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Timely Delivery</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-gray-300">Expert Team</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span>Get Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10">
                View Our Work
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="lg:pl-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">50+</div>
                <div className="text-gray-300">Expert Workers</div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 bg-white/5 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Why Choose M. G. ENTERPRISES?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Experienced professional team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">On-time project delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-orange-400" />
                  <span className="text-gray-300">Award-winning quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;