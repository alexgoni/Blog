import { getAuth, signOut } from "firebase/auth";
import { app } from "firebaseApp";
import React from "react";
import { toast } from "react-toastify";

export default function Profile() {
  const auth = getAuth(app);

  const onSignOut = async () => {
    try {
      const auth = getAuth(app);
      await signOut(auth);
      toast.success("로그아웃 되었습니다.");
    } catch (error: any) {
      console.log(error);
      toast.error(error?.code);
    }
  };

  return (
    <>
      <div className="profile">
        <div className="profile__info">
          <div className="profile__img" />
          <div className="profile__email">{auth?.currentUser?.email}</div>
          <div className="profile__name">
            {auth?.currentUser?.displayName || "사용자"}
          </div>
        </div>
        <div
          role="presentation"
          className="profile__logout"
          onClick={onSignOut}
        >
          로그아웃
        </div>
      </div>
    </>
  );
}
