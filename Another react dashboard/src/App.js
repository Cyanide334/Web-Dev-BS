import "./App.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dashboard.css";
import Sidebar from './Navbar/Sidebar';
import Dashboard from "./Section/Dashboard";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Table } from "./Section/Table";
import Navbar from "./Navbar/Navbar";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

function App() {
  const sectionHeadings = [
    { show: false },
    { show: true, text: "Saved reports", icon: "plus-circle" }
  ];
  const sidebarOptions = [
    [
      {
        text: "Dashboard",
        link: "/",
        icon: "home",
        active:true
      }, {
        text: "Orders",
        link: "/",
        icon: "file"
      },
      {
        text: "Products",
        link: "/",
        icon: "shopping-cart"
      },
      {
        text: "Customers",
        link: "/",
        icon: "users"
      },
      {
        text: "Reports",
        link: "/",
        icon: "bar-chart-2"
      },
      {
        text: "Integrations",
        link: "/",
        icon: "layers"
      },

    ],
    [
      {
        text: "Current month",
        link: "/",
        icon: "file-text"
      },
      {
        text: "Last Quarter",
        link: "/",
        icon: "file-text"
      },
      {
        text: "Social Engagement",
        link: "/",
        icon: "file-text"
      },
      {
        text: "Year-end sale",
        link: "/",
        icon: "file-text"
      },

    ]
  ]
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };
  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        data: [15339, 21345, 18483, 24003, 23489, 24092, 12034],
        lineTension: 0,
        backgroundColor: "transparent",
        borderColor: "#007bff",
        borderWidth: 4,
        pointBackgroundColor: "#007bff",
      },
    ],
  };
  return (
    <>
      <Navbar companyName={"Company Name"} />

      <div className="container-fluid">
        <div className="row">
          <Sidebar sectionHeadings={sectionHeadings} sidebarOptions={sidebarOptions}/>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
           <Dashboard/>
            <Line options={options} data={data} />
            <h2>Section title</h2>
            <Table />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
