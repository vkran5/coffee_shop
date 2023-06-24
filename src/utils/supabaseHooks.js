import supabase from 'config/supabaseClient';
import { useEffect, useState } from 'react';

// Parameter is an object like :

// {
//     page : 1,
//     limit: 10,
// }

export const useSupabaseFetch = ({ page, limit }) => {
  const [data, setData] = useState(undefined);
  const [error, setError] = useState('');

  const bottom_index = page === 1 ? 0 : (page - 1) * limit;
  const top_index = page * limit - 1;

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .range(bottom_index, top_index);

      if (error) setError(error);
      else setData(data);
    } catch (err) {
      if (err) setError(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error };
};
