
import  FeatherIcon  from 'feather-icons-react';
const Sidebar = ({sectionHeadings, sidebarOptions}) => {
   
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                { sidebarOptions.map((section,idx)=>{
                    return (
                        <> {sectionHeadings[idx].show && <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                            <span>{sectionHeadings[idx].heading}</span>
                            <a className="link-secondary" href="/" aria-label="Add a new report">
                                <FeatherIcon icon={sectionHeadings[idx].icon} />
                            </a>
                        </h6>}
                            <ul className="nav flex-column">
                                {section.map(element => <li className="nav-item">
                                    <a className={element.active? "nav-link active":"nav-link"} href={element.link}>
                                        <FeatherIcon icon={element.icon} />
                                        {element.text}
                                    </a>
                                </li> )}
                                
                            </ul>

                        </>
                    );
                })}
            </div>
        </nav>
    )
}

export default Sidebar