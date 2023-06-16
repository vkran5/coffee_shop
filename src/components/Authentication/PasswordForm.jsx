import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const PasswordForm = ({ password, setPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="py-2 relative w-[350px]">
      <label className="font-poppins">Password</label>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
        className="border rounded-lg p-2 w-full h-[48px]"
        type={showPassword ? 'text' : 'password'}
      />

      <p
        onClick={() => {
          setShowPassword(!showPassword);
        }}
        className={`absolute top-10 left-[315px] text-slate-500 text-[24px] cursor-pointer`}
      >
        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
      </p>
    </form>
  );
};

export default PasswordForm;
