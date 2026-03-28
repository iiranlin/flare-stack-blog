import type { SiteConfig } from "@/features/config/site-config.schema";

export const blogConfig = {
  title: "古法代码传承者 · 冉林",
  author: "冉林",
  description:
    "用古法的匠心，书写现代代码。这里记录一个开发者在技术探索与生活感悟之间的点滴，欢迎一同慢慢品味。",
  social: [
    { platform: "github", url: "https://github.com/iiranlin" },
    { platform: "email", url: "mailto:mumu@irlin.cn" },
    { platform: "rss", url: "/rss.xml" },
  ],
  icons: {
    faviconSvg: "/favicon.svg",
    faviconIco: "/favicon.ico",
    favicon96: "/favicon-96x96.png",
    appleTouchIcon: "/apple-touch-icon.png",
    webApp192: "/web-app-manifest-192x192.png",
    webApp512: "/web-app-manifest-512x512.png",
  },
  theme: {
    default: {
      navBarName: "冉林の博客",
    },
    fuwari: {
      homeBg: "/images/home-bg.webp",
      avatar: "/avatar.webp",
      primaryHue: 250,
    },
  },
} as const satisfies SiteConfig;
