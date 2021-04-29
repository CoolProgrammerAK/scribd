import React, { Component } from "react";
import "./footer.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import Appstore from "../../assets/logo/appstore_white.svg";
import Playstore from "../../assets/logo/playstore.svg";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footerContainer">
          <div className="footerTop">
            <div className="footerTopBox">
              <h4 className="footerTopHeading">About</h4>
              <div className="footerTopTextBox">
                <p className="footerTopText"> About Scribd</p>
                <p className="footerTopText"> Press</p>
                <p className="footerTopText"> Our blog</p>
                <p className="footerTopText"> Join our team!</p>
                <p className="footerTopText"> Contact us</p>
                <p className="footerTopText"> Invite friends</p>
                <p className="footerTopText"> Gifts</p>
                <p className="footerTopText"> Scribd for enterprise</p>
              </div>
            </div>
            <div className="footerTopBox">
              <h4 className="footerTopHeading">Support</h4>
              <div className="footerTopTextBox">
                <p className="footerTopText"> Help / FAQ</p>

                <p className="footerTopText">Accessibility</p>
                <p className="footerTopText"> Purchase help</p>
                <p className="footerTopText"> AdChoices</p>
                <p className="footerTopText"> Publishers</p>
              </div>
            </div>
            <div className="footerTopBox">
              <h4 className="footerTopHeading">Legal</h4>
              <div className="footerTopTextBox">
                <p className="footerTopText"> Terms</p>
                <p className="footerTopText"> Privacy</p>
                <p className="footerTopText"> Copyright</p>
              </div>
            </div>

            <div className="footerTopBox">
              <h4 className="footerTopHeading">Social</h4>
              <div className="footerTopTextBox">
                <div className="footerIconBox">
                  <InstagramIcon className="footerIcon"></InstagramIcon>
                  <span className="footerTopTextIcon"> &emsp;Instagram</span>
                </div>
                <div className="footerIconBox">
                  {" "}
                  <TwitterIcon className="footerIcon"> </TwitterIcon>
                  <span className="footerTopTextIcon">&emsp; Twitter</span>
                </div>
                <div className="footerIconBox">
                  {" "}
                  <FacebookIcon className="footerIcon"></FacebookIcon>
                  <span className="footerTopTextIcon">&emsp; Facebook</span>
                </div>
                <div className="footerIconBox">
                  <PinterestIcon className="footerIcon"></PinterestIcon>
                  <span className="footerTopTextIcon">&emsp; Pininterest</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="footerTopHeading">Get our free apps</h4>
              <div className="footerTopBox">
                <img className="footerImg" src={Appstore}></img>
                <img className="footerImg" src={Playstore}></img>
              </div>
            </div>
          </div>
          <div className="footerBottom">
            <hr />

            <div className="footerBottomBox">
              <div className="footerBottomRow">
                <ul className="footerList">
                  <li className="footerListText"> Books</li> <li className="footerListText"> Audiobooks</li>
                  <li className="footerListText">Magazines</li>
                  <li className="footerListText">Podcasts</li>
                  <li className="footerListText"> Sheet Music</li> <li className="footerListText"> Documents</li>
                  <li className="footerListText">Snapshots</li>
                  <li className="footerListText">Directory</li>
                </ul>
                <div className="footerCopyright">
                    <div className="footerRightMargin"><span className="footerListTextB">Language:</span><span className="footerListTextDark">&emsp;English</span></div>
                    <div className="footerListTextB"> Copyright © 2021 Scribd Inc.</div>

                </div>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
