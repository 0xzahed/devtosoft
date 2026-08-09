import { useState } from "react";

const budgets = ["< $5k", "$5k – $20k", "$20k – $50k", "$50k+"];
const needs = ["Web platform", "Mobile app", "AI automation", "Cloud & DevOps", "Not sure yet"];

export function ContactForm() {
  const [budget, setBudget] = useState(budgets[1]);
  const [need, setNeed] = useState(needs[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const mailto = `mailto:hello@dev2soft.com?subject=${encodeURIComponent(
    `Project enquiry — ${need}`,
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nNeed: ${need}\nBudget: ${budget}\n\n${msg}`,
  )}`;

  const field =
    "w-full border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";

  return (
    <form
      className="grid gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <input
          className={field}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={field}
          type="email"
          placeholder="Work email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <p className="eyebrow text-sm text-muted-foreground">What do you need?</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {needs.map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setNeed(n)}
              className={`eyebrow border px-4 py-2 text-sm transition-colors ${
                need === n
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p className="eyebrow text-sm text-muted-foreground">Budget range</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {budgets.map((b) => (
            <button
              key={b}
              type="button"
              onClick={() => setBudget(b)}
              className={`font-mono border px-4 py-2 text-sm transition-colors ${
                budget === b
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-primary"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </div>

      <textarea
        className={`${field} min-h-32`}
        placeholder="Tell us about the project"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />

      <button
        type="submit"
        className="eyebrow bg-primary px-8 py-4 text-xl text-primary-foreground transition-transform hover:-translate-y-0.5"
      >
        Send enquiry
      </button>
    </form>
  );
}
