const ProductFormNumber = ({ register, data, errors }) => {
  //   console.log(errors?.name.type === 'required');
  return (
    <>
      <input
        className='border w-[340px] md:w-[350px] h-[48px] rounded-lg p-3'
        defaultValue={data}
        type='number'
        {...register('name', {
          required: true,
          message: 'Please check your field',
        })}
      />

      <div>
        {errors.name?.type === 'required' && (
          <p className='p-1 text-red-500 font-poppins text-[12px] '>
            Please check your field
          </p>
        )}
      </div>
    </>
  );
};

export default ProductFormNumber;
