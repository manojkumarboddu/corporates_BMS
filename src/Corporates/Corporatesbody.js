import React from "react";
import "./Corporatesbody.css";
function Corporatesbody() {
  let images = [
    "https://tse3.mm.bing.net/th?id=OIP.PidexmW_-1-1GWJqEN-1NAHaHa&pid=Api&P=0&h=180",
    "https://tse3.mm.bing.net/th?id=OIF.W%2bn5IRkV23Pzges8cf6Ohw&pid=Api&P=0&h=180",
    "https://in.bmscdn.com/webin/corporate/axis-logo.png",
    "https://in.bmscdn.com/webin/corporate/mastercard-logo.png",
    "https://in.bmscdn.com/webin/corporate/icici-logo.png",
  ];
  let text = {
    name: [
      {
        item: "1000+",
        item2: "cities",
      },
      {
        item: "6000",
        item2: "Screens",
      },
      {
        item: "10000+",
        item2: "corporates who trust us",
      },
      {
        item: "15 MILLION + ",
        item2: "Tickets sold pre month",
      },
      {
        item: "4 BILLION",
        item2: "Pages view per month",
      },
    ],
  };

  let block = {
    M1block: [
      {
        item: "What is it for u",
        item1: "brand promotions",
        item2: "htrdjtfjycxtdjytfjyftutd",
        item3: "jytfjytfudhtrdhtrd",
        item4: "https://in.bmscdn.com/webin/corporate/steven-libralon.png",
      },
    ],
  };

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      <div className="crimg">
        <h4 className="h4d">OUR PARTNERS</h4>
        <div className="ulcr" style={{ listStyleType: "none" }}>
          {images.map((item) => {
            return (
              <div className="licr">
                <img className="image" src={item} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <div className="crp">
        {text.name.map((x) => {
          return (
            <div className="hdiv">
              <h4
                style={{
                  fontSize: "23px",
                  fontWeight: "600",
                }}
              >
                {x.item}
              </h4>
              <p
                style={{
                  fontSize: "18px",
                  paddingTop: "13px",
                  width: "110px",
                }}
              >
                {x.item2}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Corporatesbody;
