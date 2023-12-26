import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

const AccessibilityModal = ({ isOpen, onClose }) => {

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
    aria-labelledby="accessibility-statement-modal"
    >
      <div className="flex flex-col items-center justify-center mx-auto p-4">
        <h2 className="text-earth text-2xl font-bold mb-4 font-subtitle">Accessibility Statement</h2>
        <p className="text-primary text-lg mb-4 font-body">
        This website is built to be accessible to as many people as
                    possible. If you have any accessibility requirements, please
                    contact the developer Anastasia at <a href="mailto: anastasiaadamoudi@gmail.com" className="text-secondary font-links hover:text-tertiary">anastasiaadamoudi@gmail.com</a> and she will do her best to accommodate them.
        </p>
      </div>
    </Modal>
  );
};

export default AccessibilityModal;
