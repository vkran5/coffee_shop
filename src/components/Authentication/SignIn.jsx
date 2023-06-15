import { useState } from 'react';
import EmailForm from 'components/Authentication/EmailForm';
// import PasswordForm from 'components/Authentication/PasswordForm';
import { AiOutlineClose } from 'react-icons/ai';
import supabase from 'config/supabaseClient';
import { userLogin } from 'slices/userSlice';
import { useDispatch } from 'react-redux';
import ErrorMassage from './ErrorMassage';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

const SignInComponent = ({ func, sign }) => {
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isError, setIsError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signIn = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailInput,
        password: passwordInput,
      });

      if (error) {
        setIsError(true);
        setLoading(false);
      } else {
        dispatch(userLogin(data.user));
        func(!sign);
        setLoading(false);
        navigate('/');
      }
    } catch (err) {
      setIsError(true);
      setLoading(false);
    }
  };

  return (
    <div
      style={{ animation: 'pop-modal .3s' }}
      className="w-screen h-screen backdrop-blur-sm fixed z-30"
    >
      <div className="flex flex-col w-screen md:w-[504px] h-screen md:h-[574px] justify-start py-10 md:py-14 px-10 md:px-20 border md:rounded-2xl fixed bg-white shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div
          onClick={() => {
            func(!sign);
            console.log('hit');
          }}
          className="relative left-[290px] md:left-[375px] md:bottom-[30px] cursor-pointer z-40"
        >
          <p className="text-[20px] ">
            <AiOutlineClose />
          </p>
        </div>
        <div>
          <p className="font-poppins">Hello mate,</p>
          <h1 className="font-poppins relative bottom-5">
            Lets grab some coffee
          </h1>
        </div>

        <EmailForm email={emailInput} setEmail={setEmail} />

        {/* <PasswordForm password={passwordInput} setPassword={setPassword} /> */}
        <div className="py-2">
          <p className="font-poppins">Password</p>
          <input
            value={passwordInput}
            onChange={(e) => {
              setPasswordInput(e.target.value);
            }}
            className="border rounded-lg p-2 w-full h-[48px]"
            type={showPassword ? 'text' : 'password'}
          />

          <p
            onClick={() => {
              setShowPassword(!showPassword);
            }}
            className={`z-10 relative text-slate-500 text-[24px] left-[260px] md:left-[300px] bottom-[35px] cursor-pointer`}
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </p>
        </div>

        {isError && <ErrorMassage />}

        <button
          onClick={() => {
            setTimeout(signIn, 1500);
            setLoading(!loading);
          }}
          className={`${
            loading ? 'text-card' : 'text-coffee'
          } bg-yellow font-poppins rounded-3xl px-5 py-3 w-full h-[48px] hover:brightness-95 font-semibold mt-7`}
        >
          {loading ? 'Wait a moment' : 'Sign in'}
        </button>
      </div>
    </div>
  );
};

export default SignInComponent;
