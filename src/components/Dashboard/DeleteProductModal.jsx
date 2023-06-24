import { AiOutlineClose } from 'react-icons/ai';
import supabase from 'config/supabaseClient';

const DeleteProductModal = ({ product, fetchData, close }) => {
  const onSubmit = async (datum) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', datum.id);

      if (error) {
        console.log(error);
      } else {
        fetchData();
        close();
      }

      console.log('ini data', datum);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className='fixed z-10 h-screen w-full backdrop-blur-sm'>
      <div className='fixed left-1/2 top-1/3 flex h-screen w-screen -translate-x-1/2 -translate-y-1/2 transform flex-col justify-start border bg-white p-4 shadow-lg md:h-[400px] md:w-[504px] md:rounded-2xl md:px-10'>
        <div className='relative left-[320px] z-40 cursor-pointer md:left-[415px] md:top-[5px]'>
          <p onClick={close} className='text-[20px] '>
            <AiOutlineClose />
          </p>
        </div>

        <div className='flex flex-col items-center justify-center gap-3'>
          <h1 className='relative bottom-2 font-poppins'>Delete Product</h1>

          <p className='pt-5 font-poppins text-[20px]'>
            Deleted product can not be undone.
          </p>
          <p className='font-poppins'>Want to delete {product.name} ?</p>

          <div className='flex gap-5 pt-5'>
            <button
              onClick={() => {
                onSubmit(product);
              }}
              className='text-poppins w-[100px] rounded-xl border bg-red-600 text-white hover:brightness-90'
            >
              Yes
            </button>
            <button
              onClick={() => {
                setModal(false);
              }}
              className='text-poppins w-[100px] rounded-xl border bg-slate-400 text-white hover:brightness-90'
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProductModal;
