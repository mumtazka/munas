import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '../ui/button';

const CertificationsSection = ({ data }) => {
  const { certifications } = data;

  return (
    <div className="space-y-12">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Certifications
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional certifications that validate my expertise and commitment to excellence
        </p>
        <div className="w-24 h-1 bg-gray-900 mx-auto mt-6"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              {/* Icon */}
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                <Award className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              
              {/* Content */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {cert.name}
              </h3>
              
              <p className="text-gray-600 mb-3">
                {cert.issuer}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500 font-medium">
                  {cert.year}
                </span>
                
                <span className="text-xs text-gray-400">
                  ID: {cert.credentialId}
                </span>
              </div>
              
              {/* Verify Button */}
              <Button
                variant="outline"
                size="sm"
                className="w-full border-gray-300 hover:border-gray-500 text-xs"
                onClick={() => {
                  // Mock verification - would link to actual credential
                  alert(`Verification for ${cert.name} - ID: ${cert.credentialId}`);
                }}
              >
                <ExternalLink className="w-3 h-3 mr-2" />
                Verify Credential
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-16">
        <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Commitment to Growth
          </h3>
          <p className="text-gray-600 leading-relaxed">
            I believe in continuous learning and staying updated with industry best practices. 
            These certifications represent my dedication to professional development and technical excellence.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificationsSection;