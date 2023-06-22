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
      <div className='w-[150px] lg:w-[250px] min-h-screen border-r flex flex-col gap-8'>
        <div className='flex flex-col gap-1 '>
          <p className='font-poppins text-yellow text-[20px]'>Halo Admin,</p>
          <p className='font-poppins text-coffee'>Have a nice day!</p>
        </div>

        <div className='flex gap-4 items-center cursor-pointer'>
          <p
            className={`${
              pathname.includes('/inventory') && 'text-yellow'
            } font-poppins text-slate-500 text-[16px] lg:text-[20px]`}
          >
            <FaCoffee />
          </p>
          <p
            className={`${
              pathname.includes('/inventory') && 'text-yellow'
            } font-poppins text-slate-500 text-[12px] lg:text-[16px]`}
          >
            Inventory
          </p>
        </div>

        <div className='flex gap-4 cursor-pointer'>
          <p className='text-[16px] lg:text-[20px] text-slate-500'>
            <FaClipboardList />
          </p>
          <p className='font-poppins text-slate-500 text-[12px] lg:text-[16px]'>
            Transactions
          </p>
        </div>

        <div className='flex gap-4 cursor-pointer'>
          <p className='text-[16px] lg:text-[20px] text-slate-500'>
            <FaChartLine />
          </p>
          <p className='font-poppins text-slate-500 text-[12px] lg:text-[16px]'>
            Overview
          </p>
        </div>

        <div className='flex gap-4 cursor-pointer'>
          <p className='text-[16px] lg:text-[20px] text-slate-500'>
            <FaInfo />
          </p>
          <p className='font-poppins text-slate-500 text-[12px] lg:text-[16px]'>
            Information
          </p>
        </div>

        <div className='flex gap-4 cursor-pointer'>
          <p className='text-[16px] lg:text-[20px] text-slate-500'>
            <FaLaptop />
          </p>
          <p className='font-poppins text-slate-500 text-[12px] lg:text-[16px]'>
            Visit
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
