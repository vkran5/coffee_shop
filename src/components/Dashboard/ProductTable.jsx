import { BiEditAlt, BiEraser } from 'react-icons/bi';

const ProductTable = ({
  product,
  setIsEdit,
  setEditProductData,
  setIsDelete,
}) => {
  return (
    <tr>
      <td className='p-2 border text-[12px] lg:text-[16px]'>{product.name}</td>
      <td className='p-2 border text-[12px] lg:text-[16px]'>
        {product.coffee_composition}% Coffee | {product.milk_composition}% Milk
      </td>
      <td className='p-2 border text-[12px] lg:text-[16px]'>{product.price}</td>
      <td className='p-2 border text-[12px] lg:text-[16px]'>{product.stock}</td>
      <td className='p-2 border text-[12px] lg:text-[16px]'>
        <div className='flex justify-center gap-2'>
          <div
            onClick={() => {
              setIsEdit(true);
              setEditProductData(product);
            }}
            className='bg-yellow rounded-md p-1 hover:brightness-90 cursor-pointer'
          >
            <BiEditAlt />
          </div>

          <div
            onClick={() => {
              setIsDelete(true);
              setEditProductData(product);
            }}
            className='bg-red-400 rounded-md p-1 hover:brightness-90 cursor-pointer'
          >
            <BiEraser />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default ProductTable;
