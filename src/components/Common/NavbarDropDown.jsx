import supabase from 'config/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { userLogOut } from 'slices/userSlice';
import { useDispatch } from 'react-redux';
import {
  AiOutlineUser,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineShoppingCart,
  AiOutlineHome,
  AiOutlineInfoCircle,
  AiOutlineCoffee,
  AiOutlinePhone,
} from 'react-icons/ai';

const NavbarDropDown = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signOut = async () => {
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
    <div className='absolute right-[1px] w-[140px] rounded-xl border-2 bg-white p-3 shadow-sm md:w-[250px]'>
      <div className='flex flex-col gap-4'>
        <div className='flex cursor-pointer gap-3'>
          <div className='pt-1'>
            <AiOutlineShoppingCart />
          </div>
          <div className='flex items-center gap-2'>
            <p>Cart</p>
            <p className='rounded-md bg-yellow p-1 px-2'>2</p>
          </div>
        </div>

        <div className='flex cursor-pointer gap-3 sm:hidden'>
          <AiOutlineHome />
          <p>Home</p>
        </div>

        <div className='flex cursor-pointer gap-3 sm:hidden'>
          <AiOutlineCoffee />
          <p>Menu</p>
        </div>

        <div className='flex cursor-pointer gap-3 sm:hidden'>
          <AiOutlineInfoCircle />
          <p>About</p>
        </div>

        <div className='flex cursor-pointer gap-3 sm:hidden'>
          <AiOutlinePhone />
          <p>Contact</p>
        </div>

        <div className='flex cursor-pointer gap-3'>
          <AiOutlineUser />
          <p>Profile</p>
        </div>

        <div className='flex cursor-pointer gap-3'>
          <AiOutlineSetting />
          <p>Setting</p>
        </div>

        <div
          className='flex cursor-pointer gap-3 border-t-2 pt-2'
          onClick={signOut}
        >
          <p className='text-red-500'>
            <AiOutlineLogout />
          </p>
          <p className='text-red-500'>Sign Out</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropDown;
