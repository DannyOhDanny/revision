import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Outlet } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
import AppStyles from './styled';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
function App() {
  return (
    <StyleSheetManager enableVendorPrefixes>
      <>
        <AppStyles />
        <main>
          <QueryClientProvider client={queryClient}>
            <Outlet />
          </QueryClientProvider>
        </main>
      </>
    </StyleSheetManager>
  );
}

export default App;
