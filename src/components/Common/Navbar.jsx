import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getUser } from 'slices/userSlice';
import { useSelector } from 'react-redux';
import SignInComponent from 'components/Authentication/SignIn';
import ProfileBadge from 'components/Authentication/profileBadge';
import { AnimatePresence, motion } from 'framer-motion';
import { modalAnimation } from 'utils/animation';
import NavbarDropDown from './NavbarDropDown';
import { dropdownAnimation } from 'utils/animation';

const Navbar = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const { pathname } = window.location;

  const navigate = useNavigate();
  const user = useSelector(getUser);

  return (
    <>
      <AnimatePresence>
        {isSignIn && (
          <motion.div {...modalAnimation}>
            <SignInComponent func={setIsSignIn} sign={isSignIn} />
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={` ${
          pathname === '/'
            ? 'absolute bg-transparent shadow-sm'
            : 'bg-white shadow-sm'
        } 
        ${pathname.includes('/authentication') && 'absolute bg-white'} 
        flex h-[100px] w-screen items-center`}
      >
        <div className='mx-auto flex w-4/5 max-w-full justify-between md:w-[700px] lg:w-[1280px]'>
          <div
            className={`${
              pathname === '/' ? 'text-white' : 'text-coffee'
            } cursor-pointer font-clicker text-[23px] font-bold  lg:text-[35px]`}
            onClick={() => navigate('/')}
          >
            Bean Scene
          </div>

          <div
            className={`${
              pathname === '/' ? 'text-white' : 'text-coffee'
            }  hidden  items-center gap-10 font-poppins text-[14px] md:flex lg:text-[16px]`}
          >
            <p
              onClick={() => {
                navigate('/');
              }}
              className='cursor-pointer hover:opacity-50'
            >
              Home
            </p>
            <p
              onClick={() => {
                navigate('/dashboard/inventory');
              }}
              className='cursor-pointer hover:opacity-50'
            >
              Menu
            </p>
            <p
              onClick={() => {
                navigate('/about');
              }}
              className='cursor-pointer hover:opacity-50'
            >
              About Us
            </p>
            <p
              onClick={() => {
                navigate('/');
              }}
              className='cursor-pointer hover:opacity-50'
            >
              Contact Us
            </p>
          </div>

          {user.id ? (
            <div className='relative flex flex-col'>
              <div
                onClick={() => {
                  setIsDropDown(!isDropDown);
                }}
              >
                <ProfileBadge userEmail={user.email} />
              </div>

              <AnimatePresence>
                {isDropDown && (
                  <motion.div {...dropdownAnimation}>
                    <NavbarDropDown />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className='flex items-center lg:gap-10'>
              <button
                onClick={() => setIsSignIn(!isSignIn)}
                className={` ${
                  pathname === '/' && 'text-white'
                } w-[72px] rounded-3xl bg-inherit font-poppins text-[12px] hover:brightness-90 lg:h-[48px] lg:w-[120px] lg:text-[16px]`}
              >
                Sign In
              </button>

              <button
                onClick={() => navigate('/authentication/register')}
                className={`w-[72px] rounded-3xl  bg-yellow px-5 py-3 font-poppins text-[12px] font-semibold text-coffee hover:brightness-95 lg:h-[48px] lg:w-[120px] lg:text-[16px]`}
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
