import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from './UserContext/userContext.jsx';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <UserProvider>
    <App />
    </UserProvider>
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
