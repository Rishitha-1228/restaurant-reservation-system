import { useEffect,useState }
from "react";

import API
from "../services/api";

function AdminDashboard(){

 const [
 reservations,
 setReservations
 ] =
 useState([]);

 useEffect(()=>{

  API.get(
   "/reservations"
  )
  .then(res =>
   setReservations(
    res.data
   )
  );

 },[]);

 return(

  <div>

   <h1>
    Admin Dashboard
   </h1>

   {
    reservations.map(
     item => (

      <div
       key={item._id}
      >

       <h3>
        {item.name}
       </h3>

      </div>

     )
    )
   }

  </div>

 );

}

export default AdminDashboard;