import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppHeroData , setUserData , setCatagorysData , setBestSellingProductsData , setSpecialOffersDiscountsData , setProductData , setTotalUserData } from "../Redux/slices/dataFromServer";
import axios from "axios";





const Promis = () => {
    const dispatch = useDispatch();
    try {
        
        useEffect(()=>{

            (async()=>{
                // Get user data
                axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/user`,{withCredentials:true})
                .then( res => dispatch(setUserData(res.data.data)))
                .catch(err => dispatch(setUserData({
                    name: "...",
                    email: "...",
                    number: "...",
                    city: "...",
                    thana: "...",
                    area: "...",
                    location: "...",
                    cart: [],
                    orders: [],
                    wishlist: [],
                    userType: undefined,
                })))
    
                // get the hero section data
                axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/user/hero`,{withCredentials:true})
                .then( res => dispatch(setAppHeroData(res.data.data)))
                .catch(err => console.log(err))

                // get all users for the admin
                axios.get(`${import.meta.env.VITE_REACT_SERVER_API}/admin/users`,{withCredentials:true})
                .then( res => dispatch(setTotalUserData(res.data)))
                .catch(err => console.log(err))
                        

            })();
        
            },[])
        
    } catch (error) {
        console.error(error)
        dispatch(setAppData(false))
    }



    return undefined
}
export default Promis;