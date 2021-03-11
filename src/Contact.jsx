import React from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const Contact =() =>{
    const noBorder = {
        borderStyle:'none',
        backgroundColor: 'navy',
        
    }
    return(
        <>
       <div className="container-fluid text-light mt-5 p-5" style={noBorder}>
    
       <div className="container row ml-5">
        <h1>Newsletter</h1>
        <p>THE MORTGAGE CLIENT NEWSLETTER YOU'VE BEEN WAITING FOR Stand out from the pack, 
        every quarter, with the most advanced mortgage client newsletter solution in the industry. 
        Incredibly customizable. Great looking. Packed with serious mortgage insights.</p>
           <div className="card col-lg-4 col-md-4 col-12 text-light" style={noBorder}>
            <h3>Contact us</h3>
            <address>
            <LocationOnIcon/> {""}
            VAS Mortgage LLC<br/>
            153 Farmers Folly Dr<br/>
            Mooresville, NC 28117<br/>
            United State<br/>
            </address>
            <span><EmailIcon/>  adalal@vasmortgage.com</span><br/>
            <span><PhoneIcon/>  +1 252-548-9770</span><br/>
            <a href="" className="text-light"><FacebookIcon/></a>
            <a href="" className="text-light"><TwitterIcon/></a>
            <a href="" className="text-light"><LinkedInIcon/></a>
                </div>
           <div className="card col-lg-4 col-md-4 col-12 text-light" style={noBorder}>
           <h3>About</h3>
           <ul>
               <li>Purchase & Refinance</li>
               <li>First Time Home Buyers</li>
               <li>New Construction Loans</li>
               <li>Home Improvement & Rehab Loans</li>
               <li>Second Homes & Investment Properties</li>
               <li>Single Family & Multi Unit Condos</li>

           </ul>
            </div>
           <div className="card col-lg-4 col-md-4 col-12" style={noBorder}>
           <h3>Disclaimers</h3>
           <ul>
               <li>Legal</li>
               <li>Privacy Policy</li>
           </ul></div>

       </div>
       </div>
        </>
    );
}

export default Contact;
