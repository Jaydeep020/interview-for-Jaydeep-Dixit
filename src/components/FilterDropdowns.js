import { Calendar } from 'lucide-react';
import { Funnel } from 'lucide-react';
export default function FilterDropdowns({ status, setStatus, dateFilter, setDateFilter, setPage }) {
  const statuses = [
    "All Launches",
    "Upcoming Launches",
    "Successful Launches",
    "Failed Launches",
  ];

  const dateRanges = [
    "Past 6 months",
    "Past week",
    "Past month",
    "Past 3 months",
    "Past year",
    "Past 2 years",
  ];

  return (
    <div className="mb-6 flex justify-between flex-wrap gap-4">
      <div className='flex items-center'>
        <label className="mr-2 font-medium"><Calendar strokeWidth={1} className='mr-[-4px]' /></label>
        <select
          value={dateFilter}
          onChange={(e) => {
            setDateFilter(e.target.value);
            setPage(1);
          }}
          className="rounded px-3 py-1"
        >
          {dateRanges.map((range) => (
            <option key={range} value={range}>
              {range}
            </option>
          ))}
        </select>
      </div>
      <div className='flex items-center'>
        <label className="mr-2 font-medium"><Funnel className='mr-[-5px]'/></label>
        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className="rounded px-3 py-1"
        >
          {statuses.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
