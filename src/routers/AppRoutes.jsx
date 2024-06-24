import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AccountLayout from "../layouts/Account.Layout";
import SignUp from "../pages/auth/sign-up";
import SignIn from "../pages/auth/sign-in";
import ProfileCreate from "../pages/profile/create";
import ProfileDetail from "../pages/profile/create/detail";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/sign-in" element={<SignIn />} />
        <Route path="/" element={<AccountLayout />}>
          <Route index element={<SignUp />} />
          <Route path="profile-create" element={<ProfileCreate />} />
          <Route path="profile-detail" element={<ProfileDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
