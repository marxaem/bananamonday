import React, { Component } from "react";

export default class Dest extends React.Component {
  state = {
    destinations: [
      {
        imageUrl:
          "https://www.img.in.th/images/dc68b8ec7f302f172d061ed7791487d8.jpg",
        name: "คลองสังเน่ห์",
        link: "https://www.google.com/maps/search/%E0%B8%84%E0%B8%A5%E0%B8%AD%E0%B8%87%E0%B8%AA%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%99%E0%B9%88%E0%B8%AB%E0%B9%8C/@8.8761475,98.3398847,17z/data=!3m1!4b1",
      },
      {
        imageUrl:
          "https://www.img.in.th/images/b175203dd6b8df13d77ff65dd17febb0.jpg",
        name: "ประภาคารเขาหลัก หาดนางทอง",
        link: "https://www.google.com/maps/search/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B8%AB%E0%B8%A5%E0%B8%B1%E0%B8%81+%E0%B8%AB%E0%B8%B2%E0%B8%94%E0%B8%99%E0%B8%B2%E0%B8%87%E0%B8%97%E0%B8%AD%E0%B8%87/@8.6439335,98.2460034,17z/data=!3m1!4b1",
      },
      {
        imageUrl:
          "https://www.img.in.th/images/f17787f61c5cd3ad75ad80cdd891b07b.jpg",
        name: "น้ำตกลำปี",
        link: "https://www.google.com/maps/place/Namtok+Lampee/@8.4641491,98.2797894,17z/data=!3m1!4b1!4m5!3m4!1s0x3050f73db7df23d5:0xcd93afa4259a289c!8m2!3d8.4641491!4d98.2819781",
      },
    ],
  };

  render() {
    return (
      <div>
        <ul className="destination px-0 mb-5 pb-5 justify-content-center d-flex">
          {this.state.destinations.map((elem) => (
            <div>
              <a href={elem.link} target="_blank">
                <div className="card shadow mx-2">
                  <img src={elem.imageUrl} className=" card-img-top" />
                  <div className="card-body py-1">
                    <p className="card-text font-weight-bold my-0 text-dark prompt">
                      {elem.name}
                    </p>
                  </div>
                </div>
              </a>
            </div>
          ))}
          <div className="card shadow opacity justify-content-center d-flex flex-column">
            <p className="font-weight-bold fs-2">&nbsp;&#62;&nbsp;</p>
          </div>
        </ul>
      </div>
    );
  }
}
