'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-[#F8F5EA]">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-[#A75421] mb-4">500</h1>
            <h2 className="text-2xl font-semibold text-[#43362D] mb-4">Something went wrong</h2>
            <p className="text-[#43362D] mb-8">An error occurred while loading this page.</p>
            <div className="space-x-4">
              <button
                onClick={reset}
                className="bg-[#A75421] text-white px-6 py-3 rounded-lg hover:bg-[#8c4419] transition-colors"
              >
                Try again
              </button>
              <a
                href="/"
                className="bg-[#F3D7A7] text-[#43362D] px-6 py-3 rounded-lg hover:bg-[#ecc786] transition-colors"
              >
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}