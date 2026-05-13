export default function CTA() {
  return (
    <section id="安装" className="py-section bg-coral">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="rounded-lg bg-coral p-16 text-center max-w-[720px] mx-auto">
          <h2
            className="text-[36px] leading-[1.15] tracking-[-0.5px] font-normal text-on-coral mb-4"
            style={{ fontFamily: '"Cormorant Garamond", Garamond, serif' }}
          >
            准备开始追踪你的资产了吗？
          </h2>
          <p className="text-lg text-on-coral/80 max-w-[480px] mx-auto leading-relaxed mb-10">
            StockPulse 永久免费，无广告，无追踪。从 Edge 附加组件商店一键安装。
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://microsoftedge.microsoft.com/addons/detail/stockpulse/ambpfpnadmehhfaoealepfgbcdcindll"
              className="inline-flex items-center h-11 px-6 text-sm font-medium text-coral bg-on-coral rounded-md hover:brightness-95 transition-all no-underline"
            >
              立即安装
            </a>
            <a
              href="#"
              className="inline-flex items-center h-11 px-6 text-sm font-medium text-on-coral rounded-md hover:bg-on-coral/10 transition-colors no-underline"
              style={{ border: "1px solid rgba(255,255,255,0.3)" }}
            >
              查看源码
            </a>
          </div>

          <div className="mt-12 pt-10" style={{ borderTop: "1px solid rgba(255,255,255,0.15)" }}>
            <div className="flex items-center justify-center gap-12 text-on-coral/70 text-sm">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
                数据仅存储本地
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                永久免费
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                30 秒自动刷新
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
