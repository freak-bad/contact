import React from 'react';

const MapSection = () => {
  return (
    <section className="map-section">
      <div id="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14548.208061321366!2d81.32319779999999!3d19.0631655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2c2f9fef25c30f%3A0x1f477973b8ec60!2sDantewada%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1696192434087!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>
    </section>
  );
};

export default MapSection;
