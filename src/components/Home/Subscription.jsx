const Subscription = () => {
  return (
    <section className="w-screen h-[374px] bg-subscription flex">
      <div className="w-3/4 mx-auto flex flex-col justify-center items-center">
        <div className=" mx-auto ">
          <h1 className="text-[32px] lg:text-[54px] text-center font-playfair text-white">
            Subscribe to get the Latest News
          </h1>

          <p className="lg:text-[20px] text-center font-playfair text-white">
            Don’t miss out on our latest news, updates, tips and special offers
          </p>
        </div>

        <div className="flex mt-10">
          <input
            className="h-[50px] lg:h-[66px] w-[200px] lg:w-[642px] p-5"
            type="text"
            placeholder="Insert your email here"
          />
          <button className="h-[50px] lg:h-[66px] w-[137px] rounded-none bg-yellow font-playfair font-semibold lg:text-[22px] hover:brightness-90">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
