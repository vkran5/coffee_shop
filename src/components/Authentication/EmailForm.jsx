const EmailForm = ({ register, errors }) => {
  // console.log(errors.email);
  return (
    <>
      <label className='font-poppins pl-2 md:pl-0'>Email</label>
      <input
        className='border w-[340px] mx-auto md:w-[350px] h-[48px] rounded-lg p-3'
        type='email'
        {...register('email', {
          required: true,
          pattern: {
            value:
              /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/,
            message: 'Please use proper email format',
          },
        })}
      />

      <div>
        {errors.email && (
          <p className='p-1 text-red-500 font-poppins text-[12px] '>
            {errors.email.message}
          </p>
        )}
      </div>
    </>
  );
};

export default EmailForm;
