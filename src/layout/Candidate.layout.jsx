import { Outlet } from "react-router-dom";
import CandidateHeader from "../components/common/candidate-nav";

export default function CandidateLayout() {
  return (
    <div className="bg-blue">
      <CandidateHeader />
      <Outlet />
    </div>
  );
}
