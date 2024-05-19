import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/auth/Login";
import ProfileLayout from "../layout/Profile.layout";
import ProfileCompletion from "../pages/candidate/profil-fill";
import ProfileDetail from "../pages/candidate/profile";
import CandidateLayout from "../layout/Candidate.layout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileLayout />}>
          <Route index element={<Login />} />
          <Route path="profile-fill" element={<ProfileCompletion />} />
          {/* <Route path="profile" element={<ProfileDetail />} /> */}
        </Route>
        <Route path="/profile" element={<CandidateLayout />}>
          {/* <Route index element={<Login />} /> */}
          <Route path="profile-fill" element={<ProfileDetail />} />
          <Route path="profile" element={<ProfileDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
