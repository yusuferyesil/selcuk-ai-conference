"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";
import { conferenceData } from "@/data/conference";

const subjects = [
  "Paper Submission Inquiry",
  "Registration & Payment",
  "Sponsorship Opportunities",
  "Visa Letters",
  "Other",
];

const inputClass =
  "w-full border border-brand-border rounded-sm px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-all";

/**
 * The site has no backend yet, so the form composes a pre-filled e-mail
 * in the visitor's mail client. Swap handleSubmit with a POST to your
 * API endpoint or form service when one is available.
 */
export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState(subjects[0]);
  const [message, setMessage] = React.useState("");

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
          <label htmlFor="name" className="text-sm font-medium text-brand-black block">Name</label>
          <input
            type="text" id="name" required value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClass} placeholder="Your full name" autoComplete="name"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-brand-black block">Email</label>
          <input
            type="email" id="email" required value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass} placeholder="name@university.edu" autoComplete="email"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium text-brand-black block">Subject Category</label>
        <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass}>
          {subjects.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-brand-black block">Message</label>
        <textarea
          id="message" rows={5} required value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClass} placeholder="How can we help you?"
        />
      </div>
      <Button size="lg" type="submit" className="w-full">Send Message</Button>
      <p className="text-xs text-brand-blackLight font-light">
        Sending opens your e-mail client with a pre-filled message to {conferenceData.email}.
      </p>
    </form>
  );
}
