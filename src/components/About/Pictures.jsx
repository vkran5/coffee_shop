const Pictures = () => {
  return (
    <div className='flex justify-center gap-5 p-5'>
      <div className='flex gap-5 justify-center '>
        <div>
          <img
            className='w-[350px]'
            src='https://images.unsplash.com/photo-1597816760638-406d7271105c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
            alt=''
          />
        </div>

        <div className='flex flex-col gap-5 justify-center '>
          <img
            className='h-[250px]'
            src='https://images.unsplash.com/photo-1457414104202-9d4b4908f285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80'
            alt=''
          />
          <img
            className='h-[250px]'
            src='https://images.unsplash.com/photo-1552346988-bf70b50d3c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Pictures;
