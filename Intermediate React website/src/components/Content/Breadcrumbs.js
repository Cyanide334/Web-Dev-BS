 const Breadcrumbs = () => {
    return (
        <div className="container w-100" style ={{maxWidth:1260 + 'px'}}>
            <nav style={{ "--bs-breadcrumb-divider": "<"}} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">Freelancer</li>
                    <li className="breadcrumb-item">Jobs</li>
                    <li className="breadcrumb-item">Browse All Jobs</li>
                    <li className="breadcrumb-item active" aria-current="page"> 1 </li>
                </ol>
            </nav>
        </div>
    )
}

export default Breadcrumbs;