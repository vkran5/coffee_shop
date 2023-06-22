import { AiFillCheckCircle } from 'react-icons/ai';

const Values = ({ value }) => {
  return (
    <div className='flex items-center gap-3'>
      <p className='text-[20px] text-green-500'>
        <AiFillCheckCircle />
      </p>
      <p className='font-poppins text-[20px] text-slate-500'>{value}</p>
    </div>
  );
};

export default Values;
