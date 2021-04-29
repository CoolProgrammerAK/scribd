import React, { Component } from "react";
import "./Brand.css";
import forbes from "../../assets/brand/forbes.svg";
import today from "../../assets/brand/today.svg";
import wallstreet from "../../assets/brand/wallstreet.svg";
import techcrunch from "../../assets/brand/techcrunch.svg";
import los_angeles_times from "../../assets/brand/los_angeles_times.svg";
class Brand extends Component {
  render() {
    return (
      <div>
        <div className="brandContainer">
          <div className="brandTop">
            <h6 className="brandHeading">In the press</h6>
            <div className="brandImgBox">
              <div className="brandImg">
                <img src={techcrunch}></img>
              </div>
              <div className="brandImg">
                <img src={forbes}></img>
              </div>
              <div className="brandImg">
                <img src={wallstreet}></img>
              </div>
              <div className="brandImg">
                <img src={los_angeles_times}></img>
              </div>
              <div className="brandImg">
                <img src={today}></img>
              </div>
            </div>
          </div>
          <div className="brandBottom">
            <h4 className="brandTrendingHeading">Trending</h4>
            <div className="brandTrendingBox">
              <div className="brandLinkContainer">
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    It's Not Summer Without You
                  </span>
                  <br />
                  <span className="brandLinkBottom">Jenny Han</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The House We Grew Up In: A Novel
                  </span>    <br />
                  <span className="brandLinkBottom">Lisa Jewell</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    City of Lost Souls: The Mortal Instruments, Book Five
                  </span>    <br />
                  <span className="brandLinkBottom">Cassandra Clare</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">The Great Divorce</span>    <br />
                  <span className="brandLinkBottom">C. S. Lewis</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">Chicken Big</span>    <br />
                  <span className="brandLinkBottom">Keith Graves</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">Red Queen</span>    <br />
                  <span className="brandLinkBottom">Victoria Aveyard</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">Confess: A Novel</span>    <br />
                  <span className="brandLinkBottom">Colleen Hoover</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The Life-Changing Magic of Tidying Up: The Japanese Art of
                    Decluttering and Organizing
                  </span>    <br />
                  <span className="brandLinkBottom">Marie Kondo</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">The Three-Body Problem</span>    <br />
                  <span className="brandLinkBottom">Cixin Liu</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The Misadventures of Awkward Black Girl
                  </span>    <br />
                  <span className="brandLinkBottom">Issa Rae</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The Achievement Habit: Stop Wishing, Start Doing, and Take
                    Command of Your Life
                  </span>    <br />
                  <span className="brandLinkBottom">Bernard Roth</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The Baller: A Down and Dirty Football Novel
                  </span>    <br />
                  <span className="brandLinkBottom">Vi Keeland</span>{" "}
                </div>
              </div>
              <div className="brandLinkContainer">
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    It's Not Summer Without You
                  </span>    <br />
                  <span className="brandLinkBottom">Jenny Han</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The House We Grew Up In: A Novel
                  </span>    <br />
                  <span className="brandLinkBottom">Lisa Jewell</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    City of Lost Souls: The Mortal Instruments, Book Five
                  </span>    <br />
                  <span className="brandLinkBottom">Cassandra Clare</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">The Great Divorce</span>    <br />
                  <span className="brandLinkBottom">C. S. Lewis</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">Chicken Big</span>    <br />
                  <span className="brandLinkBottom">Keith Graves</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">Red Queen</span>    <br />
                  <span className="brandLinkBottom">Victoria Aveyard</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">Confess: A Novel</span>    <br />
                  <span className="brandLinkBottom">Colleen Hoover</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The Life-Changing Magic of Tidying Up: The Japanese Art of
                    Decluttering and Organizing
                  </span>    <br />
                  <span className="brandLinkBottom">Marie Kondo</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">The Three-Body Problem</span>    <br />
                  <span className="brandLinkBottom">Cixin Liu</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The Misadventures of Awkward Black Girl
                  </span>    <br />
                  <span className="brandLinkBottom">Issa Rae</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The Achievement Habit: Stop Wishing, Start Doing, and Take
                    Command of Your Life
                  </span>    <br />
                  <span className="brandLinkBottom">Bernard Roth</span>{" "}
                </div>
                <div className="brandLinkBox">
                  <span className="brandLinkTop">
                    The Baller: A Down and Dirty Football Novel
                  </span>    <br />
                  <span className="brandLinkBottom">Vi Keeland</span>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Brand;
