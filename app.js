const caseData = {
  cooking: {
    index: "01",
    domain: "Everyday Tutorials",
    title: "Cooking Tutorial from Raw Video",
    summary:
      "Turn a cooking-and-cleanup video into interleaved instructional data that feels like a real tutorial page.",
    input: "Cooking video with multi-step actions and cleanup stages.",
    intent: "Build interleaved tutorial data that teaches procedural understanding.",
    output:
      "Stepwise image-text instruction samples with natural user questions and answers.",
    why: "It shows that DataClaw constructs the supervision format the user wants, not just a generic summary.",
    tags: ["tutorial", "interleaved", "video-to-data"],
  },
  geometry: {
    index: "02",
    domain: "Education",
    title: "Geometry Stuck Point Reasoning",
    summary:
      "Focus only on the step where a student is most likely to get stuck, then construct the exact tutoring supervision needed there.",
    input: "Classroom solution video with board writing and intermediate reasoning states.",
    intent: "Generate image-text tutoring data for the hardest reasoning step.",
    output: "Guided problem-solving sequence centered on the critical stuck point.",
    why: "High-value supervision often lives at the hard step, not in a full replay of the whole solution.",
    tags: ["education", "reasoning", "stuck-point"],
  },
  temporal: {
    index: "06",
    domain: "Temporal Understanding",
    title: "Temporal QA Construction",
    summary:
      "Construct localization, ordering, state-change, and multi-event reasoning queries from one source video.",
    input: "Video with actions, time ranges, object states, and event dependencies.",
    intent: "Build temporal understanding data across multiple reasoning difficulties.",
    output: "Temporal QA, event ordering, state transitions, and multi-event queries.",
    why: "One raw video can support far richer supervision than a single caption or label.",
    tags: ["temporal", "qa", "state-change"],
  },
  gui: {
    index: "03",
    domain: "GUI Agents",
    title: "Long-Horizon GUI Task Composition",
    summary:
      "Compose short app traces into coherent, goal-driven long tasks such as price comparison and route planning.",
    input: "Short mobile or desktop GUI traces with reusable start and end states.",
    intent: "Build agent trajectories for long-horizon, multi-step interface tasks.",
    output: "Structured GUI task chains with state continuity and action ordering.",
    why: "It upgrades fragmented interaction snippets into agent-ready supervision.",
    tags: ["gui", "agent", "long-horizon"],
  },
  embodied: {
    index: "04",
    domain: "Embodied",
    title: "Embodied Fault Recovery",
    summary:
      "Turn successful robot trajectories into abnormal-state recovery samples that teach diagnosis and correction.",
    input: "Robot manipulation trajectories and the corresponding success states.",
    intent: "Construct world-model training data for failure recognition and recovery.",
    output: "Fault judgment, reasoning traces, and corrected future actions or videos.",
    why: "Useful embodied data often comes from modeling what should happen after things go wrong.",
    tags: ["robotics", "world-model", "fault-repair"],
  },
  editing: {
    index: "05",
    domain: "Generation",
    title: "Ego Image Editing Samples",
    summary:
      "Generate edit targets that stay aligned with the current scene, instruction, and visual constraints.",
    input: "Egocentric images with an editing instruction grounded in the current environment.",
    intent: "Build controllable image editing supervision from raw first-person material.",
    output: "Instruction-conditioned editing pairs with reasoning and target image outputs.",
    why: "The same scene can become training data for generation once user intent specifies the transformation.",
    tags: ["editing", "egocentric", "generation"],
  },
};

const revealItems = document.querySelectorAll(".reveal");
const cursorGlow = document.querySelector(".cursor-glow");

const methodArchitecture = document.getElementById("method-architecture");
const flowFocusables = Array.from(document.querySelectorAll("[data-flow-focus]"));
const flowNodes = Array.from(document.querySelectorAll("[data-flow-group]"));
const flowPaths = Array.from(document.querySelectorAll("[data-flow-path]"));

const spotlightIndex = document.getElementById("spotlight-index");
const spotlightDomain = document.getElementById("spotlight-domain");
const spotlightTitle = document.getElementById("spotlight-title");
const spotlightSummary = document.getElementById("spotlight-summary");
const spotlightInput = document.getElementById("spotlight-input");
const spotlightIntent = document.getElementById("spotlight-intent");
const spotlightOutput = document.getElementById("spotlight-output");
const spotlightWhy = document.getElementById("spotlight-why");
const spotlightTags = document.getElementById("spotlight-tags");
const caseSpotlight = document.getElementById("case-spotlight");
const caseNavItems = Array.from(document.querySelectorAll(".case-nav-item"));
let spotlightSwapTimer;

if (methodArchitecture) {
  methodArchitecture.classList.remove("is-focused");
}

function setSpotlight(caseKey) {
  const item = caseData[caseKey];
  if (!item) {
    return;
  }

  spotlightIndex.textContent = item.index;
  spotlightDomain.textContent = item.domain;
  spotlightTitle.textContent = item.title;
  spotlightSummary.textContent = item.summary;
  spotlightInput.textContent = item.input;
  spotlightIntent.textContent = item.intent;
  spotlightOutput.textContent = item.output;
  spotlightWhy.textContent = item.why;

  spotlightTags.innerHTML = "";
  item.tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.textContent = tag;
    spotlightTags.appendChild(chip);
  });

  caseNavItems.forEach((itemNode) => {
    const isActive = itemNode.dataset.caseTarget === caseKey;
    itemNode.classList.toggle("is-active", isActive);
    itemNode.setAttribute("aria-pressed", String(isActive));
  });

  if (caseSpotlight) {
    caseSpotlight.classList.remove("is-swapping");
    void caseSpotlight.offsetWidth;
    caseSpotlight.classList.add("is-swapping");

    clearTimeout(spotlightSwapTimer);
    spotlightSwapTimer = window.setTimeout(() => {
      caseSpotlight.classList.remove("is-swapping");
    }, 360);
  }
}

caseNavItems.forEach((itemNode) => {
  itemNode.addEventListener("mouseenter", () => {
    setSpotlight(itemNode.dataset.caseTarget);
  });

  itemNode.addEventListener("focus", () => {
    setSpotlight(itemNode.dataset.caseTarget);
  });

  itemNode.addEventListener("click", () => {
    setSpotlight(itemNode.dataset.caseTarget);
  });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.18 },
);

revealItems.forEach((item) => revealObserver.observe(item));

window.addEventListener("pointermove", (event) => {
  if (!cursorGlow) {
    return;
  }

  cursorGlow.style.transform = `translate(${event.clientX}px, ${event.clientY}px) translate(-50%, -50%)`;
  cursorGlow.style.opacity = "1";
});

window.addEventListener("pointerleave", () => {
  if (!cursorGlow) {
    return;
  }

  cursorGlow.style.opacity = "0";
});

setSpotlight("cooking");
