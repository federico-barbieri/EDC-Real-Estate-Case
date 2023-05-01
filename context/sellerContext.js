import { createContext, useState } from "react";

export const SellerContext = createContext();
export const UpdateContext = createContext();


const myGlobalValue = null;

export const SellerProvider = ({children}) => {
    const [sellerInfo, setSellerInfo] = useState(myGlobalValue)
    return (
        <SellerContext.Provider value={sellerInfo}>
            <UpdateContext.Provider value={setSellerInfo}>
            {children}
            </UpdateContext.Provider>
        </SellerContext.Provider>
    )
}