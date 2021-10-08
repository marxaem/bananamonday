import React, { Component } from "react";
import { Link } from "react-router-dom";

class Intro extends React.Component {
  render() {
    return (
      <div>

        <div className="header">
          <div id="bg"></div>
        </div>

        <div className="first justify-content-center d-flex flex-column vh-100">
          <h1 className="sriracha">จะไปไหนก็ไป</h1>
          <h5>Travel Partner</h5>
          <div className="line mb-5"></div>
            <a href="#input" className="text-white text-decoration-none">
            <button type="button" className="btn btn-outline-light btn-lg mx-2">
              PLAN NOW
            </button>
          </a>
        </div>

        <div className="secondbg">
          <div id="bg2"></div>
        </div>

        <div className="third">
          <div id="bg3"></div>
        </div>

        <div className="second justify-content-center d-flex flex-column" id="about">
          <h1 className="lora">Japainaigorpai</h1>
          <h5>We match you with a passionate guide</h5>
          <p className="my-4 text-secondary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum ea id sint minima inventore illum sequi, explicabo voluptatem aliquid exercitationem et porro provident quo cumque sunt quasi ratione illo expedita laborum doloribus molestiae. Sed, sequi delectus fuga, molestiae eveniet neque error incidunt eos itaque illo, beatae consequuntur illum? At, iure.
          </p>
        </div>

        <div className="third" id="input">
          <div id="bg3"></div>
        </div>

        <form className="mx-5 px-5 mx-auto form">

          <div className="form-bg opacity"></div>
          <h2 className="text-center test">Let us plan a trip for you!</h2>
          <div className="form-group py-5">

            <div className="form-group row">
              <label className="col-sm-2 col-form-label ml-20">Destination</label>
              <div class="col-sm-5">
                <input type="text" className="form-control" placeholder="Phuket" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label ml-20">Budget</label>
              <div class="col-sm-5">
                <input type="text" className="form-control" placeholder="3000 THB per day" />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label ml-20">Style</label>
              <div class="col-sm-5">
                <select class="form-control">
                  <option>Local</option>
                  <option>Adventure</option>
                  <option>Camping</option>
                  <option>Luxury travel</option>
                  <option>Food trip</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label ml-20">
                Guests
              </label>
              <div class="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 3 guests"
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label ml-20">
                Food
              </label>
              <div class="col-sm-5">
                <select class="form-control">
                  <option>Local</option>
                  <option>Streetfood</option>
                  <option>Cafe</option>
                  <option>Restaurant</option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label ml-20">
                With guide
              </label>
              <div class="col-sm-5">
                <select class="form-control">
                  <option>Yes</option>
                  <option>I prefer to travel independently</option>
                </select>
              </div>
            </div>

            <Link to="/bananamonday/phangnga">
              <button type="submit" class="btn btn-info mb-2 ml-45">
                Let's plan
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Intro;
