import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Logo = () => {
    return (
        <>
        <nav className="navbar navbar-light bg-dark fixed-top"> 
            <a className="navbar-brand" href="#">
                <img src="Logo2.jpg" width="100" height="auto" alt=""/>
            </a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                
            </form>
            
            <button className="btn btn-outline-success my-2 my-sm-0 " > <AccountCircleIcon className= "fs-2" /> {""}LOGIN</button>
        </nav> 
              
        </>
    );
};
export default Logo;