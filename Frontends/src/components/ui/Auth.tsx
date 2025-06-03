import React, { useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react"; // or wherever your `useUser` is coming from

import { BACKEND_URL } from "@/config";

const AuthHandler: React.FC = () => {
  const { user } = useUser();

  useEffect(() => {
    if (!user) return;

    // Extract user information
    const firstName = user.firstName || "";
    const lastName = user.lastName || "";
    const email = user.emailAddresses[0]?.emailAddress || "";

    const fullName = `${firstName} ${lastName}`.trim();

    // Send to backend
    const authenticateUser = async () => {
      if (!email || !fullName) {
        alert("Missing user information.");
        return;
      }

      try {
        const response = await axios.post<{ token: string }>(
          `${BACKEND_URL}/api/v1/user/signup`,
          {
            username: email,
            name: fullName,
          }
        );
        localStorage.setItem("token", response.data.token);
        console.log("Token saved:", response.data.token);
      } catch (error) {
        console.error("Signin error:", error);
        alert("Signin failed. Please check your details and try again.");
      }
    };

    authenticateUser();
  }, [user]);

  return null; // This component doesn't render anything
};

export default AuthHandler;
