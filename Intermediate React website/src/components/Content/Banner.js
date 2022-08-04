 const Banner = () => {
    return (
      <section className="bg-primary text-light text-center text-lg-start w-100 ">
        <div className="container w-100" style ={{maxWidth:1260 + 'px'}}>
          <div className="row py-4">
            <div className="col-12 col-lg-8 px-4">
              <h2 className="fw-bold ">Top Jobs</h2>
            </div>
            <div className="col-12 col-lg-4">
              <div className="row text-center">
                <div className="col-12">
                  <button className="btn btn-danger mx-2 border-square"> I want to Hire</button>
                  <button className="btn btn-outline-light border-square "> I want to Work</button> 
                </div>
              </div>  
            </div>
          </div>
          </div>
        </section>
    )
}

export default Banner;