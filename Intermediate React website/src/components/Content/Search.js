import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Search = () => {
  return (
    <>
        <div className="col-lg-5 my-2 d-flex  pe-0 ">
          <div className="input-group pt-1 bg-white">
              <span className="input-group-text border-0">
              <FontAwesomeIcon icon="magnifying-glass" color="gray"/>
              </span>
              <input type="text" className="form-control border-0 border-end" placeholder="Search Keyword"></input>
            </div>
          </div>
          <div className="col-lg-5 my-2 d-flex ps-0">
          <div className="input-group p-1 bg-white">
            <span className="input-group-text border-0">
              <FontAwesomeIcon icon="location-dot" color="gray" /></span>
            <input type="text" className="form-control border-0" placeholder="Online Job"></input>
            </div>
          </div> 
          <div className="col-lg-2 my-2">
            <div className="row justify-content-center">
              <div className="col-12">
            <button className="btn btn-primary py-3 px-2 w-100 border-square">Search</button>
              </div>
            </div>  
          </div>
          </>
    )
}

export default Search;