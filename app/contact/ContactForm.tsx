"use client";
import { useState } from "react";
export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xbdznngq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok) {
        setSubmittedEmail(email);
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  if (status === "success") {
    return (
      <div className="rounded-xl border border-surface-muted bg-surface p-6 shadow-sm text-sm text-slate-700">
        <p className="font-semibold text-navy">Message sent!</p>
        <p className="mt-1">Thank you for reaching out. We will reply to you at {submittedEmail} within 24 hours.</p>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-surface-muted bg-surface p-6 shadow-sm">
      <div className="space-y-4">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-navy">Name</label>
          <input id="contact-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-navy">Email</label>
          <input id="contact-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal" placeholder="your@email.com" />
        </div>
        <div>
          <label htmlFor="contact-message" className="block text-sm font-medium text-navy">Message</label>
          <textarea id="contact-message" rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required className="mt-1 block w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-teal focus:outline-none focus:ring-1 focus:ring-teal" placeholder="Your message..." />
        </div>
        <button type="submit" disabled={status === "sending"} className="inline-flex w-full items-center justify-center rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:opacity-60">
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "error" && <p className="text-sm text-red-600">Something went wrong. Please email us directly at hello@directoriesnetwork.com</p>}
      </div>
    </form>
  );
}
