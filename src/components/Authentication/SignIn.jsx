import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { userLogin } from 'slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import EmailForm from 'components/Authentication/EmailForm';
import PasswordForm from './PasswordForm';
import supabase from 'config/supabaseClient';
import SubmitButton from './SubmitButton';
import PopUpMassage from 'components/Common/PopUpMassage';
import { motion, AnimatePresence } from 'framer-motion';
import { messageAnimation } from 'utils/animation';

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
    <>
      <AnimatePresence>
        {isError && (
          <motion.div
            className='top-1/5 absolute left-1/2 z-50'
            {...messageAnimation}
            onClick={() => {
              setIsError(false);
            }}
          >
            <PopUpMassage
              close={() => {
                setIsError(false);
              }}
              title='Oops something wrong happened'
              description='Please try later or check your credential'
              type='error'
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className='fixed z-10 h-screen w-full backdrop-blur-sm'>
        <div className='fixed left-1/2 top-1/2 z-30 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center  border bg-white p-4 py-10 shadow-lg md:h-[574px] md:w-[514px] md:rounded-2xl md:px-20'>
          <div
            data-testId='function'
            onClick={() => {
              func(!sign);
            }}
            className='absolute right-[40px]  top-10 z-40 cursor-pointer'
          >
            <p className='text-[20px] '>
              <AiOutlineClose />
            </p>
          </div>
          <div>
            <p className='font-poppins'>Hello mate,</p>
            <h1 className='relative bottom-2 font-poppins'>
              Lets grab some coffee
            </h1>
          </div>

          <form
            className='flex flex-col justify-center gap-2'
            onSubmit={handleSubmit(signIn)}
          >
            <EmailForm register={register} errors={errors} />
            <PasswordForm register={register} errors={errors} />
            <SubmitButton />
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInComponent;
