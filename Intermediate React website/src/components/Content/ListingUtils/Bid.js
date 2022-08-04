import React from "react";
const Bid = ({price, count}) => {
  return (
    <div >
      <strong className="fs-6 me-1">{price}</strong>
      <span className="fs-6"> Avg Bid</span>
      <div className="fs-6">{count} bids</div>
    </div>
  );
};

export default Bid;
