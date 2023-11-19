import { useState } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const closePrivacyModal = () => setPrivacyOpen(false);

  const [accessibilityOpen, setAccessibilityOpen] = useState(false);
  const closeAccessibilityModal = () => setAccessibilityOpen(false);

  return (
    <div className="bg-background flex flex-col items-center justify-center bottom-0 w-full">
      <div className="mx-auto mb-0.1 mt-3">
        <p className="text-primary font-body font-bold text-md mb-1">
          Copyright
          <span className="text-secondary font-links font-bold text-md mx-2">
            ©
          </span>
          2023 Life Goats
        </p>
      </div>

      <div className="mx-auto mb-0.1 mt-0.1">
        <div className="flex flex-row gap-2 ">
          <button
            type="button"
            onClick={() => setPrivacyOpen((o) => !o)}
            className="pb-3 pt-2 text-tertiary hover:text-secondary font-links font-bold text-sm no-underline"
          >
            Privacy Policy
          </button>
          <Popup
            open={privacyOpen}
            closeOnDocumentClick
            onClose={closePrivacyModal}
          >
            <div className="fixed bottom-0 right-2 left-3">
              <div className="flex flex-col justify-center items-center mx-auto rounded-lg bg-gradient-to-b from-secondary to-tertiary p-8 text-white w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                <div className="grid grid-cols-10 gap-4">
                  <p className="col-span-9">
                    In case you contact Maria via the contact form, she will only use
                    your email address to reply to your message. She will not
                    share your name or email address with any third parties.
                  </p>
                  <a
                    className="col-span-1 cursor-pointer text-6xl my-auto"
                    onClick={closePrivacyModal}
                  >
                    &times;
                  </a>
                </div>
              </div>
            </div>
          </Popup>
          <span className="text-secondary font-links font-bold text-md mx-2 pb-3 pt-2">
            |
          </span>
          <button
            type="button"
            onClick={() => setAccessibilityOpen((o) => !o)}
            className="pb-3 pt-2 text-tertiary hover:text-secondary font-links font-bold text-sm no-underline"
          >
            Web Accessibility Statement
          </button>
          <Popup
            open={accessibilityOpen}
            closeOnDocumentClick
            onClose={closeAccessibilityModal}
          >
            <div className="fixed bottom-0 right-2 left-3">
              <div className="flex flex-col justify-center items-center mx-auto rounded-lg bg-gradient-to-b from-secondary to-tertiary p-8 text-white  w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
                <div className="grid grid-cols-10 gap-4">
                  <p className="col-span-9">
                    This website is built to be accessible to as many people as
                    possible. If you have any accessibility requirements, please
                    contact the developer Anastasia at anastasiaadamoudi@gmail.com and she will do her best to accommodate them.
                  </p>
                  <a
                    className="col-span-1 cursor-pointer text-6xl my-auto"
                    onClick={closeAccessibilityModal}
                  >
                    &times;
                  </a>
                </div>
              </div>
            </div>
          </Popup>
        </div>
      </div>
    </div>
  )
}

export default Footer
