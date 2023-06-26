const Pictures = () => {
  return (
    <div className='flex flex-col-reverse  items-center p-5 md:my-10 md:flex-row md:justify-between'>
      <div className='justify-center gap-5 md:flex md:w-2/5'>
        <div>
          <img
            className='w-[200px] md:w-[280px]'
            src='https://images.unsplash.com/photo-1597816760638-406d7271105c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80'
            alt=''
          />
        </div>

        <div className='hidden flex-col justify-center gap-5 lg:flex '>
          <img
            className='h-[170px]'
            src='https://images.unsplash.com/photo-1457414104202-9d4b4908f285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1334&q=80'
            alt=''
          />
          <img
            className='h-[150px]'
            src='https://images.unsplash.com/photo-1552346988-bf70b50d3c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80'
            alt=''
          />
        </div>
      </div>

      <div className='flex items-center md:w-1/2'>
        <h1 className='text-center font-playfair text-[20px] md:text-start md:text-[42px]'>
          100% from local farmer <br />
          <span className='text-slate-500'>100% with love.</span>
        </h1>
      </div>
    </div>
  );
};

export default Pictures;
