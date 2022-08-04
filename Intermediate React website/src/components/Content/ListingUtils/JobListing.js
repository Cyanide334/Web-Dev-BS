import React from "react";
import Description from "./Description";
import TagList from "./TagList";
import Title from "./Title";
import Bid from "./Bid";
import Button from "./Button";

const JobListing = ({element}) => {

  return (
    <>

        <div class="row p-3 ">
        <div class="col-10 border-bottom p-3">
          <Title title={element.title} expiry={element.expiry} verified={element.verified}/>
          <Description description={element.description}/>
          <TagList tags={element.tags}/>
          
          </div>
        <div class="col-2 p-3 border-bottom">
            <Bid price={element.price} count={element.count}/>
            <Button/>
          </div>
        </div>
    
    </>
  );
};

export default JobListing;
