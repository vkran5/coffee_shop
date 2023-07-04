import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from 'components/Common/Navbar';
import Footer from 'components/Common/Footer';
import supabase from 'config/supabaseClient';
import { useEffect, useState } from 'react';
import { userLogin } from 'slices/userSlice';
import Authentication from 'pages/Authentication';
import HomePage from 'pages/HomePage';
import AboutUs from 'pages/AboutUs';
import Dashboard from 'pages/Dashboard';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { userRootSelector } from 'config/redux_persist/user/selector';

function App() {
  const [loading, setLoading] = useState(false);

  const userState = useSelector(userRootSelector, shallowEqual);

  console.log(userState);

  const dispatch = useDispatch();
  var getToken = localStorage.getItem('sb-nwnvjsefgvlgbbdmczcm-auth-token');

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
    if (getToken) keepLogin();
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
