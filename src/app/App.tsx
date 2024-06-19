import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StyleSheetManager } from 'styled-components';
import AppStyles from './styled';
import { Routing } from './router/router';

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
      <AppStyles />
      <main>
        <QueryClientProvider client={queryClient}>
          <Routing />
        </QueryClientProvider>
      </main>
    </StyleSheetManager>
  );
}

export default App;
