import { AiOutlineUser } from 'react-icons/ai';

const userBadge = () => {
  const { pathname } = window.location;

  return (
    <div className="flex justify-center items-center gap-2 border p-3 rounded-xl hover:opacity-50 cursor-pointer">
      <div className="flex justify-center items-center">
        <p
          className={`${
            pathname === '/' ? 'text-white' : 'text-coffee'
          } text-[20px] relative`}
        >
          <AiOutlineUser />
        </p>
      </div>

      <p className="text-white font-poppins">Vikriagung7</p>
    </div>
  );
};

export default userBadge;
