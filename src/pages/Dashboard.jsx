import Button from 'components/Common/Button';
import EditProductModal from 'components/Dashboard/EditProductModal';
import Sidebar from 'components/Dashboard/Sidebar';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductTable from 'components/Dashboard/ProductTable';
import DeleteProductModal from 'components/Dashboard/DeleteProductModal';
import { Helmet } from 'react-helmet';
import AddProductModal from 'components/Dashboard/AddProductModal';
import { useSupabaseFetch } from 'utils/supabaseHooks';
import { messageAnimation } from 'utils/animation';
import PopUpMassage from 'components/Common/PopUpMassage';
import { modalAnimation } from 'utils/animation';
import supabase from 'config/supabaseClient';

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isAddProduct, setAddIsProduct] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [editProductData, setEditProductData] = useState([]);
  const { data, error } = useSupabaseFetch({ page: 1, limit: 20 });

  useEffect(() => {
    if (data) setProducts(data);
  }, [data]);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setIsError(false);
      }, 3000);
    }
  }, [error]);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .range(0, 20);

      if (error) setIsError(true);
      else setProducts(data);

      console.log(data);
    } catch (err) {
      if (err) setIsError(true);
      console.log(err);
    }
  };

  return (
    <>
      <Helmet
        title={'BEAN SCENE | Dashboard'}
        description={'Admin Dashboard'}
        type={'website'}
      />

      <AnimatePresence>
        {isAddProduct && (
          <motion.div {...modalAnimation}>
            <AddProductModal
              fetchData={fetchData}
              close={() => {
                setAddIsProduct(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isEdit && (
          <motion.div {...modalAnimation}>
            <EditProductModal
              product={editProductData}
              fetchData={fetchData}
              close={() => {
                setIsEdit(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isDelete && (
          <motion.div {...modalAnimation}>
            <DeleteProductModal
              product={editProductData}
              fetchData={fetchData}
              close={() => {
                setIsDelete(false);
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isError && (
          <motion.div
            {...messageAnimation}
            onClick={() => {
              setIsError(false);
            }}
          >
            <PopUpMassage
              title='Something wrong is happened'
              description='Plese try later'
              type='error'
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className='flex h-screen w-full'>
        <div className='mx-auto flex h-screen max-w-full justify-between lg:w-[1280px]'>
          <Sidebar />

          {/* Inventory */}
          <div className='w-[550px] p-5 lg:w-[1000px] lg:rounded-md'>
            <div className='flex items-center justify-between'>
              <h1 className='font-poppins text-[20px] font-bold lg:text-[28px]'>
                Product Inventory
              </h1>
              <Button
                text='Add Product'
                width='150px'
                height='48px'
                func={() => {
                  setAddIsProduct(true);
                }}
              />
            </div>

            <div className='flex flex-col items-center'>
              <table className='w-[500px] table-auto lg:w-[950px]'>
                <thead className='border border-yellow bg-yellow'>
                  <tr>
                    <th className='p-2 text-start font-poppins text-[12px] lg:text-[16px]'>
                      Product Name
                    </th>
                    <th className='p-2 text-start font-poppins text-[12px] lg:text-[16px]'>
                      Composition
                    </th>
                    <th className='p-2 text-start font-poppins text-[12px] lg:text-[16px]'>
                      Price ($)
                    </th>
                    <th className='p-2 text-start font-poppins text-[12px] lg:text-[16px]'>
                      Stock
                    </th>
                    <th className='p-2 text-start font-poppins text-[12px] lg:text-[16px]'>
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((val, idx) => {
                    return (
                      <ProductTable
                        product={val}
                        setIsEdit={setIsEdit}
                        setEditProductData={setEditProductData}
                        setIsDelete={setIsDelete}
                        key={idx}
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
