import { MessageCircle, Instagram, Facebook, Youtube, Send } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

const TikTokIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M16.5 3a5.5 5.5 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.3v6.3a6 6 0 1 1-6-6c.3 0 .67.03 1 .08v3.18a3 3 0 1 0 2 2.82V3h3z" />
  </svg>
);

type Social = {
  href: string;
  label: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
};

export const socials: Social[] = [
  { href: "https://wa.me/+6588539455", label: "WhatsApp", Icon: MessageCircle as never },
  { href: "https://www.instagram.com/yuchengfengshui", label: "Instagram", Icon: Instagram as never },
  { href: "https://www.facebook.com/yuchengfengshui", label: "Facebook", Icon: Facebook as never },
  { href: "https://www.tiktok.com/@yuchengfengshui", label: "TikTok", Icon: TikTokIcon },
  { href: "https://www.youtube.com/@yuchengfengshui", label: "YouTube", Icon: Youtube as never },
  { href: "https://t.me/yuchengfengshui", label: "Telegram", Icon: Send as never },
];