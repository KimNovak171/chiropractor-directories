import type { Metadata } from "next";
import Link from "next/link";
import { ClaimForm } from "./ClaimForm";

const CLAIM_PAYMENT_URL = "https://buy.stripe.com/bJebJ1eeC0bd6S27zrfAc0V";

export const metadata: Metadata = {
  title: "Claim Your Chiropractic Practice Listing",
  description:
    "Claim and confirm your chiropractic practice listing on ChiropractorDirectories.com for a one-time $19 fee.",
  alternates: { canonical: "/claim" },
  openGraph: {
    title: "Claim Your Chiropractic Practice Listing",
    description:
      "Claim your practice information and receive a Claimed Listing badge and priority placement for a one-time $19 fee.",
    url: "/claim",
    siteName: "ChiropractorDirectories.com",
    type: "website",
  },
};

const benefits = [
  "A Claimed Listing badge on your listing",
  "Placement below Featured listings and above unclaimed listings in your city",
  "Confirmation or correction of your business name, address, phone number, and website link",
  "One-time payment with no subscription or renewal",
];

const steps = [
  ["Find your listing", "Open your city directory and copy the page address for the practice you represent."],
  ["Submit your claim", "Provide your business details and tell us which information should be confirmed or corrected."],
  ["Complete the $19 payment", "After payment is matched to your request, your claim will be reviewed for the next scheduled directory update."],
];

export default function ClaimPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">
          For Chiropractic Practice Owners
        </p>
        <h1 className="text-3xl font-semibold text-navy sm:text-4xl">
          Claim Your Listing
        </h1>
        <p className="max-w-3xl text-sm text-slate-600">
          Confirm that your practice information is current and help visitors
          distinguish your listing from listings that have not been claimed.
        </p>
      </header>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
        <article className="rounded-xl border border-surface-muted bg-surface p-6 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            One-Time Listing Service
          </p>
          <div className="mt-3 flex flex-wrap items-end gap-x-3 gap-y-1">
            <h2 className="text-2xl font-semibold text-navy">
              Claimed Listing
            </h2>
            <p className="text-xl font-semibold text-teal">$19 one time</p>
          </div>
          <p className="mt-3 text-sm text-slate-600">
            There is no monthly charge. The $19 fee covers claiming an existing
            listing and confirming or correcting its essential contact
            information during a scheduled directory update.
          </p>

          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="font-semibold text-teal" aria-hidden="true">✓</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href="#listing-request"
            className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            Claim Your Listing — $19
          </a>
          <p className="mt-2 text-center text-xs text-slate-500">
            Submit your listing information before continuing to secure payment.
          </p>
        </article>

        <aside className="rounded-xl border border-gold/30 bg-gold/5 p-6">
          <h2 className="text-lg font-semibold text-navy">
            What “Claimed” Means
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            The listing has been claimed by someone who confirmed that they are
            authorized to represent the practice and reviewed the displayed
            contact information.
          </p>
          <p className="mt-3 text-sm text-slate-700">
            It is not an endorsement and does not independently verify licensing,
            credentials, services, or quality of care. Visitors should confirm
            professional standing with the appropriate licensing authority.
          </p>
        </aside>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold text-navy">How It Works</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {steps.map(([title, text], index) => (
            <article
              key={title}
              className="rounded-xl border border-surface-muted border-l-4 border-l-teal bg-surface p-5 shadow-sm"
            >
              <p className="text-sm font-semibold text-teal">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="listing-request" className="mt-10 max-w-3xl scroll-mt-24">
        <div className="mb-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
            Listing Request
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-navy">
            Tell Us About Your Practice
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Submit the information below first. You will then continue to the
            one-time $19 payment.
          </p>
        </div>
        <ClaimForm paymentUrl={CLAIM_PAYMENT_URL} />
      </section>

      <section className="mt-10 rounded-xl border border-surface-muted bg-surface p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-navy">
          Adding or Correcting a Listing
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-slate-600">
          The same one-time $19 service fee applies when an eligible chiropractic
          practice asks to be added to the directory or requests a correction to
          an existing listing. Directory changes are processed in scheduled
          batches rather than individually as they arrive.
        </p>
      </section>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <Link href="/" className="font-medium text-teal hover:text-teal-soft">
          Back to homepage
        </Link>
        <Link href="/advertise" className="font-medium text-teal hover:text-teal-soft">
          Compare Featured Listings
        </Link>
      </div>
    </main>
  );
}
