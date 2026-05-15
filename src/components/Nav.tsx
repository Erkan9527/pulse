export default function Nav() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center bg-canvas/80 backdrop-blur-md"
      style={{ borderBottom: "1px solid #e6dfd8" }}
    >
      <div className="max-w-[1200px] mx-auto w-full px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline">
          <img
            src="/logo-48.png"
            alt="StockPulse"
            className="w-6 h-6 rounded-md"
          />
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
            href="https://microsoftedge.microsoft.com/addons/detail/stockpulse/ambpfpnadmehhfaoealepfgbcdcindll"
            className="inline-flex items-center h-10 px-5 text-sm font-medium text-on-coral bg-coral rounded-md hover:bg-coral-active transition-colors no-underline"
          >
            免费安装
          </a>
        </div>
      </div>
    </nav>
  )
}
