import React, { Component } from "react";
import Dest from "./destination";
import Accom from "./accommodation";
import Rest from "./restaurant";

class Phangnga extends React.Component {
  render() {
    return (
      <div>
        <div className="krabi">
          <div id="bg4"></div>
        </div>

        <div className="one align-items-end justify-content-center d-flex flex-column vh-100">
          <h1 className="text-white lora">Nang Thong Beach</h1>
          <div className="line2 mb-4"></div>
          <p className="text-white lora">Phang Nga, Thailand</p>
        </div>

        <div className="two justify-content-center d-flex flex-column">
          <h1 className="lora">Phang Nga</h1>
          <h5>A friendly and charming provincial capital</h5>
          <p className="my-4 text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores quas placeat ex ad ipsam, nihil cum quia odio architecto totam, suscipit excepturi libero perferendis accusantium soluta itaque porro debitis reiciendis.</p>
        </div>
      
        <div className="destinations">
          <h2 className="mb-4">Tourist attractions</h2>
          <Dest />
        </div>

        <div className="accommodations">
          <h2 className="mb-4">Accommodations</h2>
          <Accom className="pic" />
        </div>

        <div className="restaurants">
          <h2 className="mb-4">Restaurants &amp; great deals</h2>
          <Rest />
        </div>

        <h2 className="text-center mb-4">Suggested route</h2>
        <div className="map mb-50 justify-content-center d-flex">
          <img src="https://cdn.discordapp.com/attachments/886838952689008663/896025847209795594/z7et1k.jpg" className="shadow" />
        </div>

        <div className="plan justify-content-center d-flex">
          <button type="button" class="btn btn-lg btn-warning shadow-sm" onClick={() => window.open("./map.html","__blank")}>Open map</button>
        </div>
      </div>
    );
  }
}

export default Phangnga;
