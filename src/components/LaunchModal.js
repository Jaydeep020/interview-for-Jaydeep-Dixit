export default function LaunchModal({ launch, onClose }) {
  console.log(launch);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white max-w-lg w-full p-6 rounded shadow-lg relative">
        <div className="flex justify-between">
          <div className="flex gap-4">
             {launch.links.patch.small && (
             <img src={launch.links.patch.small} alt="patch" className="w-20 h-20 object-contain mx-auto mb-4" />
            )}
            <div>
              <h2 className="text-xl font-semibold mb-1">{launch.name}</h2>
              <p className="text-sm font-extralight">{launch.rocket?.name}</p>
            </div>
             {<span className={`px-3 py-1 rounded-full text-sm font-medium h-fit ${
            launch.upcoming
              ? "bg-yellow-100 text-yellow-800"
              : launch.success
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}>
            {launch.upcoming ? "Upcoming" : launch.success ? "Success" : "Failed"}
          </span>}
          </div>
          <button onClick={onClose} className="absolute top-2 right-3 text-2xl">×</button>
        </div>
        <div>
            <span className="mb-4">{launch.details || "No details available."}</span>
            {launch.links.wikipedia && (
              <a
                href={launch.links.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 underline ml-1"
              >
                Wikipedia
              </a>
            )}
        </div>
        <div className="flex flex-col justify-evenly py-3">
          <div className="flex  border-b-2 py-3 ">
            <span className="w-[50%]">Flight Number</span>
            <span>{launch.flight_number}</span>
          </div>
          <div className="flex  border-b-2 py-3">
            <span className="w-[50%]">Mission Name</span>
            <span>{launch.name}</span>
          </div>
          <div className="flex border-b-2 py-3">
            <span className="w-[50%]">Rocket Type</span>
            <span>v1.0</span>
          </div>
          <div className="flex  border-b-2 py-3">
            <span className="w-[50%]">Rocket Name</span>
            <span>{launch.rocket?.name || "-"}</span>
          </div>
          <div className="flex  border-b-2 py-3">
            <span className="w-[50%]">Manufacturer</span>
            <span>{launch.rocket?.company || "-"}</span>
          </div>
          <div className="flex border-b-2 py-3">
            <span className="w-[50%]">Nationality</span>
            <span>{launch.rocket?.country || "-"}</span>
          </div>
          <div className="flex  border-b-2 py-3">
            <span className="w-[50%]">Launch Date</span>
            <span>{new Date(launch.date_utc).toUTCString()}</span>
          </div>
          <div className="flex  border-b-2 py-3">
            <span className="w-[50%]">Payload Type</span>
            <span>{launch.payloads?.[0]?.type || "-"}</span>
          </div>
          <div className="flex  border-b-2 py-3">
            <span className="w-[50%]">Orbit</span>
            <span>{launch.payloads?.[0]?.orbit || "-"}</span>
          </div>
          <div className="flex  py-3">
            <span className="w-[50%]">Launch Site</span>
            <span>{launch.launchpad?.name || "-"}</span>
          </div>
        </div>

      </div>
    </div>
  );
}

