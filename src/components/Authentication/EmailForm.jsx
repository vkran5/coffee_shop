import React from 'react';

const EmailForm = ({ register, errors }) => {
  // console.log(errors.email);
  return (
    <div className='relative flex flex-col gap-2'>
      <label htmlFor='email' className='pl-2 font-poppins md:pl-0'>
        Email
      </label>
      <input
        className='h-[48px] w-[340px] rounded-lg border p-3 md:w-[350px]'
        id='email'
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
          <p className='p-1 font-poppins text-[12px] text-red-500 '>
            {errors.email.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default EmailForm;
