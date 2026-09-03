"use client";

import * as React from "react";

import { Locale } from "@/i18n";

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

const unitLabels: Record<string, { days: string; hours: string; minutes: string; seconds: string }> = {
  tr: { days: "gün", hours: "saat", minutes: "dk", seconds: "sn" },
  de: { days: "Tage", hours: "Std", minutes: "Min", seconds: "Sek" },
  ru: { days: "дней", hours: "часов", minutes: "мин", seconds: "сек" },
  ar: { days: "يوم", hours: "ساعة", minutes: "دقيقة", seconds: "ثانية" },
  en: { days: "days", hours: "hrs", minutes: "min", seconds: "sec" }
};

export function Countdown({ targetDate, lang = "en" }: { targetDate: string; lang?: Locale }) {
  const target = React.useMemo(() => new Date(targetDate).getTime(), [targetDate]);
  const [timeLeft, setTimeLeft] = React.useState<ReturnType<typeof getTimeLeft> | null>(null);

  React.useEffect(() => {
    // Set after mount to avoid a server/client hydration mismatch
    setTimeLeft(getTimeLeft(target));
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const labels = unitLabels[lang] || unitLabels.en;

  const units = [
    { value: timeLeft?.days, label: labels.days },
    { value: timeLeft?.hours, label: labels.hours },
    { value: timeLeft?.minutes, label: labels.minutes },
    { value: timeLeft?.seconds, label: labels.seconds },
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
