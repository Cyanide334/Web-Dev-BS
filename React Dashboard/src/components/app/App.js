import { Sidebar } from "../Sidebar/Sidebar"
import { Header } from "../Header/Header"
import DashboardToolbar  from "../Content/DashboardToolbar.js"
import Graph from "../Content/Graph.js"
import Table from "../Content/Table.js"
import  "../../dashboard"
import './App.css';

function App() {
  return (
    <div className="App">
      
      <Header/>
      
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <Sidebar />
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <DashboardToolbar />
            
             <Graph />
             <h2>Section Title</h2>

             <Table />
          </main>
        </div>
      </div>

    </div>
  );
}

export default App;
