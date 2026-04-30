import '../css/contact.css';

function Contact({ onClose }: { onClose: () => void }) {
  return (
    <div className="contactModalOverlay" onClick={onClose}>
      <div className="contactModal" onClick={(e) => e.stopPropagation()}>
        <button className="closeButton" onClick={onClose}>x</button>
        <h1>Contact</h1>
        <p>
          If you would like to get in touch, please email me at <a href="mailto:caylor@cay1or.dev">caylor@cay1or.dev</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;