import { useEffect, useState } from 'react';
import EmailForm from 'components/Authentication/EmailForm';
import PasswordForm from 'components/Authentication/PasswordForm';
import supabase from 'config/supabaseClient';
import PopUpMassage from 'components/Common/PopUpMassage';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { messageAnimation } from 'utils/animation';

const Authentication = () => {
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false); // Keep
  const [isRegisterError, setIsRegisterError] = useState(false); // Keep

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isRegisterSuccess) {
      setTimeout(() => {
        setIsRegisterSuccess(false);
      }, 3000);
    }
  }, [isRegisterSuccess]);

  useEffect(() => {
    if (isRegisterError) {
      setTimeout(() => {
        setIsRegisterError(false);
      }, 3000);
    }
  }, [isRegisterError]);

  const signUp = async (registerData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: registerData.email,
        password: registerData.password,
      });

      if (error) setIsRegisterError(true);
      else setIsRegisterSuccess(true);
    } catch (err) {
      console.log(err);
      setIsRegisterError(true);
    }
  };

  return (
    <>
      <Helmet
        title={'BEAN SCENE | SIGN UP'}
        description={'Regsiter Page'}
        type={'website'}
      />

      <AnimatePresence>
        {isRegisterError && (
          <motion.div
            {...messageAnimation}
            close={() => {
              setIsRegisterError(false);
            }}
          >
            <PopUpMassage
              title='Oops something wrong happened'
              description='Please try later or check yor form'
              type='error'
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isRegisterSuccess && (
          <motion.div
            {...messageAnimation}
            onClick={() => {
              setIsRegisterSuccess(false);
            }}
          >
            <PopUpMassage
              close={() => {
                setIsRegisterSuccess(false);
              }}
              title='Register Success'
              description='Please check your mailbox'
              type='success'
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className='flex h-screen w-full items-center justify-center bg-[#f2f2f2]  md:pt-20 '>
        <div className='flex h-screen w-screen items-center justify-center bg-white md:h-[504px] md:w-[504px] md:rounded-2xl lg:shadow-md'>
          <div className='mx-auto flex flex-col justify-start p-5'>
            <div>
              <p className='font-poppins'>Start for free</p>
              <h1 className='relative bottom-2 font-poppins'>
                Create new account
              </h1>
            </div>

            <form
              className='flex flex-col items-center justify-center gap-2 '
              onSubmit={handleSubmit(signUp)}
            >
              <EmailForm register={register} errors={errors} />
              <PasswordForm register={register} errors={errors} />
              <input
                className={`mt-5 h-[48px] w-[350px] rounded-3xl bg-yellow px-5 py-3 font-poppins text-[18px] font-semibold hover:brightness-95`}
                type='submit'
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Authentication;
