"use client";

import { useState } from "react";
import { ContactContent } from "@/content/contact";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-cream/20 bg-charcoal px-4 py-3 text-sm text-cream placeholder:text-cream/30 outline-none transition-colors focus:border-amber";

const labelClasses = "text-sm font-medium text-cream/85";

export default function ContactForm({ data }: { data: ContactContent["form"] }) {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      inquiryType: formData.get("inquiryType"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-cream/10 bg-white/[0.02] p-8 sm:p-10"
    >
      <h2 className="text-2xl font-bold tracking-tight text-cream">
        {data.heading}
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className={labelClasses}>
            {data.nameLabel} <span className="text-amber">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder={data.namePlaceholder}
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className={labelClasses}>
            {data.companyLabel}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder={data.companyPlaceholder}
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className={labelClasses}>
            {data.emailLabel} <span className="text-amber">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder={data.emailPlaceholder}
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className={labelClasses}>
            {data.phoneLabel}{" "}
            <span className="text-cream/40">{data.phoneOptional}</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder={data.phonePlaceholder}
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="inquiryType" className={labelClasses}>
            {data.inquiryLabel}
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            defaultValue={data.inquiryOptions[0]?.value}
            className={`${inputClasses} appearance-none`}
          >
            {data.inquiryOptions.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-charcoal">
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className={labelClasses}>
            {data.messageLabel} <span className="text-amber">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder={data.messagePlaceholder}
            className={`${inputClasses} resize-none`}
          />
        </div>
      </div>

      <p className="mt-4 text-xs text-cream/40">* {data.requiredNote}</p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-3.5 text-sm font-semibold text-cream transition-all duration-200 hover:bg-amber/90 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:text-base"
      >
        {status === "submitting" ? data.submittingLabel : data.submitLabel}
      </button>

      {status === "success" && (
        <p className="mt-5 rounded-xl border border-steel/50 bg-steel/15 px-5 py-4 text-sm text-cream/85">
          {data.successMessage}
        </p>
      )}
      {status === "error" && (
        <p className="mt-5 rounded-xl border border-amber/40 bg-amber/10 px-5 py-4 text-sm text-cream/85">
          {data.errorMessage}
        </p>
      )}
    </form>
  );
}
