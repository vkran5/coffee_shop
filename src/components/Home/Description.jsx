import beans from 'assets/beans.png';
import coffeBlast from 'assets/coffee_blast.png';

const Description = () => {
  return (
    <div className="w-screen">
      <div className="w-3/4 flex justify-between items-center mx-auto pt-20 pb-20">
        <div className="flex flex-col gap-5 w-1/2">
          <h2 className="font-playfair text-[54px] text-coffee font-semibold">
            Discover the best coffee
          </h2>

          <p className="font-playfair text-[20px] text-coffee">
            Bean Scene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and helps build your mood. Having
            a cup of coffee is good, but having a cup of real coffee is greater.
            There is no doubt that you will enjoy this coffee more than others
            you have ever tasted.
          </p>

          <button
            className={`bg-yellow rounded-3xl px-5 py-3 w-[134px] h-[48px] font-playfair hover:brightness-95 font-semibold`}
          >
            Learn More
          </button>
        </div>

        <img className="w-[500px]" src={beans} alt="bens/img" />
      </div>

      <img
        className="lg:absolute 2xl:top-[150vh] xl:top-[150vh] border"
        src={coffeBlast}
        alt="blast/img"
      />
    </div>
  );
};

export default Description;
