import CoinMarquee from "./CoinMarquee"

export default function Hero() {
  return (
    <section className="pt-24 pb-section bg-canvas">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Text */}
        <div className="text-center max-w-[720px] mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-pill bg-surface-dark text-on-dark-soft text-xs font-medium tracking-[1.5px] uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-accent-teal" />
            Edge 扩展
          </div>

          <h1
            className="text-[64px] leading-[1.05] tracking-[-1.5px] font-normal text-ink mb-6"
            style={{ fontFamily: '"Cormorant Garamond", Garamond, serif' }}
          >
            优雅地追踪
            <br />
            你的加密货币
          </h1>

          <p className="text-lg text-muted max-w-[480px] mx-auto leading-relaxed">
            StockPulse 是一款精致的 Edge 浏览器插件，
            实时呈现你的自选币种行情，让每一次查看都成为享受。
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href="https://microsoftedge.microsoft.com/addons/detail/stockpulse/ambpfpnadmehhfaoealepfgbcdcindll"
              className="inline-flex items-center h-11 px-6 text-sm font-medium text-on-coral bg-coral rounded-md hover:bg-coral-active transition-colors no-underline"
            >
              免费安装
            </a>
            <a
              href="#功能"
              className="inline-flex items-center h-11 px-6 text-sm font-medium text-ink bg-canvas rounded-md hover:bg-canvas-card transition-colors no-underline"
              style={{ border: "1px solid #e6dfd8" }}
            >
              了解更多
            </a>
          </div>
        </div>

        {/* Coin Marquee with Gaussian blur mask */}
        <CoinMarquee />

        {/* Stats row */}
        <div className="flex justify-center gap-16 mt-14 pt-10"
          style={{ borderTop: "1px solid #ebe6df" }}
        >
          {[
            { value: "250+", label: "支持的币种" },
            { value: "3", label: "数据源聚合" },
            { value: "30s", label: "实时刷新" },
            { value: "免费", label: "永久免费" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-[28px] leading-[1.2] tracking-[-0.3px] font-normal text-ink mb-1"
                style={{ fontFamily: '"Cormorant Garamond", Garamond, serif' }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-soft">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
