import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { GoogleOAuthProvider } from "@react-oauth/google";

function QueryProvider({ children }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 520000,
        cacheTime: 520000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
      <GoogleOAuthProvider clientId="985135946166-v9sume15fv13h8ccouhfnche7gbg0ncr.apps.googleusercontent.com">
        {children}
      </GoogleOAuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default QueryProvider;
