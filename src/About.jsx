import React from 'react';


const About =() => {
    return <><br/><br/><br/><br/><br/>
    <div className="container mt-5">
   
   
    <div className="row ">
        <div className= "col-lg-6 col-md-6 col-12">
            <img className= "img-fluid" src={"house.jpg"} alt="loan image" />
        </div>
        <div className= "col-lg-6 col-md-6 col-12 pl-5  ">
            <h1 className=" ">YOUR JOURNEY BEGINS WITH US!</h1>
            <p className= " pt-5 pb-5 "> Lowest mortgage rates<br/>
                Efficient and Faster Closing Process<br/>
                A Team available anytime to serve your mortgage needs<br/>
                Personalized customer service<br/>
            </p>
            <button class="btn btn-primary" type="submit">Get A Quote</button>
        </div>
        <div className= "row pt-5 ">
            <div className= "col-lg-6 col-md-6 col-12 pt-5">
            <h1 className="text-center">About Us</h1><hr className= " w-25 mx-auto" />
            <p className="text-justify">
                At VAS Mortgage LLC we are committed to helping families 
                and individuals achieve the dream of home ownership. 
                We will help you answer all of your questions about 
                exactly what to expect when you get a mortgage with us. 
                We strive to provide you a very pleasant experience with our team.

                For us your satisfaction comes first. So expect that we have a team 
                behind that cares about you. We will communicate in the best way that’s 
                comfortable for you, providing timely updates about the progress of your loan.
            </p>

            </div>
            <div className= "col-lg-6 col-md-6 col-12 pt-5">
            <img src ="house2.jpg" className= "img-fluid"/>

            </div>
        </div>
    </div>



    </div>
    </>
    
}

export default About;