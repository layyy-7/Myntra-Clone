import {useDispatch, useSelector} from "react-redux"
import bagSlice from "../store/bagSlice";

function HomeItem({item})
{
    let dispatch=useDispatch();
    let bag=useSelector(store=>store.bag);
    let elementFound=bag.indexOf(item.id);

    function handleAddToBag()
    {
        dispatch(bagSlice.actions.addToBag(item.id));
    }

    function handleRemoveFromBag()
    {
        dispatch(bagSlice.actions.removeFromBag(item.id));
    }

    return (
        <div className="item-container">
          <img className="item-image" src={item.image} alt="item image"/>
          <div className="rating">
              {item.rating.stars} ⭐ | {item.rating.count}
          </div>
          <div className="company-name">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">({item.discount_percentage}% OFF)</span>
          </div>

          {elementFound>=0?
          <button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemoveFromBag}>Remove From Bag</button>:
          <button type="button" className="btn btn-success btn-add-bag" onClick={handleAddToBag}>Add To Bag</button>}
        </div>
    )
}

export default HomeItem;