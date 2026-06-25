export function CircularProgressIndicator() {
  return (
    <div
      role="status"
      className="inline-flex items-center justify-center py-12"
    >
      <svg
        className="h-12 w-12 animate-spin text-gray-900"
        viewBox="0 0 50 50"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <circle
          cx="25"
          cy="25"
          r="20"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="80 150"
          strokeDashoffset="0"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
}
