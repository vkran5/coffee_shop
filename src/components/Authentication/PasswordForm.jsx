import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const PasswordForm = ({ register, errors }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className='relative flex flex-col gap-2'>
      <label className='font-poppins pl-2 md:pl-0'>Password</label>
      <input
        className='border w-[340px] md:w-[350px] h-[48px] mx-auto rounded-lg p-3'
        type={showPassword ? 'text' : 'password'}
        {...register('password', {
          required: true,
          pattern: {
            value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
            message: 'PPassword contain min 6 chars, 1 uppercase, 1 number',
          },
        })}
      />
      <p
        onClick={() => {
          setShowPassword(!showPassword);
        }}
        className={`absolute top-[38px] left-[300px] md:left-[315px] text-slate-500 text-[24px] cursor-pointer`}
      >
        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </p>

      <div>
        {errors.password && (
          <p className='p-1 text-red-500 font-poppins text-[12px] '>
            {errors.password.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default PasswordForm;
