import { useEffect, useState } from 'react';
import EmailForm from 'components/Authentication/EmailForm';
import PasswordForm from 'components/Authentication/PasswordForm';
import supabase from 'config/supabaseClient';
import RegisterErrorMassage from 'components/Authentication/RegisterErrorMassage';
import RegisterSuccessMassage from 'components/Authentication/RegisterSuccessMassage';
import { useForm } from 'react-hook-form';

const Authentication = () => {
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false); // Keep
  const [errorMassage, setErrorMassage] = useState(false); // Keep

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signUp = async (registerData) => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: registerData.email,
        password: registerData.password,
      });

      console.log(registerData);
      console.log(error);
      console.log(data);

      if (error) {
        setErrorMassage(true);
      } else {
        setIsRegisterSuccess(true);
        setLoading(false);
        setErrorMassage(false);
      }
    } catch (err) {
      setErrorMassage(true);
      console.log(err);
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

      <div className='w-full h-screen flex justify-center items-center md:pt-20  bg-[#f2f2f2] '>
        <div className='w-screen md:w-[504px] h-screen md:h-[504px] md:rounded-2xl bg-white flex justify-center items-center lg:shadow-md'>
          <div className='flex flex-col mx-auto justify-start p-5'>
            <div>
              <p className='font-poppins'>Start for free</p>
              <h1 className='font-poppins relative bottom-2'>
                Create new account
              </h1>
            </div>

            <form
              className='flex flex-col gap-2 justify-center'
              onSubmit={handleSubmit(signUp)}
            >
              <EmailForm register={register} errors={errors} />
              <PasswordForm register={register} errors={errors} />
              <input
                className={`bg-yellow rounded-3xl px-5 py-3 w-[350px] h-[48px] font-poppins text-[18px] mt-5 hover:brightness-95 font-semibold`}
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
