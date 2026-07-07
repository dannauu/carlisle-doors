import type { Service } from "@/data/services";

const paths: Record<Service["icon"], React.ReactNode> = {
  wrench: (
    <path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.6L3 17.6V21h3.4l5.7-5.7a4.5 4.5 0 0 0 5.6-6l-3.1 3.1-2.5-.5-.5-2.5 3.1-3.1Z" />
  ),
  install: (
    <>
      <rect x="3" y="4" width="18" height="17" rx="1" />
      <path d="M3 9h18M3 13.5h18M3 18h18M12 4v0" />
    </>
  ),
  spring: (
    <path d="M5 4h14M5 20h14M7 4c0 2 10 2 10 4s-10 2-10 4 10 2 10 4-10 2-10 4" />
  ),
  opener: (
    <>
      <rect x="4" y="8" width="16" height="9" rx="1.5" />
      <circle cx="9" cy="12.5" r="1.6" />
      <path d="M13.5 11h4M13.5 14h4M12 8V4l-3 2" />
    </>
  ),
  bolt: <path d="M13 2 4.5 13.5H11L9.5 22 19 10h-6.5L13 2Z" />,
  warehouse: (
    <>
      <path d="M3 21V9l9-5 9 5v12" />
      <path d="M7 21v-8h10v8M7 16.5h10" />
    </>
  ),
  track: (
    <>
      <path d="M4 20 18 6M6.5 22 20.5 8" />
      <circle cx="8" cy="16" r="1.4" />
      <circle cx="13" cy="11" r="1.4" />
      <path d="M17 4l3 3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 5.5V11c0 5.2 3.4 9.4 8 11 4.6-1.6 8-5.8 8-11V5.5L12 2Z" />
      <path d="m8.5 11.5 2.5 2.5 4.5-4.5" />
    </>
  ),
};

export default function ServiceIcon({
  icon,
  className = "h-8 w-8",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[icon]}
    </svg>
  );
}
