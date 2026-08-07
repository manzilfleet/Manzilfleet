import React, { Component } from 'react'
import brand from '../Assets/Manzil-imgs/Forfooterimg.jpeg'
import '../Styles/OneFooter.css'
import FB from '../Assets/iconimg/icon-img/FB.png'
import Tweet from '../Assets/iconimg/icon-img/tweeter.png'
import insta from '../Assets/iconimg/icon-img/insta.png'
import linkdin from '../Assets/iconimg/icon-img/linkdin.png'
 
class footer extends Component {
  render() {
    return (
      <>
        <div className='container-fluid background  '>         
          <div style={{width:'100%',height:'auto'}} className='background'>
           <div style={{width:'100%'}}  className='m-auto'>
               
              <div className='contact d-flex justify-content-around'>
                <div>
                  <div className='calling-logo text-white text-left'>
                    <ion-icon name="call-outline"></ion-icon>
                  </div>
                  <p className='text-white text-left'>Call Agent <br />
                  +91 - 7869755316
                  </p>
                </div>
                <div>
                  <div className='calling-logo text-white text-left'>
                    <ion-icon name="mail-outline"></ion-icon>
                  </div>
                  <p className='text-white text-left'>Send Email <br />
                  manzilfleet@Gmail.com
                  </p>
                </div>
                <div>
                  <div className='calling-logo text-white text-left'>
                    <ion-icon name="time-outline"></ion-icon>
                  </div>
                  <p className='text-white text-left'>Opening Time <br />
                  Mon to Fri: 8am-7pm
                  </p>
                </div>
              </div>

              <div  style={{width:'100%'}}  className=' border-top p-4  m-auto'>
              </div>     
            </div>
             <div style={{width:'90%'}} className='p-5 m-auto'>
                <div className='d-flex justify-content-between flex-wrap'>
                     <div className='m-2 pr-5'>
                        <div className=''>
                            <img style={{width:'20rem',borderRadius:'1rem'}} src={brand} alt="imges" />
                        </div>
                        <div className=''>
                        <p style={{fontSize:'0.9rem'}} className='text-white mt-4 text-left'>MANZIL FLEET PRIVATE LIMITED is ready to assist you..</p>
                        <p className='text-white text-left location-icon'>
                        <span style={{fontSize:'1.4rem'}}>
                          <ion-icon name="location-outline"></ion-icon>
                          </span>
                          B - 904, Rudraksh Kasturi,
                          Salaiya, Bawadiya Kalan, Bhopal,
                          Madhya Pradesh 462047
                        </p> 
                        </div>
                        <div className='d-flex justify-content-between'>
                        <img className='m-1' style={{width:'2rem'}} src={FB} alt="imges" />
                        <img className='m-1' style={{width:'2rem'}} src={Tweet} alt="imges" />
                        <img className='m-1' style={{width:'2rem'}} src={insta} alt="imges" />
                        <img className='m-1' style={{width:'2rem'}} src={linkdin} alt="imges" />
              </div>
                     </div>
                     <div className='m-2'>
                      <h4 className='text-white text-left line-H '>Destinations</h4>
                      
                      <div  className='text-white text-left '>
                        <div className='footer-menu-list '>
                         <div class="navbar">
                        <div class="dropdown">
                          <p href="#">South East Asian Countries ▾</p>

                          <div class="dropdown-menu">
                            <p href="#">Vietnam</p>
                            <p href="#">Indonesia</p>
                            <p href="#">Singapore</p>
                            <p href="#">Malaysia</p>
                            <p href="#">Thailand</p>
                            <p href="#">Philipines</p>
                            <p href="#">Cambodia</p>
                          </div>
                        </div>
                         </div>
                      <div class="navbar">
                        <div class="dropdown">
                          <p href="#">CIS Countries ▾</p>

                          <div class="dropdown-menu">
                            <p href="#">Georgia</p>
                            <p href="#">Kazakhstan</p>
                            <p href="#">Uzbekistan</p>
                            <p href="#">Armenia</p>
                            <p href="#">Azerbaijan</p>
                          </div>
                        </div>
                      </div>
                      <div class="navbar">
                        <div class="dropdown">
                          <p href="#">The Ideal wish-list ▾</p>

                          <div class="dropdown-menu">
                            <p href="#">Europe</p>
                            <p href="#">Maldives</p>
                            <p href="#">Seychelles</p>
                            <p href="#">Mauritius</p>
                            <p href="#">Sri Lanka</p>
                            <p href="#">Japan</p>
                          </div>
                        </div>
                      </div>
                      <div class="navbar">
                        <div class="dropdown">
                          <p href="#">Domestic Travel Packages ▾</p>

                          <div class="dropdown-menu">
                            <p href="#">Historical & Cultural</p>
                            <p href="#">Beach Destinations</p>
                            <p href="#">Hill Stations</p>
                            <p href="#">Nature & Unique</p>
      
                          </div>
                        </div>
                      </div>
                      </div>
                      </div>
          
                     </div>
                     <div className='m-2 pr-5'>
                      <h4 className='text-white text-left'>Useful links</h4>
                        <ul className="line-H">
                        <li className='text-white text-left '>About Us
                        </li>
                        <li className='text-white text-left '
                        >Careers
                        </li>
                        <li className='text-white text-left '
                        >Help
                        </li>
                        <li className='text-white text-left '
                        >Contact Us
                        </li >
                        <li className='text-white text-left '
                        >Fee Policy
                        </li>
                        <li className='text-white text-left '
                        >Privacy Policy
                        </li>
                        <li className='text-white text-left '
                        >Member's Agreement
                        </li>
                        <li className='text-white text-left '
                        >Terms and Conditions
                        </li>
                        </ul>
                     </div>
                </div>
             </div>
              
          </div>
        </div>
      </>
    )
  }
}

export default footer