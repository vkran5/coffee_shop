import { useState } from 'react';
import EmailForm from 'components/Authentication/EmailForm';
import { AiOutlineClose } from 'react-icons/ai';
import supabase from 'config/supabaseClient';
import { userLogin } from 'slices/userSlice';
import { useDispatch } from 'react-redux';
import ErrorMassage from './ErrorMassage';
import { useNavigate } from 'react-router-dom';
import PasswordForm from './PasswordForm';
import { useForm } from 'react-hook-form';
import SubmitButton from './SubmitButton';

const SignInComponent = ({ func, sign }) => {
  const [isError, setIsError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const signIn = async (credential) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: credential.email,
        password: credential.password,
      });

      if (error) {
        setIsError(true);
      } else {
        dispatch(userLogin(data.user));
        func(!sign);
        navigate('/');
      }
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <div
      style={{ animation: 'pop-modal .3s' }}
      className='w-full h-screen backdrop-blur-sm fixed z-10'
    >
      <div className='flex flex-col w-screen md:w-[504px] h-screen md:h-[574px] justify-start py-10 p-4 md:px-20 border md:rounded-2xl fixed bg-white shadow-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div
          onClick={() => {
            func(!sign);
            console.log('hit');
          }}
          className='relative left-[320px] md:left-[375px] md:bottom-[30px] cursor-pointer z-40'
        >
          <p className='text-[20px] '>
            <AiOutlineClose />
          </p>
        </div>
        <div>
          <p className='font-poppins'>Hello mate,</p>
          <h1 className='font-poppins relative bottom-2'>
            Lets grab some coffee
          </h1>
        </div>

        <form
          className='flex flex-col gap-2 justify-center'
          onSubmit={handleSubmit(signIn)}
        >
          <EmailForm register={register} errors={errors} />
          <PasswordForm register={register} errors={errors} />
          <SubmitButton />
        </form>

        {isError && <ErrorMassage func={setIsError} isMassage={isError} />}
      </div>
    </div>
  );
};

export default SignInComponent;
