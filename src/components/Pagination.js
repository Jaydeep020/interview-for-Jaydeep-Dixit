import React from 'react'

export default function Pagination({page,totalPages,setPage}){
  return (
   <div className="flex justify-end items-center  space-x-1 ">
  {/* Backward Button */}
  <button
    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
    disabled={page === 1}
    className="px-3 py-1 rounded border bg-white dark:bg-slate-800 text-gray-700 dark:text-white border-gray-300 dark:border-slate-700 disabled:opacity-50 font-bold"
  >
    {'<'}
  </button>

  {/* Always show page 1 */}
  <button
    onClick={() => setPage(1)}
    className={`px-3 py-1 rounded border ${
      page === 1
        ? "bg-blue-600 text-white border-blue-600"
        : "bg-white dark:bg-slate-800 text-gray-800 dark:text-white border-gray-300 dark:border-slate-700"
    }`}
  >
    1
  </button>

  {/* Left Ellipsis */}
  {page > 4 && (
    <span className="px-2 text-gray-500 dark:text-gray-400">...</span>
  )}

  {/* Dynamic middle pages */}
  {Array.from({ length: 3 }, (_, i) => page - 1 + i)
    .filter((p) => p > 1 && p < totalPages)
    .map((p) => (
      <button
        key={p}
        onClick={() => setPage(p)}
        className={`px-3 py-1 rounded border ${
          page === p
            ? "bg-blue-600 text-white border-blue-600"
            : "bg-white dark:bg-slate-800 text-gray-800 dark:text-white border-gray-300 dark:border-slate-700"
        }`}
      >
        {p}
      </button>
    ))}

  {/* Right Ellipsis */}
  {page < totalPages - 2 && (
    <span className="px-2 text-gray-500 dark:text-gray-400">...</span>
  )}

  {/* Always show last page if it's not 1 */}
  {totalPages > 1 && (
    <button
      onClick={() => setPage(totalPages)}
      className={`px-3 py-1 rounded border ${
        page === totalPages
          ? "bg-blue-600 text-white border-blue-600"
          : "bg-white dark:bg-slate-800 text-gray-800 dark:text-white border-gray-300 dark:border-slate-700"
      }`}
    >
      {totalPages}
    </button>
  )}

  {/* Forward Button */}
  <button
    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
    disabled={page === totalPages}
    className="px-3 py-1 rounded border bg-white dark:bg-slate-800 text-gray-700 dark:text-white border-gray-300 dark:border-slate-700 disabled:opacity-50 font-bold"
  >
    {'>'}
  </button>
</div>

  )
}
