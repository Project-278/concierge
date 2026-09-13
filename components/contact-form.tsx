"use client";
import { useCallback, useRef, useState } from "react";
import Link from "next/link";
import { Arrow } from "./ui";
import { enquiryDraft, interests, validateEnquiry } from "@/lib/enquiry";

export function ContactForm({ deliveryEnabled }: { deliveryEnabled: boolean }) {
  const [draft, setDraft] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const feedback = useRef<HTMLDivElement>(null);
  const locked = useRef(false);
  const initialiseInterest = useCallback(
    (element: HTMLSelectElement | null) => {
      if (element) {
        const value = new URLSearchParams(window.location.search).get(
          "interest",
        );
        if (interests.some((i) => i.value === value)) element.value = value!;
      }
    },
    [],
  );
  const showFeedback = () =>
    requestAnimationFrame(() => feedback.current?.focus());
  const download = () => {
    const url = URL.createObjectURL(
      new Blob([draft], { type: "text/plain;charset=utf-8" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "concierge-enquiry.txt";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <form
      className="contact-form"
      onChange={() => {
        setDraft("");
        setSent(false);
        setError("");
      }}
      onSubmit={async (event) => {
        event.preventDefault();
        if (locked.current) return;
        setError("");
        setDraft("");
        setSent(false);
        const form = new FormData(event.currentTarget);
        const result = validateEnquiry({
          name: form.get("name"),
          email: form.get("email"),
          organisation: form.get("organisation"),
          interest: form.get("interest"),
          message: form.get("message"),
          consent: form.get("consent") === "on",
        });
        if (result.error) {
          setError(result.error);
          return;
        }
        if (!result.data) return;
        if (!deliveryEnabled) {
          setDraft(enquiryDraft(result.data));
          showFeedback();
          return;
        }
        locked.current = true;
        setBusy(true);
        try {
          const response = await fetch("/api/enquiry", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(result.data),
            signal: AbortSignal.timeout(15000),
          });
          const body = await response.json();
          if (!response.ok)
            throw new Error(
              body.error ||
                "We could not deliver your enquiry. Please try again.",
            );
          setSent(true);
          showFeedback();
        } catch (error) {
          setError(
            error instanceof Error && error.name !== "TimeoutError"
              ? error.message
              : "Delivery could not be confirmed. Your details are still here; please try again later.",
          );
        } finally {
          locked.current = false;
          setBusy(false);
        }
      }}
    >
      <div className="form-grid">
        <label className="form-field">
          Your name *
          <input
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={120}
            placeholder="Full name"
          />
        </label>
        <label className="form-field">
          Email address *
          <input
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            placeholder="you@organisation.com"
          />
        </label>
        <label className="form-field full">
          Organisation
          <input
            name="organisation"
            autoComplete="organization"
            maxLength={160}
            placeholder="Company or organisation (optional)"
          />
        </label>
        <label className="form-field full">
          Area of interest *
          <select
            name="interest"
            required
            defaultValue="general"
            ref={initialiseInterest}
          >
            {interests.map((i) => (
              <option value={i.value} key={i.value}>
                {i.label}
              </option>
            ))}
          </select>
        </label>
        <label className="form-field full">
          What would you like to explore? *
          <textarea
            name="message"
            required
            minLength={20}
            maxLength={5000}
            rows={5}
            placeholder="Tell us about your priorities, requirements or opportunity."
          />
        </label>
      </div>
      <label className="form-consent">
        <input type="checkbox" name="consent" required />
        <span>
          I have read the <Link href="/privacy">privacy information</Link>
          {deliveryEnabled
            ? " and agree to Concierge Group using these details to respond to my enquiry."
            : " and understand that preparing a draft does not send my enquiry."}
        </span>
      </label>
      <button className="button" type="submit" disabled={busy}>
        {busy
          ? "Sending enquiry…"
          : deliveryEnabled
            ? "Send enquiry"
            : "Prepare enquiry"}
        <Arrow diagonal />
      </button>
      {!deliveryEnabled && (
        <p className="form-mode-note">
          Online delivery is not yet available. You can prepare and download
          your enquiry; your details stay in this browser.
        </p>
      )}
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {(draft || sent) && (
        <div
          ref={feedback}
          tabIndex={-1}
          className="form-feedback"
          role="status"
        >
          <h3>
            {sent
              ? "Thank you for getting in touch."
              : "Your enquiry draft is ready."}
          </h3>
          <p>
            {sent
              ? "Your enquiry has been delivered to our enquiry service."
              : "Your enquiry has not been sent. Download a copy to keep your details ready for a conversation with Concierge Group."}
          </p>
          {draft && (
            <>
              <pre>{draft}</pre>
              <button className="button" type="button" onClick={download}>
                Download enquiry <Arrow />
              </button>
            </>
          )}
        </div>
      )}
    </form>
  );
}
