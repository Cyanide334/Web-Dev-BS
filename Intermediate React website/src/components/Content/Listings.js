import React from "react";
import JobListing from "./ListingUtils/JobListing";
import ListingHeader from "./ListingUtils/ListingHeader";

const Listings = () => {
  const data = [
    {
      title: "build a ecommerce web site",
      description: "need educated expertise python land based web developer.",
      tags: ["Graphic Design", "Python", "Website Design"],
      expiry: "6 days left",
      price: "min $33270",
      count: "0",
      verified: false
    },
    {
      title: "Web Scraping",
      description: "Please scrap websites and get data.",
      tags: ["Data Mining", "PHP", "Python", "Software Architecture","Web Scraping"],
      expiry: "6 days left",
      price: "$420",
      count: "10",
      verified: true
    },
    {
      title: "Travel Writers... UK....",
      description: "Short article, travel story, food lover Details will shared during bidding stage.",
      tags: ["Article Writing", "Content Writing", "Forum Posting", "Russian","Travel Writing"],
      expiry: "6 days left",
      price: "$15 / hr",
      count: "2",
      verified: true
    },
    {
      title: "Im Looking for a professional logo",
      description: "Logo Name ; SUVARNA JEWELLERS Description: Jewellry shop, u have to highlight S here more attractive and good looking fully professional ",
      tags: ["Graphic Desinging", "Illustrator", "Logo Design", "Photoshop"],
      expiry: "4 days left",
      price: "$41",
      count: "0",
      verified: false
    },
    {
      title: "blockchain developer -- 2",
      description: "Algorand blockchain expert. Ps: you can not cheat on this since you will have before we award you the job, define technically in algorand protocol jargon the milestones list we will provide you",
      tags: ["Blockchain"],
      expiry: "6 days left",
      price: "$5266",
      count: "3",
      verified: true
    },
  ];
  return (
    <div className="col-12 col-lg-9  px-2 container pe-0">
      <div className="bg-white shadow p-3">  
      <div className="row border-bottom">
        <ListingHeader />
      </div>
        {data.map((element) => {
          return(
          <div className="row jobs">
            <JobListing element={element} />
            
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Listings;
