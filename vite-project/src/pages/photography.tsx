import { useState } from 'react';

import Navbar from "../components/navbar";
import Contact from "../components/contact";

function Photography() {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div>
        <Navbar onContactClick={() => setShowContactModal(true)} />
        {showContactModal && (
        <Contact onClose={() => setShowContactModal(false)} />
        )}
    </div>
  );
}

export default Photography;