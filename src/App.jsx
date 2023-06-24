import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from 'components/Common/Navbar';
import Footer from 'components/Common/Footer';
import supabase from 'config/supabaseClient';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'slices/userSlice';
import Authentication from 'pages/Authentication';
import HomePage from 'pages/HomePage';
import AboutUs from 'pages/AboutUs';
import Dashboard from 'pages/Dashboard';

function App() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const keepLogin = async () => {
    try {
      const { data, error } = await supabase.auth.getSession();
      dispatch(userLogin(data.session.user));
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    keepLogin();
  }, []);

  return (
    <>
      <Navbar onLoading={loading} />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/authentication/register' element={<Authentication />} />
        <Route path='/dashboard/inventory' element={<Dashboard />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
