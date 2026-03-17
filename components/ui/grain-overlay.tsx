type GrainOverlayProps = {
  className?: string;
};

export function GrainOverlay({ className }: GrainOverlayProps) {
  return (
    <div
      aria-hidden="true"
      className={["pointer-events-none absolute inset-0 opacity-20 mix-blend-screen", className]
        .filter(Boolean)
        .join(" ")}
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.16) 0, transparent 28%), radial-gradient(circle at 80% 0%, rgba(199,168,106,0.16) 0, transparent 24%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.08) 0, transparent 20%)",
      }}
    />
  );
}
