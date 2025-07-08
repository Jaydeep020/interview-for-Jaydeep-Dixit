import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "./components/Pagination"
import LaunchTable from "./components/LaunchTable"
import FilterDropdowns from "./components/FilterDropdowns";
import Header from "./components/Header";
import LaunchModal from "./components/LaunchModal";

export default function App() {
  const [launches, setLaunches] = useState([]);
  const [status, setStatus] = useState("All Launches");
  const [dateFilter, setDateFilter] = useState("Past 6 Months");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const filter = {};
      const now = new Date();
      let startDate;

      switch (dateFilter) {
        case "Past week":
          startDate = new Date(now.setDate(now.getDate() - 7));
          break;
        case "Past month":
          startDate = new Date(now.setMonth(now.getMonth() - 1));
          break;
        case "Past 3 months":
          startDate = new Date(now.setMonth(now.getMonth() - 3));
          break;
        case "Past 6 months":
          startDate = new Date(now.setMonth(now.getMonth() - 6));
          break;
        case "Past year":
          startDate = new Date(now.setFullYear(now.getFullYear() - 1));
          break;
        case "Past 2 years":
          startDate = new Date(now.setFullYear(now.getFullYear() - 2));
          break;
        default:
          startDate = null;
      }

      if (startDate) {
        filter.date_utc = { $gte: startDate.toISOString(),$lte: now.toISOString() };
      }

      if (status === "Successful Launches") filter["success"] = true;
      else if (status === "Failed Launches") filter["success"] = false;
      else if (status === "Upcoming Launches") filter["upcoming"] = true;

      const res = await axios.post(`https://api.spacexdata.com/v4/launches/query`, {
        query: filter,
        options: {
          page,
          limit: 12,
          populate: ["rocket", "launchpad","payloads"]
        },
      });

      setLaunches(res.data.docs);
      setTotalPages(res.data.totalPages);
      setLoading(false);
    };

    fetchData();
  }, [status, dateFilter, page]);

  return (
    <div className="max-w-full mx-auto">
      <Header/>
      <div className="max-w-7xl mx-auto">
        <FilterDropdowns
        status={status} 
        setStatus={setStatus} 
        dateFilter={dateFilter} 
        setDateFilter={setDateFilter} 
        setPage={setPage} 
      />
      <div className="min-h-[676px] mx-auto">
          <LaunchTable launches={launches} loading={loading} onSelect={setSelectedLaunch} />
      </div>
      <Pagination page={page} totalPages={totalPages} setPage={setPage}/>
      {selectedLaunch && (
        <LaunchModal launch={selectedLaunch} onClose={() => setSelectedLaunch(null)} />
      )}
      
      </div>
    </div>
  );
}