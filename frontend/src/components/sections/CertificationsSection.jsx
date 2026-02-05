import React from 'react';

const CertificationsSection = ({ data }) => {
  const { certifications } = data;

  return (
    <div className="space-y-16">
      <div className="space-y-4">
        <h2 className="text-4xl font-light text-gray-900">
          Certifications
        </h2>
        <p className="text-lg text-gray-600 font-light">
          Professional certifications that validate my expertise and commitment to excellence
        </p>
      </div>

      <div className="space-y-8">
        {certifications.map((cert, index) => (
          <div key={index} className="space-y-3 border-b border-gray-100 pb-8 last:border-b-0">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-xl font-medium text-gray-900">
                  {cert.name}
                </h3>
                <p className="text-gray-600 font-light">
                  {cert.issuer}
                </p>
              </div>
              
              <div className="text-right text-sm text-gray-500 font-light">
                <div>{cert.year}</div>
                <div className="text-xs">ID: {cert.credentialId}</div>
              </div>
            </div>
            
            <button
              onClick={() => {
                alert(`Verification for ${cert.name} - ID: ${cert.credentialId}`);
              }}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors underline font-light"
            >
              Verify Credential
            </button>
          </div>
        ))}
      </div>

      <div className="pt-8">
        <p className="text-gray-600 leading-relaxed font-light max-w-2xl">
          I believe in continuous learning and staying updated with industry best practices. 
          These certifications represent my dedication to professional development and technical excellence.
        </p>
      </div>
    </div>
  );
};

export default CertificationsSection;