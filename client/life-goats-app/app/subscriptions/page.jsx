'use client';

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn } from "../../motion/motion";
import { subscribeImg, unsubscribeImg } from "@/public/assets/subscriptions";
import GoatPrintsWalking from "../components/Loaders/GoatPrintsWalking";
import Image from "next/image";
import Link from "next/link";

function SubscriptionsPage() {
  const searchParams = useSearchParams();
  const action = searchParams.get("action"); // Get the query parameter (subscribe or unsubscribe)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    heardAboutUs: "",
    privacyPolicyAgreed: false,
  });

  const [message, setMessage] = useState(null);

  // Reset the form data when the action is subscribe or unsubscribe
  useEffect(() => {
    if (action === "subscribe") {
      setFormData({
        name: "",
        email: "",
        heardAboutUs: "",
        privacyPolicyAgreed: false,
      });
    }
    setMessage(null); // Reset message state when action changes
  }, [action]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url =
      action === "unsubscribe" ? "/api/unsubscribe" : "/api/subscribe";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error("Error:", error);
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <motion.div className="bg-background relative bg-cover w-screen h-auto min-h-full inset-0 left-0 right-0 top-0 overflow-hidden pt-2 pb-2 z-10 mt-[60px] mb-[180px] flex flex-col justify-center text-center mx-auto">
      {/* Title and Subtitle */}
      <motion.div className="flex flex-col justify-center text-center w-[90%] mx-auto pt-10 mb-1">
        <motion.h1 className="text-earth font-title text-4xl lg:text-6xl font-bold">
          {action === "unsubscribe" ? "Unsubscribe" : "Subscribe"}
        </motion.h1>
        <motion.h2 className="text-primary font-subtitle text-xl lg:text-3xl font-bold">
          {action === "unsubscribe"
            ? "from our newsletter"
            : "to our newsletter"}
        </motion.h2>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="flex flex-col lg:flex-row justify-center items-center lg:items-start mx-auto pt-10 pb-16 font-body lg:text-lg text-md w-[90%] lg:w-[70%]"
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
      >
        {/* Image */}
        <div className="mb-8 lg:mb-0 lg:mr-8 flex-shrink-0 w-full sm:w-[90%] md:w-[70%] lg:w-[50%]">
          <Image
            src={action === "unsubscribe" ? unsubscribeImg : subscribeImg}
            alt="Subscription Action"
            className="rounded-lg shadow-lg w-full h-auto"
            width={1000} // Arbitrary large value for responsiveness
            height={1000} // Arbitrary large value for responsiveness
          />
        </div>

        {/* Form or Message */}
        {/* {!message ? (
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%]"
          >
            {action === "subscribe" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-left mb-1 font-bold"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full border rounded-lg p-2"
                  />
                </div>
              </>
            )}

            <div className="mb-4">
              <label htmlFor="email" className="block text-left mb-1 font-bold">
                {action === "unsubscribe"
                  ? "Enter your email to unsubscribe:"
                  : "Email:"}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border rounded-lg p-2"
              />
            </div>

            {action === "subscribe" && (
              <>
                <div className="mb-4">
                  <label
                    htmlFor="heardAboutUs"
                    className="block text-left mb-1 font-bold"
                  >
                    How did you hear about us?
                  </label>
                  <input
                    type="text"
                    id="heardAboutUs"
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleInputChange}
                    required
                    className="w-full border rounded-lg p-2"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="privacyPolicyAgreed"
                      checked={formData.privacyPolicyAgreed}
                      onChange={handleInputChange}
                      required
                      className="mr-2"
                    />
                    <span className="text-left font-bold">
                    By submitting this form, I consent to the Life Goats team storing my personal data for the purposes of sending me a newsletter and keeping me updated. More information about how we protect your data can be found in our{" "}
                    <Link href="/privacy-policy" className="font-links underline text-secondary hover:text-tertiary" target="_blank" rel="noopener noreferrer">
                        Privacy Policy                      
                    </Link>.
                    </span>
                  </label>
                </div>
              </>
            )}
            <button
              type="submit"
              className="bg-primary hover:bg-tertiary mt-1 font-links font-bold uppercase text-md md:text-xl text-background hover:text-earth py-2 px-6 rounded-xl lg:block lg:text-left text-center drop-shadow-xl tracking-wider"
            >
              {action === "unsubscribe" ? "Unsubscribe" : "Subscribe"}
            </button>
          </form>
        ) : (
          <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] text-center">
            <p className="mb-4 text-primary font-body">{message}</p>
            {action === "subscribe" && (
              <>
                <motion.div
                  className="w-[70%] mx-auto mb-4"
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                >
                  <GoatPrintsWalking />
                </motion.div>
                <p className="mt-2 pb-4 text-center text-primary font-body">
                  Changed your mind? You can unsubscribe anytime by clicking{" "}
                  <Link href="/subscriptions?action=unsubscribe">
                    <span className="font-links underline text-secondary hover:text-tertiary">
                      here
                    </span>
                  </Link>.
                </p>
              </>
            )}
            {action === "unsubscribe" && (
              <>
                <p className="mb-4 mt-4 text-primary">
                  If you've unsubscribed accidentally and realize you miss us,
                  you can always resubscribe by clicking the button below.
                </p>
                <Link href="/subscriptions?action=subscribe">
                  <button className="bg-primary hover:bg-tertiary font-links font-bold uppercase text-md md:text-xl text-background hover:text-earth py-2 px-6 rounded-xl items-center mx-auto drop-shadow-xl tracking-wider">
                    Resubscribe
                  </button>
                </Link>
              </>
            )}
          </div>
        )} */}

        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[40%] text-center">
          The subscription feature is currently unavailable. Our developer is working on getting the feature up again as soon as possible. We apologize for the inconvenience. In the meantime, you can still subscribe or unsubscribe by sending us a&nbsp; 
          <Link href="/contact" className="font-links underline text-secondary hover:text-tertiary" target="_blank" rel="noopener noreferrer">
          message
          </Link>
          .
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SubscriptionsPage />
    </Suspense>
  );
}