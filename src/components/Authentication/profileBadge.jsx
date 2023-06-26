import { AiOutlineUser } from 'react-icons/ai';

const ProfileBadge = ({ userEmail }) => {
  const { pathname } = window.location;

  return (
    <div className='flex cursor-pointer items-center justify-center gap-2 rounded-xl border p-3 hover:opacity-50 lg:w-[250px]'>
      <div className='flex items-center justify-center'>
        <p
          className={`${
            pathname === '/' ? 'text-white' : 'text-coffee'
          } relative text-[20px]`}
        >
          <AiOutlineUser />
        </p>
      </div>

      <p
        className={`${
          pathname === '/' && 'text-white'
        } hidden  font-poppins text-coffee lg:block`}
      >
        {userEmail}
      </p>
    </div>
  );
};

export default ProfileBadge;
