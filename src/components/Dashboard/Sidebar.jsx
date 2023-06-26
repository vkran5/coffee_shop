import {
  FaCoffee,
  FaClipboardList,
  FaChartLine,
  FaLaptop,
} from 'react-icons/fa';
import { FaInfo } from 'react-icons/fa';

const Sidebar = () => {
  const { pathname } = window.location;

  return (
    <>
      <div className='flex min-h-screen w-[150px] flex-col gap-8 border-r pt-3 lg:w-[250px]'>
        <div className='flex flex-col gap-1 '>
          <p className='font-poppins text-[20px] text-yellow'>Halo Admin,</p>
          <p className='font-poppins text-coffee'>Have a nice day!</p>
        </div>

        <div className='flex cursor-pointer items-center gap-4'>
          <p
            className={`${
              pathname.includes('/inventory') && 'text-yellow'
            } font-poppins text-[16px] text-slate-500 lg:text-[20px]`}
          >
            <FaCoffee />
          </p>
          <p
            className={`${
              pathname.includes('/inventory') && 'text-yellow'
            } font-poppins text-[12px] text-slate-500 lg:text-[16px]`}
          >
            Inventory
          </p>
        </div>

        <div className='flex cursor-pointer gap-4'>
          <p className='text-[16px] text-slate-500 lg:text-[20px]'>
            <FaClipboardList />
          </p>
          <p className='font-poppins text-[12px] text-slate-500 lg:text-[16px]'>
            Transactions
          </p>
        </div>

        <div className='flex cursor-pointer gap-4'>
          <p className='text-[16px] text-slate-500 lg:text-[20px]'>
            <FaChartLine />
          </p>
          <p className='font-poppins text-[12px] text-slate-500 lg:text-[16px]'>
            Overview
          </p>
        </div>

        <div className='flex cursor-pointer gap-4'>
          <p className='text-[16px] text-slate-500 lg:text-[20px]'>
            <FaInfo />
          </p>
          <p className='font-poppins text-[12px] text-slate-500 lg:text-[16px]'>
            Information
          </p>
        </div>

        <div className='flex cursor-pointer gap-4'>
          <p className='text-[16px] text-slate-500 lg:text-[20px]'>
            <FaLaptop />
          </p>
          <p className='font-poppins text-[12px] text-slate-500 lg:text-[16px]'>
            Visit
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
