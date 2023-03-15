import Google from "@/components/icons/Google";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "@/utils/firebase/firebase.utils";
import React, { useState } from "react";

type Props = {};

const GoogleButton = (props: Props) => {
  const [showError, setShowError] = useState(false);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    try {
      const userDocRef = await createUserDocumentFromAuth(user, {
        newsletter: false,
      });
    } catch {
      setShowError(true);
    }
  };

  return (
    <div>
      <button
        className="btn btn-outline btn-wide btn-primary gap-8"
        onClick={logGoogleUser}
      >
        <Google />
        sign in with google
      </button>
      {showError && (
        <p className=" text-red-500 text-center py-2">
          There has been an error
        </p>
      )}
    </div>
  );
};

export default GoogleButton;
