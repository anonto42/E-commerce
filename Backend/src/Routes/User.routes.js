import { Router } from "express";
import { bestSellingProduct, catagorys, Heros, hotItem, login , logout, register, specialOffers, updateUserProfile, userProfile } from "../Controller/User.controller.js";
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
userRoute.route("/catagorys").get( catagorys )


export default userRoute;