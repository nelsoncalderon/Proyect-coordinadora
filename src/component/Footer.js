import React, {Component} from 'react';

class Footer extends Component {
    render(){


        return (
            <div className="content-body">

            <div className="content-titlef">
               <p>OVERALL &nbsp; UPTIME </p>
            </div>


            <div className="content-footer">
          
             <div className="text-footer">
                    <p>100%</p> 
                    <p>Last 24 hours</p>
            </div>
            <span className="separador">''</span>
            
             <div className="text-footer">
                    <p>98.93%</p> 
                    <p>Last 7 day</p>
              
             </div >
             <span className="separador">''</span>

             <div className="text-footer">
                    <p>98.93%</p> 
                    <p>Last 30 days</p>
            </div>

           </div>


           </div>
   
        );
    }
}

export default Footer;