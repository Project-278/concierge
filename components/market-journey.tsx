"use client";
import { useState } from "react";
import { markets } from "@/data/content";
import { Eyebrow, TextLink } from "./ui";

export function MarketJourney() {
  const [active, setActive] = useState(0);
  return (
    <section className="market-section section-pad" id="growth-journey">
      <div className="container">
        <div className="market-grid">
          <div className="market-copy">
            <Eyebrow number="05">Rooted here. Looking ahead.</Eyebrow>
            <h2>
              From Ghana.
              <br />
              Towards <em>the world.</em>
            </h2>
            <p>
              Our roots give us perspective. Our ambition gives us direction. We
              are building with a view beyond borders.
            </p>
            <TextLink href="/markets" light>
              Explore our market outlook
            </TextLink>
          </div>
          <div
            className={`globe-scene globe-stage-${active}`}
            aria-hidden="true"
          >
            <div className="globe-orbit orbit-one" />
            <div className="globe-orbit orbit-two" />
            <svg className="globe" viewBox="0 0 440 440">
              <defs>
                <pattern
                  id="map-dots"
                  width="5"
                  height="5"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="0.8" fill="#b9ac87" />
                </pattern>
                <clipPath id="globe-circle">
                  <circle cx="220" cy="220" r="183" />
                </clipPath>
              </defs>
              <circle
                cx="220"
                cy="220"
                r="183"
                fill="#173b32"
                stroke="#779084"
                strokeWidth=".6"
              />
              <g
                clipPath="url(#globe-circle)"
                fill="none"
                stroke="#7e9487"
                strokeWidth=".4"
                opacity=".4"
              >
                {[70, 130, 190, 250, 310, 370].map((y) => (
                  <path key={y} d={`M30 ${y} Q220 ${y + 35} 410 ${y}`} />
                ))}
                <ellipse cx="220" cy="220" rx="70" ry="183" />
                <ellipse cx="220" cy="220" rx="140" ry="183" />
                <path d="M220 37v366" />
              </g>
              <g fill="url(#map-dots)" stroke="#b4a782" strokeWidth=".3">
                <path d="m184 157 20-12 31 3 17 15 20 3 16 25 20 4-3 20-24 25-8 33-16 28-10 30-16 16-12-10-10-28-9-20-3-27-18-14-20-8-13-23 3-25 14-23z" />
                <path d="m189 144-2-20 15-13 5-20 21 7 2 21 19-4 7 15-15 17-16-9-20 7zM251 104l21-36 58-12 47 40 25 61-25 7-20-18-12 27-21 4-22-31-35-7zM115 74l24 19-8 28-15 8-12 33-20 9-13 30-20-8-10-29 13-43zM75 215l36 6 22 32-10 31-17 38-12 10-7-40-14-32zM291 285l7-13 7 7-4 26-10 9z" />
              </g>
              <circle
                className="ghana-pulse"
                cx="190"
                cy="227"
                r="15"
                fill="none"
                stroke="#d9ba7c"
                strokeWidth="1"
              />
              <circle cx="190" cy="227" r="4" fill="#e6c484" />
              <path
                d="m190 227-39 40h-58"
                stroke="#d9ba7c"
                fill="none"
                strokeWidth=".8"
              />
              <text
                x="72"
                y="282"
                fill="#f4f1ea"
                fontSize="10"
                letterSpacing="2"
              >
                GHANA
              </text>
              <path
                className="global-path"
                d="M190 227 Q200 65 341 126"
                fill="none"
                stroke="#c6a15b"
                strokeDasharray="3 5"
                strokeWidth="1.2"
              />
            </svg>
            <span className="globe-caption">
              A direction of growth, grounded in Ghana.
            </span>
          </div>
        </div>
        <div
          className="market-tabs"
          role="tablist"
          aria-label="Our growth direction"
        >
          {markets.map((market, i) => (
            <button
              key={market.name}
              id={`market-tab-${i}`}
              role="tab"
              aria-selected={active === i}
              aria-controls="market-panel"
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                let next = i;
                if (e.key === "ArrowRight") next = (i + 1) % markets.length;
                else if (e.key === "ArrowLeft")
                  next = (i + markets.length - 1) % markets.length;
                else if (e.key === "Home") next = 0;
                else if (e.key === "End") next = markets.length - 1;
                else return;
                e.preventDefault();
                setActive(next);
                document.getElementById(`market-tab-${next}`)?.focus();
              }}
              className={active === i ? "active" : ""}
            >
              <span className="index">0{i + 1}</span>
              <span className="market-name">{market.name}</span>
              <span className="market-eyebrow">{market.eyebrow}</span>
              <span className="market-dot" />
            </button>
          ))}
        </div>
        <div
          className="market-panel"
          id="market-panel"
          role="tabpanel"
          aria-labelledby={`market-tab-${active}`}
          tabIndex={0}
        >
          <p>{markets[active].text}</p>
          <span>{markets[active].status}</span>
        </div>
      </div>
    </section>
  );
}
