import { useNavigate } from 'react-router-dom';
import SignInComponent from './Authentication/SignIn';
import { useState } from 'react';
import { getUser } from 'slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineUser } from 'react-icons/ai';
import Loading from './Loading';
import supabase from 'config/supabaseClient';
import { userLogOut } from 'slices/userSlice';

const Navbar = ({ onLoading }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const { pathname } = window.location;

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const sigOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      dispatch(userLogOut());
      navigate('/');

      console.log(error);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {isSignIn && <SignInComponent func={setIsSignIn} sign={isSignIn} />}

      <div
        className={` ${
          pathname === '/' ? 'absolute bg-transparent shadow-sm' : 'bg-white'
        } 
      ${pathname.includes('/authentication') && 'bg-white absolute'} 
      w-screen h-[100px] flex items-center`}
      >
        <div className="w-5/6 lg:w-3/4 mx-auto flex justify-between">
          <div
            className={`${
              pathname === '/' ? 'text-white' : 'text-coffee'
            } font-clicker text-[23px] lg:text-[35px] font-bold  cursor-pointer`}
            onClick={() => navigate('/')}
          >
            Bean Scene
          </div>

          <div
            className={`${
              pathname === '/' ? 'text-white' : 'text-coffee'
            }  w-2/5 hidden lg:flex justify-between items-center font-poppins`}
          >
            <p className="cursor-pointer hover:opacity-50">Home</p>
            <p className="cursor-pointer hover:opacity-50">Menu</p>
            <p className="cursor-pointer hover:opacity-50">About Us</p>
            <p className="cursor-pointer hover:opacity-50">contact Us</p>
          </div>

          {onLoading ? (
            <Loading />
          ) : user.id ? (
            <div
              onClick={sigOut}
              className="flex justify-center items-center gap-2 border p-3 rounded-xl hover:opacity-50 cursor-pointer"
            >
              <div className="flex justify-center items-center">
                <p
                  className={`${
                    pathname === '/' ? 'text-white' : 'text-coffee'
                  } text-[20px] relative`}
                >
                  <AiOutlineUser />
                </p>
              </div>

              <p className="text-white font-poppins hidden lg:block">
                {user.email}
              </p>
            </div>
          ) : (
            <div className="flex items-center lg:gap-10">
              <button
                onClick={() => setIsSignIn(!isSignIn)}
                className={` ${
                  pathname === '/' && 'text-white'
                } bg-inherit hover:brightness-90 font-poppins rounded-2xl w-[72px] lg:w-[120px] lg:h-[48px] text-[12px] lg:text-[16px]`}
              >
                Sign In
              </button>

              <button
                onClick={() => navigate('/authentication/register')}
                className={`bg-yellow rounded-3xl  text-coffee px-5 py-3 w-[100px] lg:w-[120px] lg:h-[48px] text-[12px] lg:text-[16px] font-poppins hover:brightness-95 font-semibold`}
              >
                Sign UP
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
