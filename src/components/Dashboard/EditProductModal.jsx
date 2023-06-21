import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import ProductForm from './ProductForm';
import SubmitButton from 'components/Authentication/SubmitButton';
import supabase from 'config/supabaseClient';

const EditProductModal = ({ product, setModal, getData }) => {
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
        getData();
        setModal(false);
      }

      console.log('ini data', datum);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{ animation: 'pop-modal .3s' }}
      className='w-full h-screen backdrop-blur-sm fixed z-10'
    >
      <div className='flex flex-col w-screen md:w-[504px] h-screen md:h-[650px] justify-start p-4 md:px-10 border md:rounded-2xl fixed bg-white shadow-lg top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='relative left-[320px] md:left-[415px] md:top-[5px] cursor-pointer z-40'>
          <p
            onClick={() => {
              setModal(false);
            }}
            className='text-[20px] '
          >
            <AiOutlineClose />
          </p>
        </div>
        <div>
          <h1 className='font-poppins relative bottom-2'>Edit Product</h1>
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
              <p className='p-3 text-red-500 font-poppins text-center text-[14px]'>
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
