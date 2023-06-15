import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const PasswordForm = ({ password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="py-2">
      <p className="font-poppins">Password</p>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="border rounded-lg p-2 w-full h-[48px]"
        type={showPassword ? 'text' : 'password'}
      />

      <p
        onClick={() => {
          setShowPassword(!showPassword);
        }}
        className={`z-10 relative text-slate-500 text-[24px] left-[290px] bottom-[35px] cursor-pointer`}
      >
        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </p>
    </div>
  );
};

export default PasswordForm;
