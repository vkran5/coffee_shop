import CardComponent from 'components/Card';
import Badge from 'components/Badge';
import coffeBlast from 'assets/coffee_blast (1).png';
import coffeeBadge from 'assets/coffee-cup 1.png';
import priceBadge from 'assets/best-price 1.png';
import beansBadge from 'assets/coffee-beans 1.png';
import badge from 'assets/badge 1.png';
import Button from 'components/Button';
import supabase from 'config/supabaseClient';
import { useEffect, useState } from 'react';

const ProdcutComponent = () => {
  const [samples, setSamples] = useState([]);

  const getSamples = async () => {
    try {
      const { data: products, error } = await supabase
        .from('products')
        .select('*')
        .range(0, 3);

      setSamples(products);
      console.log(error);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSamples();
  }, []);

  return (
    <>
      <section className="w-screen flex pb-10 md::relative bottom-10">
        <div className="w-5/6 2xl:w-3/4 xl:4/5 mx-auto">
          {/* Products */}
          <h1 className="font-playfair text-[32px] lgtext-[57px] font-bold text-coffee text-center">
            Enjoy a new blend of coffee style
          </h1>
          <p className="font-playfair lg:text-[20px] text-coffee text-center">
            Explore all flavours of coffee with us. There is always a new cup
            worth experiencing
          </p>

          <div className="flex mx-auto py-4 ">
            <div className="md:flex flex-wrap lg:flex-nowrap gap-5 mx-auto">
              {samples.map((val) => {
                return (
                  <div key={val.id} className="mx-auto">
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
            className="absolute hidden lg:block right-0 2xl:top-[700px] md:top-[2000px] xl:top-[230vh]"
            src={coffeBlast}
            alt="blast/img"
          />

          {/* Quality */}
          <h1 className="font-playfair text-[32px] lg:text-[57px] font-bold text-coffee text-center mt-20">
            Why are we different?
          </h1>
          <p className="font-playfair lg:text-[20px] text-coffee text-center">
            We don’t just make your coffee, we make your day!
          </p>

          <div className="flex mx-auto py-4">
            <div className="gap-5 mx-auto">
              <div className="mx-auto md:flex flex-wrap lg:flex-nowrap lg:gap-5 justify-evenly">
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

          <p className="font-playfair lg:text-[20px] text-coffee text-center">
            Great ideas start with great coffee, Lets help you achieve that
          </p>
          <h1 className="font-playfair text-[20px] lg:text-[30px] font-bold text-coffee text-center">
            Get Started today.
          </h1>

          <div className="flex mx-auto">
            <div className="mx-auto">
              <Button text={'Join Us'} width={'100px'} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProdcutComponent;
