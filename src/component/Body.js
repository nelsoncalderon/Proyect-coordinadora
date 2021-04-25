import React, {useState,useEffect} from 'react';


   const Body  = () => {
      //contador  

      const [status, setStatus] = React.useState([])
   

    const url ='https://us-central1-cm-devops-294019.cloudfunctions.net/status'; 
      useEffect(() => {
        obtenerdatos()
      }, []);

      const obtenerdatos = async ( ) => {
         const data = await fetch(url)
         const  stats = await data.json()
         console.log(stats)
         setStatus(status)
      }
  
      return (

         <div className="content-body">
          <div className="content-title">
             <p className="text1">Uptime &nbsp;:</p><p className="text2"> &nbsp;Last 30 days</p>
          </div>


          <div className="content-tableprincipal">
        

          <div className="content-table1">
          <p className="text-1">Sigo APP</p><p className="text-2"><span className="dot2"></span>&nbsp;Up</p>
          </div>

          <div className="content-porcentaje">
         
          <span className="porcentaje">&nbsp;</span>
          <span className="porcentaje">&nbsp;</span>
          <span className="porcentaje">&nbsp;</span>
     
          </div>

          <div className="content-table1">
          <p className="text-2">98%</p><p className="text-2">Today</p>
          </div>

          <hr></hr>

          <div className="content-table1">
          <p className="text-1">Tranking</p><p className="text-2"><span className="dot2"></span>&nbsp;Up</p>
          </div>

          <div className="content-porcentaje">
          <span className="porcentaje">&nbsp;</span>
          <span className="porcentaje">&nbsp;</span>
          </div>

          <div className="content-table1">
          <p className="text-2">100%</p><p className="text-2">Today</p>
          </div>

         </div>


         </div>
        );
 
    }

    export default Body ;