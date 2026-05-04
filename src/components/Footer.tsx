export default function Footer() {
  return (
    <footer className="py-16 bg-surface-dark">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Wordmark */}
        <div className="flex items-center gap-2.5 mb-10">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3" fill="#faf9f5" />
            <path
              d="M12 1v5.5M12 17.5V23M1 12h5.5M17.5 12H23M4.22 4.22l3.89 3.89M15.89 15.89l3.89 3.89M4.22 19.78l3.89-3.89M15.89 8.11l3.89-3.89"
              stroke="#a09d96"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span
            className="text-lg font-semibold text-on-dark tracking-tight"
            style={{ fontFamily: '"Cormorant Garamond", Garamond, serif' }}
          >
            StockPulse
          </span>
        </div>

        <div
          className="flex items-center justify-between text-xs text-on-dark-soft pb-12 mb-10"
          style={{ borderBottom: "1px solid #252320" }}
        >
          <div className="flex items-center gap-6">
            <a href="#" className="text-on-dark-soft hover:text-on-dark transition-colors no-underline">MIT License</a>
            <a href="#" className="text-on-dark-soft hover:text-on-dark transition-colors no-underline">隐私政策</a>
          </div>
          <span>Plasmo · React 18 · TypeScript · Tailwind CSS</span>
        </div>

        <div className="text-xs text-on-dark-soft">
          StockPulse — 优雅的加密货币行情追踪
        </div>
      </div>
    </footer>
  )
}
