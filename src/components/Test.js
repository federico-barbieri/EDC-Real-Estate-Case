import { useContext } from "react";
import { SellerContext, UpdateContext } from "../../context/sellerContext";


function Test() {
    const selectedBuyers = useContext(SellerContext);
    const setSelectedBuyers = useContext(UpdateContext);

  return (
    <div>
        <span>Here is context: {selectedBuyers}</span>
        <button onClick={() => setSelectedBuyers(old => old + 1)}>
            Click me
        </button>
    </div>
  )
}

export default Test