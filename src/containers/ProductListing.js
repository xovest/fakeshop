import React, { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

export default function ProductListing() {
  const products = useSelector(state => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const res = await axios
      .get('https://fakestoreapi.com/products')
      .catch(err => {
      console.log("Err", err);
    });
    dispatch(setProducts(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}
