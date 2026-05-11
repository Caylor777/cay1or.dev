import React from 'react';

interface DetailContactProps {
  onClose: () => void;
}

const DetailContact: React.FC<DetailContactProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }}>
      <div className="modal-content" style={{ backgroundColor: '#222', padding: '2rem', borderRadius: '10px', maxWidth: '500px', width: '90%', color: 'white', position: 'relative', border: '1px solid #444', fontFamily: 'sans-serif' }}>
        
        <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '15px', background: 'transparent', border: 'none', color: 'white', fontSize: '1.8rem', cursor: 'pointer' }}>
          &times;
        </button>
        
        <h2 style={{ marginBottom: '1rem', borderBottom: '1px solid #444', paddingBottom: '0.5rem', marginTop: 0 }}>Get a Quote</h2>
        
        <div style={{ marginBottom: '1.5rem' }}>
            <p style={{ margin: '0.75rem 0', fontSize: '1.1rem' }}><strong>✉️ Email:</strong> <a href="mailto:detail@cay1or.dev" style={{ color: '#4da6ff', textDecoration: 'none' }}>detail@cay1or.dev</a></p>
          <p style={{ margin: '0.75rem 0', fontSize: '1.1rem' }}><strong>📞 Phone:</strong> <a href="tel:+9048745412" style={{ color: '#4da6ff', textDecoration: 'none' }}>(904) 874-5412</a></p>
        </div>

        <div style={{ backgroundColor: '#333', padding: '1rem', borderRadius: '8px', textAlign: 'center' }}>
          <h4 style={{ margin: '0 0 0.5rem 0', color: '#ddd' }}>What to include in your message:</h4>
          <ul style={{ paddingLeft: '1.5rem', margin: 0, lineHeight: '1.6', color: '#ccc', textAlign: 'left' }}>
            <li>Your vehicle make, model, and year</li>
            <li>The package you are interested in</li>
            <li>Any specific areas of concern (e.g., pet hair, stains)</li>
            <li>Your location for the mobile service</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DetailContact;