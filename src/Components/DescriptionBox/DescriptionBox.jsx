import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Please note that these photos might have slight differences with the
          actual product in terms of color due to lighting conditions and the
          device display used to view the item.
        </p>
        <p>
          Subscribe to get special offers, free giveaways, and
          once-in-a-lifetime deals.
        </p>
      </div>
    </div>
  );
};
