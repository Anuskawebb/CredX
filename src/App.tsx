import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit';
import { wagmiConfig } from './config/wagmi';

import GlassNavbar from './components/GlassNavbar';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Borrow from './pages/Borrow';
import Repay from './pages/Repay';
import Card from './pages/Card';
import History from './pages/History';

import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient();

function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider 
          theme={darkTheme({
            accentColor: '#10B981',
            accentColorForeground: 'white',
            borderRadius: 'medium',
            fontStack: 'system',
            overlayBlur: 'small',
          })}
        >
          <Router>
            <div className="min-h-screen bg-black">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route 
                  path="/*" 
                  element={
                    <>
                      <GlassNavbar />
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/borrow" element={<Borrow />} />
                        <Route path="/repay" element={<Repay />} />
                        <Route path="/card" element={<Card />} />
                        <Route path="/history" element={<History />} />
                      </Routes>
                    </>
                  } 
                />
              </Routes>
            </div>
          </Router>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;