"use client";
import { useState } from "react";
import { philosophy } from "@/data/content";
import { Eyebrow } from "./ui";

export function PhilosophySequence() {
  const [active, setActive] = useState(0);
  return (
    <section className="philosophy-section section-pad" id="philosophy">
      <div className="container">
        <div className="section-heading">
          <div>
            <Eyebrow number="03">The Concierge philosophy</Eyebrow>
            <h2>
              Good business begins
              <br />
              with <em>understanding.</em>
            </h2>
          </div>
          <p>
            A simple philosophy.
            <br />A considered approach to everything we do.
          </p>
        </div>
        <div
          className="philosophy-steps"
          role="tablist"
          aria-label="Our approach"
        >
          {philosophy.map((step, i) => (
            <button
              id={`philosophy-tab-${i}`}
              key={step.title}
              role="tab"
              aria-selected={active === i}
              aria-controls="philosophy-panel"
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                let next = i;
                if (e.key === "ArrowRight") next = (i + 1) % philosophy.length;
                else if (e.key === "ArrowLeft")
                  next = (i + philosophy.length - 1) % philosophy.length;
                else if (e.key === "Home") next = 0;
                else if (e.key === "End") next = philosophy.length - 1;
                else return;
                e.preventDefault();
                setActive(next);
                document.getElementById(`philosophy-tab-${next}`)?.focus();
              }}
              className={active === i ? "active" : ""}
            >
              <span>0{i + 1}</span>
              <span>{step.title}</span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        <div
          className="philosophy-detail"
          id="philosophy-panel"
          role="tabpanel"
          aria-labelledby={`philosophy-tab-${active}`}
          tabIndex={0}
        >
          <span className="philosophy-numeral" aria-hidden="true">
            0{active + 1}
          </span>
          <p key={active}>{philosophy[active].text}</p>
          <span className="philosophy-aside">
            From the first conversation
            <br />
            to the value we create.
          </span>
        </div>
      </div>
    </section>
  );
}
