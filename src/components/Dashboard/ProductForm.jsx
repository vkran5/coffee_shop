const ProductForm = ({ register, label, data, errors, type, formName }) => {
  return (
    <>
      <label className='font-poppins pl-2 md:pl-0 pb-1 py-2'>{label}</label>
      <input
        className='border w-[340px] md:w-[350px] h-[48px] rounded-lg p-3'
        defaultValue={data}
        type={type}
        {...register(formName, {
          required: true,
        })}
      />
    </>
  );
};

export default ProductForm;
