import React from "react";
import "./blockChain.css";

const HeaderData = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8  ">
            <div className="card">
              <img src="images-8 1.png" alt="BLOCK_CHAIN" />
            </div>
          
            <div className="card p-3">
              <p className="font_about"> About this Event</p>
              <p className="font_detail">
              It’s the first summit to focus only on oracles – the piece of blockchain infrastructure that provides external data to smart contracts. Plus, many of blockchain’s most advanced use-cases rely on it, including DEXs, DAOs as well as Dynamic NFTs, Parametric Insurance, and anything that uses external data on-chain. In short, they have implications on most of blockchain’s most advanced use cases.

Moreso, every day a global brand announces the launch of its NFT or metaverse project. Basically ithout oracles, the real world would not be able to interact with the blockchain. With them, importance set to grow exponentially alongside blockchain’s use-cases, the time has come for leaders in the blockchain world to acknowledge and discuss the challenges, demands, and areas of interest in the oracle space today. BOS22 aims to do just that.
              </p>
            </div>
          
            </div>
          <div className="col-sm-4 ">
          <div className="card p-3">
              <p className="heading_event">Blockchain Oracle 
              <button className="like"><i class="fa-solid fa-heart"></i></button>
              Summit 2022 – Berlin</p>
            <div class="d-flex flex-row ">
            <div><i class="fa-solid fa-building" style={{color:"#20C0E8"}}></i></div>
            <div className="ps-2"><p className="font_design">Party Action People Pte, LTD</p></div>
            
            </div>

            <div class="d-flex flex-row ">
            <div><i class="fa-solid fa-calendar" style={{color:"#20C0E8"}}></i></div>
            <div className="ps-2"><p className="font_design">Sun 05 Jun 2022 | 7:00 PM</p></div>
            </div>

            <div class="d-flex flex-row ">
            <div><i class="fa-solid fa-location-pin" style={{color:"#20C0E8"}}></i></div>
            <div className="ps-2"><p className="font_design">Hotel Berlin, Berlin</p></div>
            </div>
            <p className="card_stepout">Step out and enjoy this event</p>
            <div className="ps-3">
            <button className="Btn_BuyNow">BUY NOW</button>
            </div>
          </div>

          <div className="card p-3">
              <p className="heading_speaker">Speakers</p>
            <div class="d-flex flex-row ">
            <div><img src="dzdfvds 1.png" class="rounded-circle" alt="Person_Image"/></div>
            <div className="p-2">
              <p className="font_text">jimcoo</p>
              <span className="font_usa">from USA</span>
            </div>
            
            </div>
 
          </div>

          <div className="card p-3">
              <p className="heading_Berlin">Berlin</p>
              <span className="heading_address">Hotel Berlin, Berlin</span>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9711.06264470914!2d13.385220766067498!3d52.51957985024158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851dfb9f6352d%3A0x18dd6c2f84e526b6!2sRadisson%20Collection%20Hotel%2C%20Berlin!5e0!3m2!1sen!2sin!4v1657187881625!5m2!1sen!2sin" ></iframe>
 
          </div>

          </div>
        </div>
        {/* footer */}
        <div class="card">
          <div class="card-body">
            <p className="font_footer">Do not miss any drop!<br />
             <span style={{color:"#20C0E8"}}> Subscribe to our newsletter </span> and get it before everyone</p>
            <span className="d-flex justify-content-center">
            <input type="email" id="email" placeholder="Your email address..." name="email" className="inputEmail"/>
            <button className="button_subscribe">Subscribe</button>
            </span>
            <p className="termscondition p-3">By signing up, you agree to the our terms and our Privacy Policy agreement</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderData;
