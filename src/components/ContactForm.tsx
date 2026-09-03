"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { conferenceData } from "@/data/conference";
import { Dictionary } from "@/i18n";

export function ContactForm({ dict }: { dict: Dictionary["contactPage"] }) {
  const subjects = [
    dict.subject1,
    dict.subject2,
    dict.subject3,
    dict.subject4,
    dict.subject5,
  ];

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState(subjects[0]);
  const [message, setMessage] = React.useState("");

  const inputClass =
    "w-full border border-brand-border rounded-sm px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const url = `mailto:${conferenceData.email}?subject=${encodeURIComponent(
      `[${subject}] ${conferenceData.edition} website inquiry`
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-brand-black block">
            {dict.nameLabel}
          </label>
          <input
            type="text" id="name" required value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass} placeholder={dict.namePlaceholder} autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-brand-black block">
            {dict.emailLabel}
          </label>
          <input
            type="email" id="email" required value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass} placeholder={dict.emailPlaceholder} autoComplete="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-brand-black block">
          {dict.subjectLabel}
        </label>
        <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass}>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-brand-black block">
          {dict.messageLabel}
        </label>
        <textarea
          id="message" rows={5} required value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass} placeholder={dict.messagePlaceholder}
        />
      </div>
      <Button size="lg" type="submit" className="w-full">{dict.sendButton}</Button>
      <p className="text-xs text-brand-blackLight font-light">
        {dict.disclaimer}
      </p>
    </form>
  );
}
