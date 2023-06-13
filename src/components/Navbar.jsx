import Button from './Button';

const Navbar = () => {
  const { pathname } = window.location;

  return (
    <div
      className={` ${
        pathname === '/' ? 'absolute bg-transparent' : 'bg-white'
      } w-screen h-[100px] flex items-center`}
    >
      <div className="w-3/4 mx-auto flex justify-between">
        <div
          className={`${
            pathname === '/' ? 'text-white' : ''
          } font-clicker text-[35px] `}
        >
          Bean Scene
        </div>

        <div className=" w-2/5 flex justify-between items-center">
          <p className="font-playfair text-white">Home</p>
          <p className="font-playfair text-white">Menu</p>
          <p className="font-playfair text-white">About Us</p>
          <p className="font-playfair text-white">contact Us</p>
        </div>

        <div className="flex items-center gap-10">
          <button className="text-white font-playfair">Sign In</button>
          <Button text={'Sign Up'} height={'48px'} width={'100px'} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
