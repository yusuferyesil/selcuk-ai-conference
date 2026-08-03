"use client";

import * as React from "react";

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

export function Countdown({ targetDate }: { targetDate: string }) {
  const target = React.useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = React.useState<ReturnType<typeof getTimeLeft> | null>(null);

  React.useEffect(() => {
    // Set after mount to avoid a server/client hydration mismatch
    setTimeLeft(getTimeLeft(target));
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { value: timeLeft?.days, label: "days" },
    { value: timeLeft?.hours, label: "hrs" },
    { value: timeLeft?.minutes, label: "min" },
    { value: timeLeft?.seconds, label: "sec" },
  ];

  return (
    <div
      className="inline-flex items-baseline divide-x divide-brand-border border border-brand-border bg-brand-surface"
      role="timer"
      aria-label="Time remaining until the conference"
    >
      {units.map((unit) => (
        <div key={unit.label} className="flex flex-col items-center px-5 sm:px-6 py-3.5 first:pl-5">
          <span className="font-mono text-2xl sm:text-3xl text-brand-gold tabular-nums leading-none font-semibold">
            {unit.value === undefined ? "––" : String(unit.value).padStart(2, "0")}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-blackLight mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}
