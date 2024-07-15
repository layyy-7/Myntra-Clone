import { useSelector } from "react-redux";

function BagSummary()
{
    let items=useSelector(state=>state.items);
    let bag=useSelector(state=>state.bag);

    let finalItems=items.filter(item=>
    {
        let itemIndex=bag.indexOf(item.id);
        return itemIndex>=0;
    });

    let totalItem=bag.length;
    let totalMRP=0;
    let totalDiscount=0;
    let CONVENIENCE_FEE=99;

    finalItems.forEach(item=>
    {
        totalMRP+=item.original_price;
        totalDiscount+=item.original_price-item.current_price;
    });

    let finalPayment=totalMRP-totalDiscount+CONVENIENCE_FEE;

    return (
        <div className="bag-summary">
            <div className="bag-details-container">
              <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
              <div className="price-item">
                <span className="price-item-tag">Total MRP</span>
                <span className="price-item-value">₹{totalMRP}</span>
              </div>
              <div className="price-item">
                <span className="price-item-tag">Discount on MRP</span>
                <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
              </div>
              <div className="price-item">
                <span className="price-item-tag">Convenience Fee</span>
                <span className="price-item-value">₹{CONVENIENCE_FEE}</span>
              </div>
              <hr/>
              <div className="price-footer">
                <span className="price-item-tag">Total Amount</span>
                <span className="price-item-value">₹{finalPayment}</span>
              </div>
            </div>
            <button className="btn-place-order">
              <div className="css-xjhrni">PLACE ORDER</div>
            </button>
        </div>
    );
}

export default BagSummary;