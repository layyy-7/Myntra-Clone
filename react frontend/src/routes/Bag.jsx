import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";
import {useSelector} from "react-redux";

function Bag() 
{
    let items=useSelector(state=>state.items);
    let bag=useSelector(state=>state.bag);

    let finalItems=items.filter(item=>
    {
        let itemIndex=bag.indexOf(item.id);
        return itemIndex>=0;
    });

    return (
        <main>
          <div className="bag-page">
            <div className="bag-items-container">
                {finalItems.map(item=><BagItem item={item}></BagItem>)}
            </div>
            <BagSummary></BagSummary>
          </div>
        </main>
    )
}

export default Bag;