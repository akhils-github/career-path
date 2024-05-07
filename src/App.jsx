import AppRoutes from "./routes";
import "./index.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <GoogleOAuthProvider clientId="985135946166-v9sume15fv13h8ccouhfnche7gbg0ncr.apps.googleusercontent.com">
      <AppRoutes />
    </GoogleOAuthProvider>
  );
}

export default App;
