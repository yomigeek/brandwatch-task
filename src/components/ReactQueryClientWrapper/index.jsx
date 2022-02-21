import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

export const ReactQueryClientWrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
