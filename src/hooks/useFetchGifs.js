import { useState, useEffect } from 'react';
import getGif from '../helpers/getGifs';

import PropTypes from 'prop-types';

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((imgs) => {
      setTimeout(() => {
        console.log(imgs);
        setstate({
          data: imgs,
          loading: false,
        });
      }, 1000);
    });
  }, [category]);

  return state;
};

useFetchGifs.propTypes = {
  category: PropTypes.string.isRequired,
};
