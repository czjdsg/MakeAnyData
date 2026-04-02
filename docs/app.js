const caseData = {
  cooking: {
    index: "01",
    domain: "Everyday Tutorials",
    title: "Cooking Tutorial from Raw Video",
    summary:
      "The system turns one first-person cooking clip into a tutorial-style dataset with images, step text, and user-facing instructional phrasing.",
    tags: ["tutorial", "interleaved", "video-to-data"],
    pipeline: {
      inputTitle: "Raw Video + User Intent",
      inputIntent: "这是做饭视频，帮我生成步骤拆解的图文交错数据",
      inputNote:
        "A full cooking-and-cleanup video covering timer setup, stir-frying, heat control, and final cleanup.",
      inputFallbackKicker: "Source material",
      inputFallbackTitle: "Egocentric cooking video",
      inputFallbackCopy:
        "A kitchen POV clip with clear action transitions from preparation to cleanup.",
      inputVideo: "./assets/case1/full_video.mp4",
      inputPoster: "./assets/case1/1.png",
      thinkingTitle: "Key Model Thinking",
      thoughts: [
        {
          step: "01",
          title: "Understand the source clip",
          body: "Recognize the video as a complete cooking-and-cleanup procedure instead of an isolated kitchen moment.",
        },
        {
          step: "02",
          title: "Choose the target data form",
          body: "Rewrite the request into an interleaved tutorial dataset with tutorial-style questions, answers, and visual steps.",
        },
        {
          step: "03",
          title: "Select the key visual states",
          body: "Keep timer setup, stir-frying progress, heat control, and cleanup actions as the supervisory keyframes.",
        },
        {
          step: "04",
          title: "Package it as teachable supervision",
          body: "Deliver a tutorial sample that reads like a real cooking guide instead of a raw caption dump.",
        },
      ],
      outputTitle: "Delivered Data",
      outputQuestion: "user_question: 如何炒肉",
      outputText:
        "首先设置定时器，然后围绕炒肉、调火、关火和清理阶段组织图文教程样本。关键帧配合自然教程语气，形成可以直接训练的图文交错数据。",
      outputNote:
        "Interleaved image-text tutorial data with extracted keyframes and user-facing instructional text.",
      gallery: [
        { src: "./assets/case1/1.png", alt: "Set a timer before cooking.", label: "Set timer" },
        { src: "./assets/case1/2.PNG", alt: "Stir the meat during cooking.", label: "Stir meat" },
        { src: "./assets/case1/3.PNG", alt: "Turn off the heat and move the pan.", label: "Turn off heat" },
        { src: "./assets/case1/4.PNG", alt: "Clean up and throw paper into the bin.", label: "Clean up" },
      ],
    },
  },
  geometry: {
    index: "02",
    domain: "Education",
    title: "Geometry Stuck Point Reasoning",
    summary:
      "Rather than replaying a full solution, the system isolates the hardest geometric reasoning step and turns it into targeted tutoring supervision.",
    tags: ["education", "reasoning", "stuck-point"],
    pipeline: {
      inputTitle: "Source Lesson + User Intent",
      inputIntent: "Generate tutoring data focused on the exact step where the learner gets stuck.",
      inputNote: "Board-writing lesson video with intermediate equations, diagrams, and reasoning transitions.",
      inputFallbackKicker: "Source material",
      inputFallbackTitle: "Geometry lesson recording",
      inputFallbackCopy: "The clip contains a full worked solution, but only one reasoning jump matters most.",
      thinkingTitle: "Key Model Thinking",
      thoughts: [
        {
          step: "01",
          title: "Locate the real bottleneck",
          body: "Find the step where the solution changes from routine manipulation to actual geometric inference.",
        },
        {
          step: "02",
          title: "Rewrite the explanation target",
          body: "Turn that bottleneck into a tutoring instruction that can guide the learner through the key deduction.",
        },
        {
          step: "03",
          title: "Export high-value supervision",
          body: "Package diagrams, text hints, and the reasoning bridge as a focused tutoring sample.",
        },
      ],
      outputTitle: "Delivered Data",
      outputQuestion: "student_question: 为什么这里能推出这条辅助线？",
      outputText:
        "A targeted tutoring sample centered on the exact stuck point, with aligned visual evidence and stepwise explanation.",
      outputNote: "High-value tutoring supervision is concentrated on the hard step, not the full replay.",
      gallery: [],
    },
  },
  temporal: {
    index: "06",
    domain: "Temporal Understanding",
    title: "Temporal QA Construction",
    summary:
      "One source video can be expanded into localization, ordering, state-change, and multi-event temporal supervision.",
    tags: ["temporal", "qa", "state-change"],
    pipeline: {
      inputTitle: "Source Video + User Intent",
      inputIntent: "Build temporal reasoning data with diverse difficulty levels.",
      inputNote: "A single video with actions, timestamps, state transitions, and event dependencies.",
      inputFallbackKicker: "Source material",
      inputFallbackTitle: "Temporal event video",
      inputFallbackCopy: "The clip contains enough event structure to support much more than a plain description.",
      thinkingTitle: "Key Model Thinking",
      thoughts: [
        {
          step: "01",
          title: "Detect time-sensitive evidence",
          body: "Identify event boundaries, object state changes, and overlapping actions.",
        },
        {
          step: "02",
          title: "Diversify temporal tasks",
          body: "Map the same source into localization, ordering, state-change, and multi-event reasoning tasks.",
        },
        {
          step: "03",
          title: "Export multi-granularity labels",
          body: "Deliver supervision with timestamps, temporal relations, and event-level questions.",
        },
      ],
      outputTitle: "Delivered Data",
      outputQuestion: "temporal_question: 先发生的是哪一个事件？",
      outputText: "Temporal QA pairs, timestamped spans, and state-transition labels exported from one source clip.",
      outputNote: "Richer temporal supervision than a single caption or class label.",
      gallery: [],
    },
  },
  gui: {
    index: "03",
    domain: "GUI Agents",
    title: "Long-Horizon GUI Task Composition",
    summary:
      "Short interaction snippets are composed into coherent long-horizon interface tasks that an agent can actually learn from.",
    tags: ["gui", "agent", "long-horizon"],
    pipeline: {
      inputTitle: "GUI Trace + User Intent",
      inputIntent: "Build long-horizon interface trajectories for agent training.",
      inputNote: "Short mobile or desktop traces with reusable state transitions and action fragments.",
      inputFallbackKicker: "Source material",
      inputFallbackTitle: "Fragmented GUI traces",
      inputFallbackCopy: "Individual app segments do not yet form a complete goal-driven task.",
      thinkingTitle: "Key Model Thinking",
      thoughts: [
        {
          step: "01",
          title: "Match reusable states",
          body: "Find how short snippets can connect through compatible interface states and goals.",
        },
        {
          step: "02",
          title: "Compose the task chain",
          body: "Turn disconnected actions into one coherent multi-step objective such as route planning or comparison shopping.",
        },
        {
          step: "03",
          title: "Export agent supervision",
          body: "Deliver ordered trajectories with state continuity, actions, and outcome structure.",
        },
      ],
      outputTitle: "Delivered Data",
      outputQuestion: "agent_task: Compare prices across apps and complete checkout planning.",
      outputText: "A long-horizon GUI task chain with aligned state transitions and ordered actions.",
      outputNote: "Fragmented traces become agent-ready supervision once they are composed into a goal path.",
      gallery: [],
    },
  },
  embodied: {
    index: "04",
    domain: "Embodied",
    title: "Embodied Fault Recovery",
    summary:
      "Successful robot demonstrations are transformed into fault diagnosis and recovery supervision for embodied agents.",
    tags: ["robotics", "world-model", "fault-repair"],
    pipeline: {
      inputTitle: "Robot Trajectory + User Intent",
      inputIntent: "Construct recovery data that teaches fault recognition and correction.",
      inputNote: "Robot manipulation traces with normal outcomes and state transitions.",
      inputFallbackKicker: "Source material",
      inputFallbackTitle: "Successful robot trajectory",
      inputFallbackCopy: "The nominal trace becomes more useful once the system asks how recovery should happen under failure.",
      thinkingTitle: "Key Model Thinking",
      thoughts: [
        {
          step: "01",
          title: "Model normal execution",
          body: "Understand what a successful embodied rollout should look like across states and actions.",
        },
        {
          step: "02",
          title: "Inject recoverable faults",
          body: "Derive abnormal states and failure conditions that still admit meaningful recovery behavior.",
        },
        {
          step: "03",
          title: "Export correction supervision",
          body: "Deliver diagnosis, reasoning traces, and corrected future actions or predicted videos.",
        },
      ],
      outputTitle: "Delivered Data",
      outputQuestion: "recovery_task: The gripper missed the object. What should the robot do next?",
      outputText: "Embodied recovery supervision with fault judgment, reasoning, and corrected future behavior.",
      outputNote: "World-model data gets stronger when it includes what should happen after failure.",
      gallery: [],
    },
  },
  editing: {
    index: "05",
    domain: "Generation",
    title: "Ego Image Editing Samples",
    summary:
      "The same first-person scene becomes controllable editing supervision once user intent specifies the transformation target.",
    tags: ["editing", "egocentric", "generation"],
    pipeline: {
      inputTitle: "Scene Image + User Intent",
      inputIntent: "Build controllable editing supervision grounded in the current scene.",
      inputNote: "Egocentric images paired with user editing instructions and visual constraints.",
      inputFallbackKicker: "Source material",
      inputFallbackTitle: "Grounded scene image",
      inputFallbackCopy: "The system starts from a real scene instead of synthetic prompt-only generation.",
      thinkingTitle: "Key Model Thinking",
      thoughts: [
        {
          step: "01",
          title: "Parse the edit request",
          body: "Understand which parts of the scene should change and which visual constraints must stay stable.",
        },
        {
          step: "02",
          title: "Ground the transformation",
          body: "Tie the requested edit to real objects, layout, and viewpoint from the source image.",
        },
        {
          step: "03",
          title: "Export controllable pairs",
          body: "Deliver instruction-conditioned before/after supervision with grounded reasoning.",
        },
      ],
      outputTitle: "Delivered Data",
      outputQuestion: "edit_instruction: Replace the cup on the table with a glass bottle.",
      outputText: "Instruction-conditioned editing pairs with scene-grounded reasoning and target outputs.",
      outputNote: "Generation data stays controllable because the requested edit is grounded in the source scene.",
      gallery: [],
    },
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
const spotlightTags = document.getElementById("spotlight-tags");
const caseSpotlight = document.getElementById("case-spotlight");
const caseNavItems = Array.from(document.querySelectorAll(".case-nav-item"));
const caseStageInputTitle = document.getElementById("case-stage-input-title");
const caseStageThinkingTitle = document.getElementById("case-stage-thinking-title");
const caseStageOutputTitle = document.getElementById("case-stage-output-title");
const caseInputVideo = document.getElementById("case-input-video");
const caseInputFallback = document.getElementById("case-input-fallback");
const caseInputKicker = document.getElementById("case-input-kicker");
const caseInputFallbackTitle = document.getElementById("case-input-fallback-title");
const caseInputFallbackCopy = document.getElementById("case-input-fallback-copy");
const caseInputIntent = document.getElementById("case-input-intent");
const caseInputNote = document.getElementById("case-input-note");
const caseThoughtGrid = document.getElementById("case-thought-grid");
const caseOutputGallery = document.getElementById("case-output-gallery");
const caseOutputQuestion = document.getElementById("case-output-question");
const caseOutputText = document.getElementById("case-output-text");
const caseOutputNote = document.getElementById("case-output-note");
let spotlightSwapTimer;

if (methodArchitecture) {
  methodArchitecture.classList.remove("is-focused");
}

function setSpotlight(caseKey) {
  const item = caseData[caseKey];
  if (!item) {
    return;
  }

  const pipeline = item.pipeline || {};

  spotlightIndex.textContent = item.index;
  spotlightDomain.textContent = item.domain;
  spotlightTitle.textContent = item.title;
  spotlightSummary.textContent = item.summary;

  caseStageInputTitle.textContent = pipeline.inputTitle || "Raw Input";
  caseStageThinkingTitle.textContent = pipeline.thinkingTitle || "Key Model Thinking";
  caseStageOutputTitle.textContent = pipeline.outputTitle || "Delivered Data";
  caseInputIntent.textContent = pipeline.inputIntent || "";
  caseInputNote.textContent = pipeline.inputNote || "";
  caseInputKicker.textContent = pipeline.inputFallbackKicker || "Source material";
  caseInputFallbackTitle.textContent = pipeline.inputFallbackTitle || "Source material";
  caseInputFallbackCopy.textContent = pipeline.inputFallbackCopy || "";
  caseOutputQuestion.textContent = pipeline.outputQuestion || "";
  caseOutputText.textContent = pipeline.outputText || "";
  caseOutputNote.textContent = pipeline.outputNote || "";

  caseThoughtGrid.innerHTML = "";
  (pipeline.thoughts || []).forEach((thought) => {
    const card = document.createElement("article");
    card.className = "thought-card";

    const step = document.createElement("span");
    step.className = "thought-step";
    step.textContent = thought.step || "";

    const title = document.createElement("h5");
    title.textContent = thought.title || "";

    const body = document.createElement("p");
    body.textContent = thought.body || "";

    card.append(step, title, body);
    caseThoughtGrid.appendChild(card);
  });

  caseOutputGallery.innerHTML = "";
  const gallery = pipeline.gallery || [];
  caseOutputGallery.classList.toggle("is-empty", gallery.length === 0);
  gallery.forEach((frame) => {
    const figure = document.createElement("figure");
    figure.className = "case-output-frame";

    const image = document.createElement("img");
    image.src = frame.src;
    image.alt = frame.alt || "";
    image.loading = "lazy";

    figure.appendChild(image);

    if (frame.label) {
      const caption = document.createElement("figcaption");
      caption.textContent = frame.label;
      figure.appendChild(caption);
    }

    caseOutputGallery.appendChild(figure);
  });

  if (pipeline.inputVideo) {
    caseInputVideo.hidden = false;
    caseInputFallback.hidden = true;
    caseInputVideo.poster = pipeline.inputPoster || "";

    if (caseInputVideo.getAttribute("src") !== pipeline.inputVideo) {
      caseInputVideo.src = pipeline.inputVideo;
      caseInputVideo.load();
    }

    const playPromise = caseInputVideo.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  } else {
    caseInputVideo.pause();
    caseInputVideo.removeAttribute("src");
    caseInputVideo.load();
    caseInputVideo.hidden = true;
    caseInputFallback.hidden = false;
  }

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
