import { AiFillCheckCircle } from 'react-icons/ai';

const Values = ({ value }) => {
  return (
    <div className='flex items-center gap-3'>
      <p className='text-[14px] text-green-500 lg:text-[20px]'>
        <AiFillCheckCircle />
      </p>
      <p className='font-poppins text-[14px] text-slate-500 lg:text-[20px]'>
        {value}
      </p>
    </div>
  );
};

export default Values;
