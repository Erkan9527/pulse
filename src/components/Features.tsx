import { useState } from "react"

const FEATURES = [
  {
    id: "watchlist",
    title: "自选列表",
    description:
      "自由管理你的加密货币关注列表。添加心仪币种，实时追踪价格变动，涨跌一目了然。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    id: "search",
    title: "智能搜索",
    description:
      "300ms 防抖搜索，输入即搜。支持按名称、代号快速定位币种，搜索结果实时呈现。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
  },
  {
    id: "charts",
    title: "专业图表",
    description:
      "7 日迷你走势图 + K 线图表，点击币种卡片即可展开详细数据。高低价、市值一目了然。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
  {
    id: "refresh",
    title: "多源聚合",
    description:
      "整合 CoinGecko + KuCoin + OKX 三大数据源。WebSocket 推送 + 定时轮询，数据永远新鲜。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    id: "settings",
    title: "个性化设置",
    description:
      "支持多语言（中文 / 英文）、主题切换。默认自选列表开箱即用，零配置上手。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: "privacy",
    title: "隐私优先",
    description:
      "数据存储在本地 Chrome Storage，不上传任何个人信息。没有遥测，没有追踪，干净纯粹。",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
]

export default function Features() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="功能" className="py-section bg-canvas-soft">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2
            className="text-[48px] leading-[1.1] tracking-[-1px] font-normal text-ink mb-4"
            style={{ fontFamily: '"Cormorant Garamond", Garamond, serif' }}
          >
            为你精心打造的每一处细节
          </h2>
          <p className="text-lg text-muted max-w-[540px] mx-auto leading-relaxed">
            每一个功能都经过反复打磨，只为提供最流畅的行情查看体验。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.id}
              onMouseEnter={() => setHovered(feature.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-lg bg-canvas p-8 transition-colors duration-300 hover:bg-canvas-card"
              style={{
                border: hovered === feature.id ? "1px solid #e6dfd8" : "1px solid transparent",
              }}
            >
              <div
                className="w-11 h-11 rounded-md flex items-center justify-center mb-5 text-ink"
                style={{
                  backgroundColor: hovered === feature.id ? "#faf9f5" : "#f5f0e8",
                  transition: "background-color 300ms",
                }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-[22px] leading-[1.3] font-medium text-ink mb-2"
                style={{ fontFamily: '"Cormorant Garamond", Garamond, serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-[15px] text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
