import { useEffect, useRef, useState } from "react"

// Real SVG logos bundled directly into JS — zero network requests
import btcSvg from "cryptocurrency-icons/svg/color/btc.svg?raw"
import ethSvg from "cryptocurrency-icons/svg/color/eth.svg?raw"
import solSvg from "cryptocurrency-icons/svg/color/sol.svg?raw"
import bnbSvg from "cryptocurrency-icons/svg/color/bnb.svg?raw"
import xrpSvg from "cryptocurrency-icons/svg/color/xrp.svg?raw"
import adaSvg from "cryptocurrency-icons/svg/color/ada.svg?raw"
import dogeSvg from "cryptocurrency-icons/svg/color/doge.svg?raw"
import avaxSvg from "cryptocurrency-icons/svg/color/avax.svg?raw"
import dotSvg from "cryptocurrency-icons/svg/color/dot.svg?raw"
import maticSvg from "cryptocurrency-icons/svg/color/matic.svg?raw"
import linkSvg from "cryptocurrency-icons/svg/color/link.svg?raw"
import uniSvg from "cryptocurrency-icons/svg/color/uni.svg?raw"
import atomSvg from "cryptocurrency-icons/svg/color/atom.svg?raw"
import aptSvg from "../assets/apt.svg?raw"
import arbSvg from "../assets/arb.svg?raw"
import opSvg from "../assets/op.svg?raw"

const BUNDLED_SVG: Record<string, string> = {
  BTC: btcSvg,
  ETH: ethSvg,
  SOL: solSvg,
  BNB: bnbSvg,
  XRP: xrpSvg,
  ADA: adaSvg,
  DOGE: dogeSvg,
  AVAX: avaxSvg,
  DOT: dotSvg,
  MATIC: maticSvg,
  LINK: linkSvg,
  UNI: uniSvg,
  ATOM: atomSvg,
  APT: aptSvg,
  ARB: arbSvg,
  OP: opSvg,
}

// APT/ARB/OP are newer coins not in cryptocurrency-icons.
// In real browsers, CoinGecko CDN works fine — we try the actual logo PNG first.
const CDN_PNG: Record<string, string> = {
  APT: "https://coin-images.coingecko.com/coins/images/26455/large/aptos.png",
  ARB: "https://coin-images.coingecko.com/coins/images/16547/large/arbitrum.png",
  OP: "https://coin-images.coingecko.com/coins/images/25244/large/optimism.png",
}

const COINS = [
  { sym: "BTC", color: "#f7931a" },
  { sym: "ETH", color: "#627eea" },
  { sym: "SOL", color: "#9945ff" },
  { sym: "BNB", color: "#f3ba2f" },
  { sym: "XRP", color: "#23292f" },
  { sym: "ADA", color: "#0033ad" },
  { sym: "DOGE", color: "#c2a633" },
  { sym: "AVAX", color: "#e84142" },
  { sym: "DOT", color: "#e6007a" },
  { sym: "MATIC", color: "#8247e5" },
  { sym: "LINK", color: "#2a5ada" },
  { sym: "UNI", color: "#ff007a" },
  { sym: "ATOM", color: "#2e3148" },
  { sym: "APT", color: "#00b4b4" },
  { sym: "ARB", color: "#28a0f0" },
  { sym: "OP", color: "#ff0420" },
]

const ROW = [...COINS, ...COINS]

function CoinImage({ sym, size }: { sym: string; size: number }) {
  const png = CDN_PNG[sym]
  const svg = BUNDLED_SVG[sym]
  const [useSvg, setUseSvg] = useState(!png)

  if (useSvg) {
    return (
      <div
        className="flex-shrink-0 coin-logo-svg"
        style={{ width: size, height: size }}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    )
  }

  return (
    <img
      src={png}
      alt={sym}
      width={size}
      height={size}
      className="flex-shrink-0 rounded-full object-contain"
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => setUseSvg(true)}
      style={{ width: size, height: size }}
    />
  )
}

export default function CoinMarquee() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const row1 = row1Ref.current
    const row2 = row2Ref.current
    if (!row1 || !row2) return

    let pos = 0
    const speed = 0.3
    const rowWidth = row1.scrollWidth / 2
    let rafId: number

    const animate = () => {
      pos -= speed
      if (pos <= -rowWidth) pos += rowWidth
      row1.style.transform = `translateX(${pos}px)`
      row2.style.transform = `translateX(${pos}px)`
      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <div className="marquee-container relative w-full overflow-hidden py-10">
      {/* Row 1 */}
      <div className="relative h-20 mb-4 overflow-hidden">
        <div ref={row1Ref} className="absolute flex gap-10 will-change-transform" style={{ whiteSpace: "nowrap" }}>
          {ROW.map((coin, i) => {
            const sizes = [48, 56, 64, 44, 60, 52, 48, 56, 50, 60, 44, 56, 52, 48, 60, 50]
            const s = sizes[i % sizes.length]
            const yOffs = [0, 6, -3, 10, -7, 3, 0, -5, 8, -2, 5, -9, 0, 6, -3, 10]
            return (
              <div
                key={`r1-${coin.sym}-${i}`}
                className="flex-shrink-0 flex items-center justify-center rounded-full bg-canvas-card/50 p-2"
                style={{
                  width: s + 14,
                  height: s + 14,
                  transform: `translateY(${yOffs[i % yOffs.length]}px)`,
                }}
              >
                <CoinImage sym={coin.sym} size={s} />
              </div>
            )
          })}
        </div>
      </div>

      {/* Row 2 */}
      <div className="relative h-14 overflow-hidden">
        <div ref={row2Ref} className="absolute flex gap-7 will-change-transform" style={{ whiteSpace: "nowrap" }}>
          {ROW.map((coin, i) => {
            const sizes = [32, 40, 28, 38, 34, 42, 30, 36, 40, 28, 34, 38, 32, 42, 30, 36]
            const s = sizes[i % sizes.length]
            const yOffs = [0, -4, 2, -6, 4, -2, 0, -5, 6, -1, 3, -5, 0, -4, 2, -6]
            return (
              <div
                key={`r2-${coin.sym}-${i}`}
                className="flex-shrink-0 flex items-center justify-center rounded-full bg-canvas-card/30 p-1.5"
                style={{
                  width: s + 10,
                  height: s + 10,
                  transform: `translateY(${yOffs[i % yOffs.length]}px)`,
                }}
              >
                <CoinImage sym={coin.sym} size={s} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
