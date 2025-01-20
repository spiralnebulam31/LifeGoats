import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import "./Modals.css"
import PropTypes from 'prop-types';

const LocationModal = ({ isOpen, onClose }) => {

  const closeIcon = (
    <svg fill="#7BA862" viewBox="0 0 20 20" width={28} height={28}>
      <path
        fillRule="evenodd"
        d="M4,4 L16,16 M4,16 L16,4" stroke="#7BA862" strokeWidth="3"
        clipRule="evenodd"
      ></path>
    </svg>
  );

  return (
    <Modal
    open={isOpen}
    onClose={onClose}
    center
    closeIcon={closeIcon}
    classNames={{
      overlay: 'customOverlay',
      modal: 'customModal',
    }}
    aria-labelledby="location-modal"
    >
      <div className="flex flex-col items-center justify-center mx-auto p-4">
        <h2 className="text-earth text-2xl font-bold mb-4 font-subtitle">Privacy Policy</h2>
        <p className="text-primary text-lg mb-4 font-body">
        If you contact us via phone, email or the contact form, we will only use
                    your phone number or email address to reply to your message. We will not
                    share your name, phone number or email address with any third parties.
        </p>
      </div>
    </Modal>
  );
};

LocationModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LocationModal;
