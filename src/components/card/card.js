import React,{useState} from "react";
import "./card.css";

import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice.js';

function Card(props){
  const { img, rating, title, price } = props;

    const [isAdded, setIsAdded] = useState(false);


    const dispatch = useDispatch();


    const handleAddToCart = () => {

        // here, we cannot directly pass the `props` as it is, if we need to access the same value within the child component. So, we've to pass it as a different prop like this- `{...props}`
        const item = { ...props };
        dispatch(addItem(item));

        setIsAdded(true);

        setTimeout(() => {
            setIsAdded(false);
        }, 3000);
    };

  return(
    <div class="card">
      <div class="card-header">
        <img src={img}/>
        <p class="rating">{rating}</p>
      </div>
      <div class="card-body title">
        {title}
        <p class="price">{price+" Rs"}</p>
      </div>
      <div class="card-footer price">
        <button class="btn" onClick={handleAddToCart}>{isAdded ? 'Added' : 'Add to cart'}</button>
      </div>
    </div>
  );
}
export default Card;
