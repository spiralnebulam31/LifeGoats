// 


"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SubscribePage() {
  const searchParams = useSearchParams();
  const action = searchParams.get("action"); // Get the query parameter (subscribe or unsubscribe)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    heardAboutUs: "",
    privacyPolicyAgreed: false,
  });

  const [message, setMessage] = useState(null);

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
      action === "unsubscribe"
        ? "/api/unsubscribe"
        : "/api/subscribe";

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
    <div style={{ padding: "20px", maxWidth: "500px", marginTop: "200px" }}>
      <h1>
        {action === "unsubscribe" ? "Unsubscribe from Newsletter" : "Subscribe to Newsletter"}
      </h1>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        {action === "subscribe" && (
          <>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label htmlFor="heardAboutUs">How did you hear about us?</label>
              <input
                type="text"
                id="heardAboutUs"
                name="heardAboutUs"
                value={formData.heardAboutUs}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  name="privacyPolicyAgreed"
                  checked={formData.privacyPolicyAgreed}
                  onChange={handleInputChange}
                  required
                />
                I agree to the privacy policy.
              </label>
            </div>
          </>
        )}
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit">
          {action === "unsubscribe" ? "Unsubscribe" : "Subscribe"}
        </button>
      </form>
    </div>
  );
}
