export default function LaunchTable({ launches, loading, onSelect }) {
  return (
    <div className="overflow-x-auto border border-gray-300 dark:border-slate-700 rounded-lg my-4">
      <table className="min-w-full table-fixed">
        <thead className="bg-gray-100 dark:bg-slate-800 text-left text-sm">
          <tr >
            <th className="p-3">No</th>
            <th className="p-3">Launched (UTC)</th>
            <th className="p-3">Location</th>
            <th className="p-3">Mission</th>
            <th className="p-3">Orbit</th>
            <th className="p-3">Launch Status</th>
            <th className="p-3">Rocket</th>
          </tr>
        </thead>
        <tbody className="text-sm ">
          {loading ? (
            <tr>
              <td colSpan="7" className="text-center p-6">
                <div className="animate-spin h-6 w-6 border-4 border-gray-300 border-t-blue-500 rounded-full mx-auto" />
              </td>
            </tr>
          ) : launches.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center p-6">No results found for the specified filter</td>
            </tr>
          ) : (
            launches.map((launch, idx) => (
              <tr
                key={launch.id}
                className="hover:bg-gray-50 dark:hover:bg-slate-700 cursor-pointer"
                onClick={() => onSelect(launch)}
              >
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{new Date(launch.date_utc).toUTCString()}</td>
                <td className="p-3">{launch.launchpad?.name || "-"}</td>
                <td className="p-3">{launch.name}</td>
                <td className="p-3">{launch.payloads?.[0]?.orbit || "-"}</td>
                <td className="p-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    launch.upcoming
                      ? "bg-yellow-100 text-yellow-800"
                      : launch.success
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}>
                    {launch.upcoming ? "Upcoming" : launch.success ? "Success" : "Failed"}
                  </span>
                </td>
                <td className="p-3">{launch.rocket?.name || "-"}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}