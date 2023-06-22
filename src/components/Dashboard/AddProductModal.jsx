import { useForm } from 'react-hook-form';
import { AiOutlineClose } from 'react-icons/ai';
import ProductForm from './ProductForm';
import SubmitButton from 'components/Authentication/SubmitButton';
import supabase from 'config/supabaseClient';
import { AiOutlinePicture } from 'react-icons/ai';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const AddProductModal = ({ setModal, getData }) => {
  const [picture, setPicture] = useState('');
  const [pictureDisplay, setPictureDisplay] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

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
    console.log('clicked');
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
        getData();
        setModal(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{ animation: 'pop-modal .3s' }}
      className='w-full h-screen backdrop-blur-sm fixed z-10 '
    >
      <div className='flex flex-col w-screen md:w-[680px] h-screen md:h-[650px] justify-start p-4 md:px-10 border md:rounded-2xl fixed bg-white shadow-lg top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='relative left-[320px] md:left-[415px] md:top-[5px] cursor-pointer z-40'>
          <p
            onClick={() => {
              setModal(false);
            }}
            className='text-[20px] relative left-[180px] '
          >
            <AiOutlineClose />
          </p>
        </div>
        <div>
          <h1 className='font-poppins relative bottom-2'>Add Product</h1>
        </div>

        <form
          className='mx-auto flex flex-col'
          onSubmit={handleSubmit(uploadProduct)}
        >
          <div className='flex gap-4'>
            <div className='w-1/2 mt-2'>
              <label className='text-poppins text-[17px] font-medium'>
                Insert image
              </label>

              <div className='w-[250px] h-[250px] border mt-1 rounded-xl flex justify-center items-center'>
                {pictureDisplay ? (
                  <img className='w-[245px] h-[175px] ' src={pictureDisplay} />
                ) : (
                  <p className='text-[40px] text-slate-400'>
                    <AiOutlinePicture />
                  </p>
                )}
              </div>

              <br />
              <input
                className='block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-50 file:text-yellow hover:file:bg-violet-100'
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
              <p className='p-3 text-red-500 font-poppins text-center text-[14px]'>
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
