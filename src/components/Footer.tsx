export default function Footer() {
  return (
    <footer className="py-16 bg-surface-dark">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Wordmark */}
        <div className="flex items-center gap-2.5 mb-10">
          <img
            src="/src/assets/icon-64.png"
            alt="StockPulse"
            className="w-8 h-8 rounded-lg"
          />
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
            <a href="https://www.apache.org/licenses/LICENSE-2.0" className="text-on-dark-soft hover:text-on-dark transition-colors no-underline">Apache-2.0</a>
            <a href="#" className="text-on-dark-soft hover:text-on-dark transition-colors no-underline">隐私政策</a>
          </div>
          <span>Plasmo · React 18 · TypeScript · Tailwind CSS</span>
        </div>

        <div className="text-xs text-on-dark-soft space-y-1">
          <p className="text-on-dark-soft/60">本扩展禁止为中国大陆地区提供服务。</p>
          <p>StockPulse — 优雅的加密货币行情追踪</p>
        </div>
      </div>
    </footer>
  )
}
