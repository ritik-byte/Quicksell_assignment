import React from "react";
import { BsExclamationSquareFill } from "react-icons/bs";
import "../styles/Card.css";

const Card = ({ id, title, tags, status }) => {
  function avl(status){
    if(status){
      // <span style={{backgroundColor:"red"}}>...</span>
      console.log(status);
    }
  }
  return (
    <div className="container">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
          <img
            src="https://th.bing.com/th/id/OIP.59RgMKObFmeuEANpDzOohAHaHa?w=190&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt="QuickSellUser"
          />
          <div>{avl}</div>
          <div className="status"></div>
        </div>
      </div>

      <div className="title">
        <p>{title}</p>
      </div>

      <div className="tags">
        <div className="tag">
          <BsExclamationSquareFill />
        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
              <span>●</span> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
