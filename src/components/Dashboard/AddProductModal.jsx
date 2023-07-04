import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import ProductForm from './ProductForm';
import SubmitButton from 'components/Authentication/SubmitButton';
import supabase from 'config/supabaseClient';
import { AiOutlinePicture } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const AddProductModal = ({ close, fetchData }) => {
  const [picture, setPicture] = useState('');
  const [pictureDisplay, setPictureDisplay] = useState('');

  // console.log(close);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const uploadImage = (e) => {
    setPicture(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setPictureDisplay(readerEvent.target.result);
    };
  };

  const date = Date.now();

  const uploadPicture = async () => {
    const { data, error } = await supabase.storage
      .from('products_img')
      .upload(
        `coffee_img/coffee_${date}.${picture.name.split('.')[1]}`,
        picture,
        {
          cacheControl: '3600',
          upsert: false,
          contentType: picture.type,
        }
      );
  };

  const uploadProduct = async (product) => {
    try {
      const { data, error } = await supabase.from('products').insert([
        {
          name: product.name,
          coffee_composition: product.coffee,
          milk_composition: product.milk,
          price: product.price,
          stock: product.stock,
          product_img: `coffee_img/coffee_${date}.${
            picture.name.split('.')[1]
          }`,
        },
      ]);

      if (error) {
        console.log(error);
      } else {
        uploadPicture();
        fetchData();
        close();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      console.log(value, name, type)
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  const watchShowAge = watch('name', false);

  return (
    <div
      style={{ animation: 'pop-modal .3s' }}
      className='fixed z-10 h-screen w-full backdrop-blur-sm '
    >
      <div className='fixed left-1/2 top-1/3 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 transform flex-col justify-start border bg-white p-4 shadow-lg md:h-[650px] md:w-[680px] md:rounded-2xl md:px-10'>
        <div className='relative left-[320px] z-40 cursor-pointer md:left-[415px] md:top-[5px]'>
          <p onClick={close} className='relative left-[180px] text-[20px] '>
            <AiOutlineClose />
          </p>
        </div>
        <div>
          <h1 className='relative bottom-2 font-poppins'>Add Product</h1>
        </div>

        <form
          className='mx-auto flex flex-col'
          onSubmit={handleSubmit(uploadProduct)}
        >
          <div className='flex gap-4'>
            <div className='mt-2 w-1/2'>
              <label className='text-poppins text-[17px] font-medium'>
                Insert image
              </label>

              <div className='mt-1 flex h-[250px] w-[250px] items-center justify-center rounded-xl border'>
                {pictureDisplay ? (
                  <img className='h-[175px] w-[245px] ' src={pictureDisplay} />
                ) : (
                  <p className='text-[40px] text-slate-400'>
                    <AiOutlinePicture />
                  </p>
                )}
              </div>

              <br />
              <input
                className='block w-full text-sm text-slate-500 file:mr-4 file:rounded-full file:border-0 file:bg-slate-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-yellow hover:file:bg-violet-100'
                type='file'
                onChange={uploadImage}
              />
            </div>

            <div className='flex flex-col'>
              <ProductForm
                type='text'
                formName='name'
                label='Product Name'
                register={register}
                data=''
                errors={errors}
              />

              <ProductForm
                type='number'
                formName='coffee'
                register={register}
                label='Coffee Composition (%)'
                data=''
                errors={errors}
              />
              <ProductForm
                type='number'
                formName='milk'
                register={register}
                label='Milk Composition (%)'
                data=''
                errors={errors}
              />
              <ProductForm
                type='number'
                formName='price'
                register={register}
                label='Price ($)'
                data=''
                errors={errors}
              />
              <ProductForm
                type='number'
                formName='stock'
                register={register}
                label='Stock'
                data=''
                errors={errors}
              />
            </div>
          </div>

          <div>
            {Object.values(errors)[0]?.type || !picture ? (
              <p className='p-3 text-center font-poppins text-[14px] text-red-500'>
                Every field must be filled
              </p>
            ) : (
              ''
            )}
          </div>

          <SubmitButton />
        </form>
      </div>
    </div>
  );
};

export default AddProductModal;
