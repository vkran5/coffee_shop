import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import ProductForm from './ProductForm';
import SubmitButton from 'components/Authentication/SubmitButton';
import supabase from 'config/supabaseClient';

const EditProductModal = ({ product, close, fetchData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (datum) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .update({
          name: datum.name,
          coffee_composition: datum.coffee,
          milk_composition: datum.milk,
          price: datum.price,
          stock: datum.stock,
        })
        .eq('id', product.id);

      if (error) {
        console.log(error);
      } else {
        fetchData();
        close();
      }

      console.log('ini data', datum);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{ animation: 'pop-modal .3s' }}
      className='fixed z-10 h-screen w-full backdrop-blur-sm'
    >
      <div className='fixed left-1/2 top-1/3 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 transform flex-col justify-start border bg-white p-4 shadow-lg md:h-[650px] md:w-[504px] md:rounded-2xl md:px-10'>
        <div className='relative left-[320px] z-40 cursor-pointer md:left-[415px] md:top-[5px]'>
          <p onClick={close} className='text-[20px] '>
            <AiOutlineClose />
          </p>
        </div>
        <div>
          <h1 className='relative bottom-2 font-poppins'>Edit Product</h1>
        </div>

        <form
          className='mx-auto flex flex-col'
          onSubmit={handleSubmit(onSubmit)}
        >
          <ProductForm
            type='text'
            formName='name'
            label='Product Name'
            register={register}
            data={product.name}
            errors={errors}
          />

          <ProductForm
            type='number'
            formName='coffee'
            register={register}
            label='Coffee Composition'
            data={product.coffee_composition}
            errors={errors}
          />
          <ProductForm
            type='number'
            formName='milk'
            register={register}
            label='Milk Composition'
            data={product.milk_composition}
            errors={errors}
          />
          <ProductForm
            type='number'
            formName='price'
            register={register}
            label='Price'
            data={product.price}
            errors={errors}
          />
          <ProductForm
            type='number'
            formName='stock'
            register={register}
            label='Stock'
            data={product.stock}
            errors={errors}
          />

          <div>
            {Object.values(errors)[0]?.type && (
              <p className='p-3 text-center font-poppins text-[14px] text-red-500'>
                Every field must be filled
              </p>
            )}
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;
