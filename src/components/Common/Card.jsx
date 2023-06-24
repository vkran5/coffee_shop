import supabase from 'config/supabaseClient';
import Button from './Button';
import { useEffect, useState } from 'react';

const CardComponent = ({ img, name, price, composition }) => {
  const [picture, setPicture] = useState('');
  // console.log(name, img);

  const getPicture = async () => {
    const { data } = await supabase.storage
      .from('products_img')
      .getPublicUrl(img);

    // console.log(data);
    setPicture(data.publicUrl);
  };

  useEffect(() => {
    getPicture();
  }, []);

  return (
    <div className='relative my-8 h-[388px] w-[280px] border border-[#f0e4d7] bg-card'>
      <img className='h-[220px] w-[280px]' src={picture} alt='ccoffe/img' />

      <div className='flex flex-col items-center justify-between gap-3 py-3'>
        <p className='text-center font-playfair text-[22px] font-semibold text-coffee'>
          {name}
        </p>
        <p className='font-playfair text-[20px]'>{composition}</p>
        <p className='text-center font-playfair text-[22px] font-semibold text-coffee'>
          ${price}
        </p>
      </div>

      <div className='absolute left-[30%] top-[93%] flex'>
        <div className='mx-auto'>
          <Button text='Order Now' height={'48px'} width={'140px'}>
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
