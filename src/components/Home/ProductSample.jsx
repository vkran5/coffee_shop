import CardComponent from 'components/Common/Card';
import Badge from 'components/Common/Badge';
import coffeBlast from 'assets/coffee_blast (1).png';
import coffeeBadge from 'assets/coffee-cup 1.png';
import priceBadge from 'assets/best-price 1.png';
import beansBadge from 'assets/coffee-beans 1.png';
import badge from 'assets/badge 1.png';
import Button from 'components/Common/Button';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useSupabaseFetch } from 'utils/supabaseHooks';
import PopUpMassage from 'components/Common/PopUpMassage';
import { messageAnimation } from 'utils/animation';

const ProdcutComponent = () => {
  const [samples, setSamples] = useState([]);
  const { data, error } = useSupabaseFetch({
    page: 1,
    limit: 4,
  });

  useEffect(() => {
    if (data) {
      setSamples(data);
    }
  }, [data]);

  return (
    <>
      <AnimatePresence>
        {error && (
          <motion.div {...messageAnimation}>
            <PopUpMassage
              title='Data can not be displayed'
              description='Plese try later'
              type='error'
            />
          </motion.div>
        )}
      </AnimatePresence>

      <section className='bottom-10 flex w-screen pb-10 md:relative'>
        <div className='xl:4/5 mx-auto w-5/6 2xl:w-3/4'>
          {/* Products */}
          <h1 className='lgtext-[57px] text-center font-playfair text-[32px] font-bold text-coffee'>
            Enjoy a new blend of coffee style
          </h1>
          <p className='text-center font-playfair text-coffee lg:text-[20px]'>
            Explore all flavours of coffee with us. There is always a new cup
            worth experiencing
          </p>

          <div className='mx-auto flex py-4 '>
            <div className='mx-auto flex-wrap gap-5 md:flex lg:flex-nowrap'>
              {samples.map((val) => {
                return (
                  <div key={val.id} className='mx-auto'>
                    <CardComponent
                      img={val.product_img}
                      name={val.name}
                      price={val.price}
                      composition={`Milk: ${val.milk_composition}% | Coffee: ${val.coffee_composition}%`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <img
            className='absolute right-0 hidden md:top-[500px] lg:block '
            src={coffeBlast}
            alt='blast/img'
          />

          {/* Quality */}
          <h1 className='mt-20 text-center font-playfair text-[32px] font-bold text-coffee lg:text-[57px]'>
            Why are we different?
          </h1>
          <p className='text-center font-playfair text-coffee lg:text-[20px]'>
            We don’t just make your coffee, we make your day!
          </p>

          <div className='mx-auto flex py-4'>
            <div className='mx-auto gap-5'>
              <div className='mx-auto flex-wrap justify-evenly md:flex lg:flex-nowrap lg:gap-5'>
                <Badge
                  img={beansBadge}
                  title={'Supreme Beans'}
                  description={'Beans that provides great taste'}
                />

                <Badge
                  img={badge}
                  title={'High Quality'}
                  description={'We provide the highest quality'}
                />

                <Badge
                  img={coffeeBadge}
                  title={'Extraordinary '}
                  description={'Coffee like you have never tasted'}
                />

                <Badge
                  img={priceBadge}
                  title={'Affordable Price'}
                  description={'Our Coffee prices are easy to afford'}
                />
              </div>
            </div>
          </div>

          <p className='text-center font-playfair text-coffee lg:text-[20px]'>
            Great ideas start with great coffee, Lets help you achieve that
          </p>
          <h1 className='text-center font-playfair text-[20px] font-bold text-coffee lg:text-[30px]'>
            Get Started today.
          </h1>

          <div className='mx-auto flex'>
            <div className='mx-auto'>
              <Button text={'Join Us'} width={'100px'} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProdcutComponent;
