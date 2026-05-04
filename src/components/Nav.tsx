export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center bg-canvas/80 backdrop-blur-md"
      style={{ borderBottom: "1px solid #e6dfd8" }}
    >
      <div className="max-w-[1200px] mx-auto w-full px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="3.5" fill="#141413" />
            <path
              d="M12 1v5.5M12 17.5V23M1 12h5.5M17.5 12H23M4.22 4.22l3.89 3.89M15.89 15.89l3.89 3.89M4.22 19.78l3.89-3.89M15.89 8.11l3.89-3.89"
              stroke="#141413"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
          <span
            className="text-[18px] font-semibold text-ink tracking-tight"
            style={{ fontFamily: '"Cormorant Garamond", Garamond, serif' }}
          >
            StockPulse
          </span>
        </a>

        <div className="flex items-center gap-6">
          <a
            href="#功能"
            className="text-sm font-medium text-muted hover:text-ink transition-colors no-underline"
          >
            功能
          </a>
          <a
            href="#安装"
            className="inline-flex items-center h-10 px-5 text-sm font-medium text-on-coral bg-coral rounded-md hover:bg-coral-active transition-colors no-underline"
          >
            免费安装
          </a>
        </div>
      </div>
    </nav>
  )
}
