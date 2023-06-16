import { useEffect, useState } from 'react';
import EmailForm from 'components/Authentication/EmailForm';
import PasswordForm from 'components/Authentication/PasswordForm';
import { useNavigate } from 'react-router-dom';
import supabase from 'config/supabaseClient';
import RegisterErrorMassage from 'components/Authentication/RegisterErrorMassage';
import RegisterSuccessMassage from 'components/Authentication/RegisterSuccessMassage';

const Authentication = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [errorMassage, setErrorMassage] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  const navigate = useNavigate();
  const password_regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/;

  useEffect(() => {
    if (password) {
      if (password.match(password_regex)) setIsPasswordValid(true);
      else setIsPasswordValid(false);
    }
  }, [password]);

  useEffect(() => {
    if (email) {
      if (email.includes('@') && email.includes('.')) setIsEmailValid(true);
      else setIsEmailValid(false);
    }
  }, [email]);

  const signUp = async () => {
    if (isEmailValid && isPasswordValid) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });

        if (error) {
          setErrorMassage(true);
          setLoading(false);
          setErrorMassage(true);
          console.log(error);
        } else {
          setIsRegisterSuccess(true);
          setLoading(false);
          setErrorMassage(false);
          setEmail('');
          setPassword('');
        }
      } catch (err) {
        setErrorMassage(true);
        setLoading(false);
        console.log(err);
      }
    } else {
      setLoading(false);
      setErrorMassage(true);
    }
  };

  return (
    <>
      {errorMassage && (
        <RegisterErrorMassage
          func={setErrorMassage}
          isMassage={RegisterErrorMassage}
        />
      )}

      {isRegisterSuccess && (
        <RegisterSuccessMassage
          setMassage={setIsRegisterSuccess}
          massage={RegisterSuccessMassage}
        />
      )}

      <div className="w-full h-screen flex justify-center items-center md:pt-20  bg-[#f2f2f2] ">
        <div className="w-screen md:w-[504px] h-screen md:h-[504px]  md:rounded-2xl bg-white flex justify-center items-center lg:shadow-md">
          <div className="flex flex-col justify-start p-5">
            <div>
              <p className="font-poppins">Start for free</p>
              <h1 className="font-poppins relative bottom-5">
                Create new account
              </h1>
            </div>

            <EmailForm email={email} setEmail={setEmail} />
            <PasswordForm password={password} setPassword={setPassword} />

            {password && (
              <div
                className={`${
                  password.match(password_regex)
                    ? 'border-green-500 bg-green-100'
                    : 'border-red-500 bg-red-100'
                } p-2 rounded-2xl border relative top-2 `}
              >
                <p
                  className={`${
                    password.match(password_regex)
                      ? 'text-green-600'
                      : 'text-red-500'
                  } text-[12px] text-center`}
                >
                  Password contain min 6 chars, 1 uppercase, 1 number
                </p>
              </div>
            )}

            <button
              disabled={password || email ? false : true}
              onClick={() => {
                setTimeout(signUp, 1500);
                setLoading(!loading);
              }}
              className={`${loading ? 'text-card' : 'text-coffee'}
              ${
                !email || !password ? 'cursor-not-allowed' : 'cursor-pointer'
              } bg-yellow font-poppins rounded-3xl px-5 py-3 w-full h-[48px] hover:brightness-95 font-semibold mt-7`}
            >
              {loading ? 'Wait a moment' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
