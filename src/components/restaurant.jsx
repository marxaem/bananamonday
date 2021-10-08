import React, { Component } from "react";

class Rest extends React.Component {
  state = {
    restaurants: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1337&q=80",
        name: "Coffee Time",
        type: "Bakery/Cake, coffee",
        hour: "Daily 8AM to 5PM",
        price: "About 100 THB.",
        link: "https://unsplash.com/photos/nzyzAUsbV0M",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1580212206172-dbea2d1b64dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        name: "KUBKHAODEE",
        type: "Thai dishes",
        hour: "Daily 10AM to 8PM",
        price: "70-150 THB.",
        link: "https://unsplash.com/photos/zCPfqE7htNE",
      },
      {
        imageUrl:
          "https://images.unsplash.com/photo-1533787761082-492a5b83e614?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
        name: "Ban Chao Lay",
        type: "Thai main dishes and desserts",
        hour: "Tue to Sun, 9AM to 6PM",
        price: "100-200 THB.",
        link: "https://unsplash.com/photos/0BhsN70JVA8",
      },
    ],
  };

  render() {
    return (
      <div>
        <ul className="restaurant px-0 mb-5 pb-5 justify-content-center d-flex">
          {this.state.restaurants.map((elem) => (
            <div>
              <a href={elem.link} target="_blank">
            <div className="card shadow mx-2">
              <img src={elem.imageUrl} className=" card-img-top" />
              <div className="card-body py-1">
                <p className="card-text font-weight-bold my-0 text-dark">{elem.name}</p>
                <p className="card-text font-weight-light my-0 text-dark">{elem.type}</p>
                <p className="card-text font-weight-light my-0 text-dark">{elem.hour}</p>
                <p className="card-text font-weight-light my-0 text-dark">{elem.price}</p>
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

export default Rest;
