import { Router } from "express";
import { ACart, AProduct, bestSellingProduct, catagorys, DCartItem, Heros, hotItem, login , logout, payOnline, order, register, specialOffers, updateUserProfile, userProfile, vesite, canseld, paied, faild } from "../Controller/User.controller.js";
import tokenCheck from "../Middleware/Aut.js";

const userRoute = Router();

// Authentication
userRoute.route("/register").post( register )
userRoute.route("/login").post( login )
// logout user profile
userRoute.route("/logout").delete( logout )
// Get user information
userRoute.route("/user").get( tokenCheck , userProfile )
// update user profile
userRoute.route("/update").put( tokenCheck , updateUserProfile )
// get hero information
userRoute.route("/hero").get( Heros );
// get Special offers products
userRoute.route("/special").get( specialOffers );
// get best Selling products
userRoute.route("/bestselling").get( bestSellingProduct );
// get Hot-Item
userRoute.route("/hotItem").get( hotItem );
// get all catagorys
userRoute.route("/catagorys").get( catagorys );
// get a product
userRoute.route("/product").post( AProduct );
// add to cart
userRoute.route("/cart").post( tokenCheck , ACart )
userRoute.route("/dcart").post( DCartItem );
// order product
userRoute.route("/order").post( tokenCheck , order );
// order with Bkash payment
userRoute.route("/onliepay").post( tokenCheck , payOnline );
// payed updated
userRoute.route("/payed").get( tokenCheck , paied );
// payed updated
userRoute.route("/cansled").get( tokenCheck , canseld );
// payed updated
userRoute.route("/failed").get( tokenCheck , faild );
// visitor
userRoute.route("/visitor").get( vesite );


export default userRoute;