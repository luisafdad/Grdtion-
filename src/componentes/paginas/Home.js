import React from "react";
import HomeForm from "../forms/HomeForm";
import Navbar from "../navegacion/Navbar";



const Home = ({ token }) =>{
    console.log('token',token);
    console.log(token  ? token.role : '');
    return(
       <div>
        
           <Navbar role = { token ? token.role : '' } />
           <HomeForm/>
           
        </div>

    );


}

export default Home;