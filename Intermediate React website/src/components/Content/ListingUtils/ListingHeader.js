import React from "react";
import Options from "../FilterUtils/Options";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ListingHeader = () => {
  const data = [
    "Newest first",
    "Lowest budget first",
    "Highest budget first",
    "Lowest bids/entries",
    "Highest bids/entries",
  ];
  return (
    <div className="container">
      <div className="row mb-4">
        <div className="col-3 d-none d-lg-inline">
          <Options options={data} />
        </div>
        <div className="col-lg-5 col-12">12,125 jobs found, pricing in USD</div>
        <div className="col-4 d-none d-lg-flex justify-content-end">
          <nav aria-label="Page navigation example" className="d-inline-flex align-items-center border-square">
            <ul class="pagination">
              
            <li class="page-item" >
                <a class="page-link" href="/" aria-label="Previous">
                <FontAwesomeIcon icon="fa-solid fa-angles-left" color="black" />
                </a>
              </li>
              <li class="page-item" >
                <a class="page-link" href="/" aria-label="Previous">
                <FontAwesomeIcon icon="fa-solid fa-angle-left" color="black"/>
                </a>
              </li>
              <li class="page-item " >
                <a class="page-link text-dark" href="/">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark " href="/">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link text-dark" href="/">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/" aria-label="Previous">
                <FontAwesomeIcon icon="fa-solid fa-angle-right" color="black"/>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="/" aria-label="Previous">
                <FontAwesomeIcon icon="fa-solid fa-angles-right" color="black" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ListingHeader;
