import React, { Component } from "react";

class Accom extends React.Component {
  state = {
    accommodations: [
      {
        imageUrl:
          "https://images.unsplash.com/photo-1607582544644-f1da2a004994?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80",
        name: "La Vela Khao Lak",
        price: "3,000 THB/night",
        link: "https://www.lavelakhaolak.com/",
      },
      {
        imageUrl:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/195434676.jpg?k=b527d3169561045e26f4213a65f80c047a02f5827a6093cdb4a5b2514fc61774&o=",
        name: 'Eden Beach Resort and Spa',
        price: '3,200 THB/night',
        link: "https://www.edenbeachkhaolak.com/",
      },
      {
        imageUrl:
          "https://q-xx.bstatic.com/xdata/images/hotel/840x460/166538448.jpg?k=b645be8c3739f9fbbe532d643a6d076f19c532fee05a2a4267b2ee389262ad91&o=",
        name: 'Suwan Palm Resort',
        price: '2,000 THB/night',
        link: 'https://www.suwanpalm.com/',
      },
    ],
  };

  render() {
    return (
      <div>
        <ul className="accommodation px-0 mb-5 pb-5 justify-content-center d-flex">
          {this.state.accommodations.map((elem) => (
            <div>
              <a href={elem.link} target="_blank">
            <div className="card shadow mx-2">
              <img src={elem.imageUrl} className=" card-img-top" />
              <div className="card-body py-1">
                <p className="card-text font-weight-bold my-0 text-dark">{elem.name}</p>
                <p className="card-text font-weight-light my-0 text-dark">{elem.price}</p>
              </div>
            </div>
            </a>
            </div>
          ))}
          <div className="card shadow opacity justify-content-center d-flex flex-column">
            <p className="font-weight-bold fs-2">&#62;</p>
          </div>
        </ul>
      </div>
    );
  }
}

export default Accom;
