import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";
import "./Contact.css";

export default function ContactDetails() {
  return (
    <>
      <div className="container-one" style={{ paddingTop: "3%" }}>
        <div className="contact-head">
          <span className="head-1">Get In Touch With Us</span>
          <span className="head-2">
            For More Information About Our Product & Services. Please Feel Free
            To Drop Us <br />{" "}
            <span>
              An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </span>{" "}
          </span>
        </div>
        <br />
        <br />
        <div className="contact-description">
          <div className="apw-header">
            <div className="desc-part">
              <div className="desc-iocn">
                <FaLocationDot
                  style={{
                    color: "#000000",
                    width: "18%",
                    height: "20%",
                    marginTop: "5%",
                    marginRight: "10%",
                  }}
                />
              </div>
              <br />
              <br />
              <div className="desc-desc">
                <span className="desc-desc-content">
                  Address
                  <br />
                </span>
                <span className="desc-address">
                  236 5th SE Avenue, New
                  <br /> York NY10000, United
                  <br />
                  States
                </span>
              </div>
            </div>
            <br />
            <br />

            <div className="desc-part">
              <div className="desc-iocn">
                <FaPhoneAlt
                  style={{
                    color: "#000000",
                    width: "18%",
                    height: "20%",
                    marginTop: "5%",
                    marginRight: "10%",
                  }}
                />
              </div>

              <div className="desc-desc">
                <span className="desc-desc-content">
                  Phone
                  <br />
                </span>
                <span className="desc-address">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </span>
              </div>
            </div>
            <br />
            <br />
            <div className="desc-part">
              <div className="desc-iocn">
                <BsFillClockFill
                  style={{
                    color: "#000000",
                    width: "18%",
                    height: "20%",
                    marginTop: "5%",
                    marginRight: "10%",
                  }}
                />
              </div>

              <div className="desc-desc">
                <span className="desc-desc-content">
                  Working Time
                  <br />
                </span>
                <span className="desc-address">
                  Monday-Friday: 9:00 - 22:00
                  <br />
                  22:00
                  <br />
                  Saturday-Sunday: 9:00 -
                  <br />
                  21:00
                </span>
              </div>
            </div>
          </div>
          <div className="nas-header">
            <div className="input-fields">
              <div className="inputs">
                <span>Your Name </span>
                <input className="input-text" placeholder="Abc"></input>
              </div>

              <div className="inputs">
                <span>Email address </span>
                <input className="input-text" placeholder="Abc"></input>
              </div>

              <div className="inputs">
                <span>Subject </span>
                <input className="input-text" placeholder="Abc"></input>
              </div>
              <div className="inputs">
                <span>Message </span>
                <input className="input-text" placeholder="Abc"></input>
              </div>
            </div>
            <br />
            <br />
            <div className="input-button">
              <div className="input-button-inner">
                {" "}
                <button>Submit</button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
