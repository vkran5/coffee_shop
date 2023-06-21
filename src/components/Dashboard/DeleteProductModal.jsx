import { AiOutlineClose } from 'react-icons/ai';
import supabase from 'config/supabaseClient';

const DeleteProductModal = ({ product, setModal, getData }) => {
  const onSubmit = async (datum) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', datum.id);

      if (error) {
        console.log(error);
      } else {
        getData();
        setModal(false);
      }

      console.log('ini data', datum);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{ animation: 'pop-modal .3s' }}
      className='w-full h-screen backdrop-blur-sm fixed z-10'
    >
      <div className='flex flex-col w-screen md:w-[504px] h-screen md:h-[400px] justify-start p-4 md:px-10 border md:rounded-2xl fixed bg-white shadow-lg top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <div className='relative left-[320px] md:left-[415px] md:top-[5px] cursor-pointer z-40'>
          <p
            onClick={() => {
              setModal(false);
            }}
            className='text-[20px] '
          >
            <AiOutlineClose />
          </p>
        </div>

        <div className='flex flex-col items-center gap-3 justify-center'>
          <h1 className='font-poppins relative bottom-2'>Delete Product</h1>

          <p className='font-poppins text-[20px] pt-5'>
            Deleted product can not be undone.
          </p>
          <p className='font-poppins'>Want to delete {product.name} ?</p>

          <div className='flex gap-5 pt-5'>
            <button
              onClick={() => {
                onSubmit(product);
              }}
              className='border rounded-xl text-white text-poppins w-[100px] bg-red-600 hover:brightness-90'
            >
              Yes
            </button>
            <button
              onClick={() => {
                setModal(false);
              }}
              className='border rounded-xl text-white text-poppins w-[100px] bg-slate-400 hover:brightness-90'
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
