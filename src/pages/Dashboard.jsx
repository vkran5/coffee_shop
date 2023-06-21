import Button from 'components/Common/Button';
import EditProductModal from 'components/Dashboard/EditProductModal';
import Sidebar from 'components/Dashboard/Sidebar';
import { useEffect, useState } from 'react';
import supabase from 'config/supabaseClient';
import ProductTable from 'components/Dashboard/ProductTable';
import DeleteProductModal from 'components/Dashboard/DeleteProductModal';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isAddProduct, setAddIsProduct] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editProductData, setEditProductData] = useState([]);

  const getProduct = async () => {
    try {
      let { data: products, error } = await supabase
        .from('products')
        .select('*');

      setProducts(products);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Helmet
        title={'BEAN SCENE | Dashboard'}
        description={'Admin Dashboard'}
        type={'website'}
      />
      {isEdit && (
        <EditProductModal
          product={editProductData}
          setModal={setIsEdit}
          getData={getProduct}
        />
      )}

      {isDelete && (
        <DeleteProductModal
          product={editProductData}
          setModal={setIsDelete}
          getData={getProduct}
        />
      )}
      <div className='w-full h-screen flex'>
        <div className='max-w-full lg:w-[1280px] h-screen mx-auto flex justify-between'>
          <Sidebar />

          {/* Inventory */}
          <div className='lg:border w-[550px] lg:w-[1000px] lg:rounded-md p-5'>
            <div className='flex justify-between items-center'>
              <h1 className='font-poppins text-[20px] lg:text-[28px] font-bold'>
                Product Inventory
              </h1>
              <Button text='Add Product' width='150px' height='48px' />
            </div>

            <div className='flex flex-col items-center'>
              <table className='table-auto w-[500px] lg:w-[950px]'>
                <thead className='bg-yellow border border-yellow'>
                  <tr>
                    <th className='text-start font-poppins p-2 text-[12px] lg:text-[16px]'>
                      Product Name
                    </th>
                    <th className='text-start font-poppins p-2 text-[12px] lg:text-[16px]'>
                      Composition
                    </th>
                    <th className='text-start font-poppins p-2 text-[12px] lg:text-[16px]'>
                      Price ($)
                    </th>
                    <th className='text-start font-poppins p-2 text-[12px] lg:text-[16px]'>
                      Stock
                    </th>
                    <th className='text-start font-poppins p-2 text-[12px] lg:text-[16px]'>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((val) => {
                    return (
                      <ProductTable
                        product={val}
                        setIsEdit={setIsEdit}
                        setEditProductData={setEditProductData}
                        setIsDelete={setIsDelete}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
