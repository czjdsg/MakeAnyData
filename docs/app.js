const caseData = {
  cooking: {
    index: "01",
    domain: "Everyday Tutorials",
    title: "Cooking Tutorial from Raw Video",
    summary:
      "A single cooking clip is replayed as a live chat session: user upload, model reasoning, and the final tutorial-ready dataset.",
    tags: ["tutorial", "interleaved", "video-to-data"],
    pipeline: {
      inputTitle: "Uploaded video + intent",
      inputIntent: "This is a cooking video. Turn it into interleaved tutorial data with step-by-step images and text.",
      inputNote:
        "The source clip covers timer setup, stir-frying, heat control, and final cleanup in one continuous kitchen POV recording.",
      inputFallbackKicker: "Uploaded source",
      inputFallbackTitle: "Egocentric cooking video",
      inputFallbackCopy:
        "A kitchen POV clip with clear action transitions from preparation to cleanup.",
      inputVideo: "./assets/case1/input-preview.mp4",
      inputPoster: "./assets/case1/frame-1.webp",
      thinkingTitle: "Key thinking steps",
      thinkingStatus: "Inspecting the uploaded clip and rewriting the task...",
      thinkingDoneStatus: "Reasoning complete. Packaging the dataset...",
      outputStatus: "Training-ready",
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
      outputTitle: "Final dataset sample",
      outputQuestion:
        "This is my current situation: I am about to cook meat, and I am setting a timer to keep track of the cooking time. I want to know what I should do next.",
      outputText: "",
      outputSequence: [
        {
          type: "text",
          text: "Keep stirring the meat continuously.",
        },
        {
          type: "image",
          src: "./assets/case1/frame-2.webp",
          alt: "The minced meat is being stirred in the pan during cooking.",
        },
        {
          type: "text",
          text:
            "When the meat has fully changed color and the moisture in the pan has cooked off, turn off the heat. Move the pan away from the stove, set down the wooden spoon, and wipe the countertop.",
        },
        {
          type: "image",
          src: "./assets/case1/frame-3.webp",
          alt: "The pan is moved off the stove and the countertop is cleaned.",
        },
        {
          type: "text",
          text: "Finally, throw the paper towel into the trash bin and close the lid.",
        },
        {
          type: "image",
          src: "./assets/case1/frame-4.webp",
          alt: "A used paper towel is dropped into the trash bin and the lid is closed.",
        },
      ],
      outputNote:
        "Interleaved image-text tutorial data with extracted keyframes and user-facing instructional text.",
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
      inputTitle: "Uploaded lesson + intent",
      inputIntent: "Generate tutoring data focused on the exact step where the learner gets stuck.",
      inputNote: "Board-writing lesson video with intermediate equations, diagrams, and reasoning transitions.",
      inputFallbackKicker: "Uploaded source",
      inputFallbackTitle: "Geometry lesson recording",
      inputFallbackCopy: "The clip contains a full worked solution, but only one reasoning jump matters most.",
      thinkingTitle: "Key thinking steps",
      thinkingStatus: "Tracing the hardest reasoning jump in the lesson...",
      thinkingDoneStatus: "Critical tutoring step isolated. Packaging the sample...",
      outputStatus: "Tutoring sample ready",
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
      outputTitle: "Final dataset sample",
      outputQuestion: "Student question: Why can we introduce this auxiliary line here?",
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
      inputTitle: "Uploaded video + intent",
      inputIntent: "Build temporal reasoning data with diverse difficulty levels.",
      inputNote: "A single video with actions, timestamps, state transitions, and event dependencies.",
      inputFallbackKicker: "Uploaded source",
      inputFallbackTitle: "Temporal event video",
      inputFallbackCopy: "The clip contains enough event structure to support much more than a plain description.",
      thinkingTitle: "Key thinking steps",
      thinkingStatus: "Mapping events, boundaries, and time-sensitive evidence...",
      thinkingDoneStatus: "Temporal reasoning tasks assembled. Packaging the sample...",
      outputStatus: "Temporal labels ready",
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
      outputTitle: "Final dataset sample",
      outputQuestion: "Temporal question: Which event happened first?",
      outputText: "Temporal QA pairs, timestamped spans, and state-transition labels exported from one source clip.",
      outputNote: "Richer temporal supervision than a single caption or class label.",
      gallery: [],
    },
  },
  gui: {
    index: "03",
    domain: "GUI Agents",
    title: "Cross-App GUI Task Reconstruction",
    summary:
      "Fragmented phone interactions are reorganized into one coherent shopping task that spans eBay and Amazon.",
    tags: ["gui", "cross-app", "trajectory"],
    pipeline: {
      inputIntent:
        "These are my mobile interaction fragments. Use them to construct a more comprehensive long-horizon task trajectory from them.",
      inputFallbackTitle: "Fragmented mobile interaction traces",
      inputFallbackCopy: "These clips capture separate app operations rather than one complete goal-directed task.",
      inputAssets: [
        {
          type: "video",
          src: "./assets/case-gui/fragment-a.mp4",
          label: "Fragment A",
          description: "Open eBay, pick a listing, and add it to the cart.",
        },
        {
          type: "video",
          src: "./assets/case-gui/fragment-b.mp4",
          label: "Fragment B",
          description: "Open Amazon and search for Xbox Series X.",
        },
        {
          type: "video",
          src: "./assets/case-gui/fragment-c.mp4",
          label: "Fragment C",
          description: "Open eBay and search for Xbox Series X.",
        },
        {
          type: "video",
          src: "./assets/case-gui/fragment-d.mp4",
          label: "Fragment D",
          description: "Send an invitation to Victor James on Facebook.",
        },
      ],
      thoughts: [
        {
          title: "Analyze each fragment",
          body: "A reopens eBay and adds a console listing to the cart; B searches Amazon for Xbox Series X; C searches eBay for the same product; D sends a Facebook invitation and is unrelated to shopping.",
        },
        {
          title: "Keep the useful subset",
          body: "Fragments A, B, and C can describe one shopping task together, while fragment D should be discarded because it does not match the user intent.",
        },
        {
          title: "Hypothesize the full task",
          body: "The selected fragments imply a cross-app comparison workflow: search for the same Xbox console on eBay and Amazon, compare prices, then finish the purchase on eBay.",
        },
        {
          title: "Stitch the trajectory in order",
          body: "C ends on the home screen after eBay search, which connects naturally to B opening Amazon. B also returns to the home screen, and A then reopens eBay to complete the final add-to-cart action. The final order is C -> B -> A.",
        },
      ],
      taskPoster: "./assets/case-gui/init.webp",
      outputQuestion:
        "Compare the price of Microsoft Xbox Series X on eBay and Amazon, then add the cheaper option to the cart.",
      outputText: "",
      outputSequence: [
        {
          type: "text",
          text: "A complete GUI trajectory with screen states, reasoning, and actions at every step.",
        },
        {
          type: "video",
          src: "./assets/case-gui/full-task-video.mp4",
          poster: "./assets/case-gui/init.webp",
          alt: "A long-horizon mobile GUI task video that compares Xbox prices across eBay and Amazon.",
        },
      ],
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
      inputTitle: "Uploaded trajectory + intent",
      inputIntent: "Construct recovery data that teaches fault recognition and correction.",
      inputNote: "Robot manipulation traces with normal outcomes and state transitions.",
      inputFallbackKicker: "Uploaded source",
      inputFallbackTitle: "Successful robot trajectory",
      inputFallbackCopy: "The nominal trace becomes more useful once the system asks how recovery should happen under failure.",
      thinkingTitle: "Key thinking steps",
      thinkingStatus: "Modeling normal execution before injecting recoverable faults...",
      thinkingDoneStatus: "Recovery supervision prepared. Packaging the sample...",
      outputStatus: "Recovery sample ready",
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
      outputTitle: "Final dataset sample",
      outputQuestion: "Recovery task: The gripper missed the object. What should the robot do next?",
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
      inputTitle: "Uploaded image + intent",
      inputIntent: "Build controllable editing supervision grounded in the current scene.",
      inputNote: "Egocentric images paired with user editing instructions and visual constraints.",
      inputFallbackKicker: "Uploaded source",
      inputFallbackTitle: "Grounded scene image",
      inputFallbackCopy: "The system starts from a real scene instead of synthetic prompt-only generation.",
      thinkingTitle: "Key thinking steps",
      thinkingStatus: "Parsing the requested edit and grounding it in the scene...",
      thinkingDoneStatus: "Edit supervision resolved. Packaging the sample...",
      outputStatus: "Editing pair ready",
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
      outputTitle: "Final dataset sample",
      outputQuestion: "Edit instruction: Replace the cup on the table with a glass bottle.",
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
const chatMessages = Array.from(document.querySelectorAll("[data-chat-step]"));
const caseInputPreview = document.getElementById("case-input-preview");
const caseInputAssets = document.getElementById("case-input-assets");
const caseInputVideo = document.getElementById("case-input-video");
const caseInputPoster = document.getElementById("case-input-poster");
const caseInputFallback = document.getElementById("case-input-fallback");
const caseInputFallbackCopy = document.getElementById("case-input-fallback-copy");
const caseInputIntent = document.getElementById("case-input-intent");
const caseThoughtGrid = document.getElementById("case-thought-grid");
const caseThoughtPanel = document.getElementById("case-thought-panel");
const caseThoughtToggle = document.getElementById("case-thought-toggle");
const caseThoughtToggleLabel = document.getElementById("case-thought-toggle-label");
const caseOutputGallery = document.getElementById("case-output-gallery");
const caseOutputCard = document.getElementById("case-output-card");
const caseTaskPreview = document.getElementById("case-task-preview");
const caseTaskPoster = document.getElementById("case-task-poster");
const caseOutputQuestion = document.getElementById("case-output-question");
const caseOutputText = document.getElementById("case-output-text");
const caseTypingIndicator = document.getElementById("case-typing-indicator");
let spotlightSwapTimer;
let chatReplayTimers = [];
let activeCaseKey = "cooking";
let activePipeline = caseData.cooking.pipeline || {};
let isCaseSpotlightVisible = false;
const completedCaseKeys = new Set();
let replayingCaseKey = null;

if (methodArchitecture) {
  methodArchitecture.classList.remove("is-focused");
}

function sanitizePrompt(text) {
  return (text || "")
    .replace(/^(?:User question|Student question|Temporal question|Edit instruction|Task)\s*:\s*/i, "")
    .trim();
}

function setThoughtCollapsed(collapsed) {
  if (!caseThoughtPanel || !caseThoughtToggle || !caseThoughtToggleLabel) {
    return;
  }

  caseThoughtPanel.hidden = collapsed;
  caseThoughtPanel.classList.toggle("is-collapsed", collapsed);
  caseThoughtToggle.setAttribute("aria-expanded", String(!collapsed));
  caseThoughtToggleLabel.textContent = collapsed ? "Show thoughts" : "Hide thoughts";
}

function resetCaseInputVideo() {
  if (!caseInputVideo) {
    return;
  }

  caseInputVideo.pause();
  caseInputVideo.currentTime = 0;
}

function playCaseInputVideo() {
  if (!caseInputVideo || caseInputVideo.hidden || !caseInputVideo.src) {
    return;
  }

  const playAttempt = caseInputVideo.play();
  if (playAttempt && typeof playAttempt.catch === "function") {
    playAttempt.catch(() => {});
  }
}

function pauseAssetVideos() {
  if (!caseInputAssets) {
    return;
  }

  caseInputAssets.querySelectorAll("video").forEach((video) => {
    video.pause();
    video.currentTime = 0;
  });
}

function playAssetVideos() {
  if (!caseInputAssets || caseInputAssets.hidden) {
    return;
  }

  caseInputAssets.querySelectorAll("video").forEach((video) => {
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {});
    }
  });
}

function mountAndReveal(node) {
  if (!node) {
    return;
  }

  node.classList.add("is-mounted");
  window.requestAnimationFrame(() => {
    node.classList.add("is-visible");
  });
}

function showChatConversationFully() {
  chatReplayTimers.forEach((timer) => window.clearTimeout(timer));
  chatReplayTimers = [];
  replayingCaseKey = null;

  chatMessages.forEach((message) => {
    message.classList.add("is-mounted", "is-visible");
  });

  caseThoughtGrid.querySelectorAll(".thought-card").forEach((card) => {
    card.classList.add("is-mounted", "is-visible");
  });

  caseOutputGallery.querySelectorAll(".case-output-entry").forEach((entry) => {
    entry.classList.add("is-mounted", "is-visible");
  });

  if (caseTypingIndicator) {
    caseTypingIndicator.classList.add("is-hidden");
  }
}

function clearChatReplay() {
  chatReplayTimers.forEach((timer) => window.clearTimeout(timer));
  chatReplayTimers = [];

  chatMessages.forEach((message) => {
    message.classList.remove("is-mounted");
    message.classList.remove("is-visible");
  });

  caseThoughtGrid.querySelectorAll(".thought-card").forEach((card) => {
    card.classList.remove("is-mounted");
    card.classList.remove("is-visible");
  });

  caseOutputGallery.querySelectorAll(".case-output-entry").forEach((entry) => {
    entry.classList.remove("is-mounted");
    entry.classList.remove("is-visible");
  });

  if (caseTypingIndicator) {
    caseTypingIndicator.classList.remove("is-hidden");
  }

  resetCaseInputVideo();
  pauseAssetVideos();
}

function scheduleChatReplay(fn, delay) {
  const timer = window.setTimeout(fn, delay);
  chatReplayTimers.push(timer);
}

function renderCasePlayback() {
  if (!isCaseSpotlightVisible) {
    return;
  }

  if (replayingCaseKey === activeCaseKey) {
    return;
  }

  if (completedCaseKeys.has(activeCaseKey)) {
    showChatConversationFully();
    return;
  }

  replayChatConversation(activePipeline, activeCaseKey);
}

function replayChatConversation(pipeline, caseKey) {
  const userMessage = chatMessages[0];
  const thinkingMessage = chatMessages[1];
  const outputMessage = chatMessages[2];
  const thoughtCards = Array.from(caseThoughtGrid.querySelectorAll(".thought-card"));
  const outputEntries = Array.from(caseOutputGallery.querySelectorAll(".case-output-entry"));

  replayingCaseKey = caseKey;
  clearChatReplay();
  replayingCaseKey = caseKey;

  scheduleChatReplay(() => {
    mountAndReveal(userMessage);
    playCaseInputVideo();
    playAssetVideos();
  }, 140);

  scheduleChatReplay(() => {
    mountAndReveal(thinkingMessage);
  }, 760);

  const thoughtStart = 1280;
  thoughtCards.forEach((card, index) => {
    scheduleChatReplay(() => {
      mountAndReveal(card);
    }, thoughtStart + index * 260);
  });

  const thinkingDoneAt = thoughtStart + thoughtCards.length * 260;
  scheduleChatReplay(() => {
    if (caseTypingIndicator) {
      caseTypingIndicator.classList.add("is-hidden");
    }
  }, thinkingDoneAt);

  const outputStart = thinkingDoneAt + 560;
  scheduleChatReplay(() => {
    mountAndReveal(outputMessage);
  }, outputStart);

  outputEntries.forEach((entry, index) => {
    scheduleChatReplay(() => {
      mountAndReveal(entry);
    }, outputStart + 180 + index * 120);
  });

  const completionDelay =
    outputEntries.length > 0
      ? outputStart + 180 + (outputEntries.length - 1) * 120 + 320
      : outputStart + 320;

  scheduleChatReplay(() => {
    completedCaseKeys.add(caseKey);

    if (replayingCaseKey === caseKey) {
      replayingCaseKey = null;
    }
  }, completionDelay);
}

function setSpotlight(caseKey) {
  const item = caseData[caseKey];
  if (!item) {
    return;
  }

  const pipeline = item.pipeline || {};
  activeCaseKey = caseKey;
  activePipeline = pipeline;

  spotlightIndex.textContent = item.index;
  spotlightDomain.textContent = item.domain;
  spotlightTitle.textContent = item.title;
  spotlightSummary.textContent = item.summary;
  setThoughtCollapsed(true);
  caseInputIntent.textContent = pipeline.inputIntent || "";
  caseInputFallbackCopy.textContent = pipeline.inputFallbackCopy || "";
  caseOutputQuestion.textContent = sanitizePrompt(pipeline.outputQuestion || "");
  caseOutputText.textContent = pipeline.outputText || "";
  caseOutputQuestion.hidden = !caseOutputQuestion.textContent.trim();
  caseOutputText.hidden = !caseOutputText.textContent.trim();
  if (caseTaskPreview && caseTaskPoster) {
    const taskPoster = pipeline.taskPoster || pipeline.inputPoster;
    const hasTaskPoster = Boolean(taskPoster);
    caseTaskPreview.hidden = !hasTaskPoster;

    if (hasTaskPoster) {
      caseTaskPoster.src = taskPoster;
      caseTaskPoster.alt = pipeline.inputFallbackTitle || "Task source frame";
    } else {
      caseTaskPoster.removeAttribute("src");
    }
  }

  caseThoughtGrid.innerHTML = "";
  (pipeline.thoughts || []).forEach((thought) => {
    const card = document.createElement("article");
    card.className = "thought-card";

    const title = document.createElement("h5");
    title.textContent = thought.title || "";

    const body = document.createElement("p");
    body.textContent = thought.body || "";

    card.append(title, body);
    caseThoughtGrid.appendChild(card);
  });

  caseOutputGallery.innerHTML = "";
  const outputSequence =
    pipeline.outputSequence ||
    (pipeline.gallery || []).map((frame) => ({
      type: "image",
      src: frame.src,
      alt: frame.alt,
    }));
  caseOutputGallery.classList.toggle("is-empty", outputSequence.length === 0);
  outputSequence.forEach((item) => {
    if (item.type === "text") {
      const textBlock = document.createElement("div");
      textBlock.className = "case-output-entry case-output-entry-text";

      const paragraph = document.createElement("p");
      paragraph.textContent = item.text || "";

      textBlock.appendChild(paragraph);
      caseOutputGallery.appendChild(textBlock);
      return;
    }

    if (item.type === "image") {
      const figure = document.createElement("figure");
      figure.className = "case-output-entry case-output-entry-image";

      const image = document.createElement("img");
      image.src = item.src || "";
      image.alt = item.alt || "";
      image.loading = "lazy";

      figure.appendChild(image);
      caseOutputGallery.appendChild(figure);
      return;
    }

    if (item.type === "video") {
      const figure = document.createElement("figure");
      figure.className = "case-output-entry case-output-entry-video";

      const video = document.createElement("video");
      video.src = item.src || "";
      video.poster = item.poster || "";
      video.controls = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.setAttribute("aria-label", item.alt || "Output video");

      figure.appendChild(video);
      caseOutputGallery.appendChild(figure);
    }
  });

  if (caseOutputCard) {
    caseOutputCard.hidden =
      !caseOutputQuestion.textContent.trim() &&
      !caseOutputText.textContent.trim() &&
      outputSequence.length === 0;
  }

  caseInputAssets.innerHTML = "";
  const inputAssets = pipeline.inputAssets || [];

  if (inputAssets.length > 0) {
    caseInputPreview.hidden = true;
    caseInputFallback.hidden = true;
    caseInputAssets.hidden = false;

    inputAssets.forEach((asset) => {
      const tile = document.createElement("figure");
      tile.className = "case-input-asset";

      if (asset.type === "video") {
        const video = document.createElement("video");
        video.src = asset.src || "";
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.preload = "metadata";
        tile.appendChild(video);
      } else {
        const image = document.createElement("img");
        image.src = asset.src || "";
        image.alt = asset.description || asset.label || "";
        image.loading = "lazy";
        tile.appendChild(image);
      }

      const badge = document.createElement("figcaption");
      badge.textContent = asset.label || "";
      tile.appendChild(badge);

      caseInputAssets.appendChild(tile);
    });
  } else if (pipeline.inputPoster || pipeline.inputVideo) {
    caseInputPreview.hidden = false;
    caseInputFallback.hidden = true;
    caseInputAssets.hidden = true;

    if (pipeline.inputVideo && caseInputVideo) {
      caseInputVideo.hidden = false;
      caseInputVideo.src = pipeline.inputVideo;
      caseInputVideo.poster = pipeline.inputPoster || "";
      caseInputVideo.loop = true;
      caseInputVideo.setAttribute("aria-label", pipeline.inputFallbackTitle || "Uploaded video preview");
      caseInputVideo.load();
      caseInputPoster.hidden = true;
      caseInputPoster.removeAttribute("src");
    } else {
      if (caseInputVideo) {
        caseInputVideo.hidden = true;
        caseInputVideo.removeAttribute("src");
        caseInputVideo.removeAttribute("poster");
        caseInputVideo.load();
      }

      caseInputPoster.hidden = false;
      caseInputPoster.src = pipeline.inputPoster || "";
      caseInputPoster.alt = pipeline.inputFallbackTitle || "Uploaded source preview";
    }
  } else {
    if (caseInputVideo) {
      caseInputVideo.hidden = true;
      caseInputVideo.removeAttribute("src");
      caseInputVideo.removeAttribute("poster");
      caseInputVideo.load();
    }

    caseInputPoster.hidden = true;
    caseInputPoster.removeAttribute("src");
    caseInputPreview.hidden = true;
    caseInputAssets.hidden = true;
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

  if (isCaseSpotlightVisible) {
    renderCasePlayback();
  } else {
    clearChatReplay();
  }

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

if (caseThoughtToggle) {
  caseThoughtToggle.addEventListener("click", () => {
    const isExpanded = caseThoughtToggle.getAttribute("aria-expanded") === "true";
    setThoughtCollapsed(isExpanded);
  });
}

if (caseSpotlight) {
  const caseReplayObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isCaseSpotlightVisible = entry.isIntersecting;

        if (entry.isIntersecting) {
          renderCasePlayback();
        }
      });
    },
    { threshold: 0.24 },
  );

  caseReplayObserver.observe(caseSpotlight);
}

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
