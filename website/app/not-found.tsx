export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F5EA]">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#A75421] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#43362D] mb-4">Page Not Found</h2>
        <p className="text-[#43362D] mb-8">The page you're looking for doesn't exist.</p>
        <a
          href="/"
          className="bg-[#A75421] text-white px-6 py-3 rounded-lg hover:bg-[#8c4419] transition-colors"
        >
          Back to Home
        </a>
      </div>
    </div>
  )
}