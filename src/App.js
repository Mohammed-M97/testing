import './App.css';
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    } 
  });
  const [userName, setUserName] = useState("")

  
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{userName, setUserName}}>
          <Router>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<h1>PAGE NOT FOUND</h1>} />
              <Route />
              <Route />
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>
    </div>
    )
}



export default App;
