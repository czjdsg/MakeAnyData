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
    title: "Embodied Fault-Recovery World Model",
    summary:
      "One robot manipulation clip is expanded into three fault-recovery world-model samples with diagnosis, recall, and corrected execution.",
    tags: ["robotics", "world-model", "fault-recovery"],
    pipeline: {
      inputIntent: "This is a robot manipulation video. Help me construct embodied decision and world-model training data from it.",
      inputVideo: "./assets/case-embody/hesitate-gen.mp4",
      inputPoster: "./assets/case-embody/source.webp",
      inputFallbackTitle: "Robot manipulation source clip",
      inputFallbackCopy: "A successful tissue pick-and-place routine can be turned into richer decision data once failure and correction are modeled.",
      thoughts: [
        {
          title: "Understand the source behavior",
          body: "The clip shows a standard embodied manipulation routine: the robot uses the left hand to pick up a tissue and place it in the basin, then repeats the operation with the right hand.",
        },
        {
          title: "Decide what data is most useful",
          body: "A successful rollout alone is not enough for world-model training. The higher-value supervision comes from abnormal states, fault diagnosis, correction reasoning, and repaired future execution.",
        },
        {
          title: "Generate three canonical failure cases",
          body: "From the successful source, construct three recoverable failures: hesitation loop, unstable grasp after contact, and early stagnation before reaching the target.",
        },
        {
          title: "Package fault-to-recovery supervision",
          body: "For each failure, export a unified sample that includes fault judgment, short chain-of-thought reasoning, recall of a better state, and a corrected continuation video.",
        },
      ],
      taskPoster: "",
      outputQuestion: "",
      outputText: "",
      outputSequence: [
        {
          type: "parallel-grid",
          items: [
            {
              title: "Hesitation Loop",
              taskVideo: "./assets/case-embody/hesitate-input.mp4",
              taskVideoPoster: "./assets/case-embody/hesitate-input-poster.webp",
              taskImage: "./assets/case-embody/e1.webp",
              prompt: "This is my current situation. What should I do?",
              answer:
                "The robot is stuck in a local hesitation loop. It should recover to the last better alignment and continue the approach from that corrected state.",
              solutionSteps: [
                {
                  type: "text",
                  text: "I first inspect the current robot state.",
                },
                {
                  type: "text",
                  text: "The left hand shows local hesitation without any forward progress, so repeating the same behavior would not solve the task.",
                },
                {
                  type: "text",
                  text: "I recall the last better local state to recover the alignment before continuing.",
                },
                {
                  type: "image",
                  src: "./assets/case-embody/e1.webp",
                  alt: "Hesitation-loop recall frame",
                },
                {
                  type: "text",
                  text: "The corrected continuation is shown below.",
                },
                {
                  type: "video",
                  src: "./assets/case-embody/hesitate-gen.mp4",
                  poster: "./assets/case-embody/hesitate-gen-poster.webp",
                },
              ],
            },
            {
              title: "Unstable Grasp",
              taskVideo: "./assets/case-embody/unstable-input.mp4",
              taskVideoPoster: "./assets/case-embody/unstable-input-poster.webp",
              taskImage: "./assets/case-embody/e2.webp",
              prompt: "This is my current situation. What should I do?",
              answer:
                "The robot made a grasping motion but failed to secure the object. It should return to the previous better posture and re-approach for a corrected grasp.",
              solutionSteps: [
                {
                  type: "text",
                  text: "I first inspect the current robot state.",
                },
                {
                  type: "text",
                  text: "The left hand reached the object but the grasp was unstable, so the object could not be held reliably.",
                },
                {
                  type: "text",
                  text: "I recall the previous better posture to reset the hand and prepare for a corrected grasp.",
                },
                {
                  type: "image",
                  src: "./assets/case-embody/e2.webp",
                  alt: "Unstable-grasp recall frame",
                },
                {
                  type: "text",
                  text: "The corrected continuation is shown below.",
                },
                {
                  type: "video",
                  src: "./assets/case-embody/unstable-gen.mp4",
                  poster: "./assets/case-embody/unstable-gen-poster.webp",
                },
              ],
            },
            {
              title: "Early Stagnation",
              taskVideo: "./assets/case-embody/stagnant-input.mp4",
              taskVideoPoster: "./assets/case-embody/stagnant-input-poster.webp",
              taskImage: "./assets/case-embody/e3.webp",
              prompt: "This is my current situation. What should I do?",
              answer:
                "The robot stops too early before reaching the target. It should roll back to the last better local state and resume the approach from that corrected state.",
              solutionSteps: [
                {
                  type: "text",
                  text: "I first inspect the current robot state.",
                },
                {
                  type: "text",
                  text: "The left hand stops too early before reaching the target, so the current state cannot complete the manipulation.",
                },
                {
                  type: "text",
                  text: "I recall the last better local state and restart the approach from that corrected position.",
                },
                {
                  type: "image",
                  src: "./assets/case-embody/e3.webp",
                  alt: "Early-stagnation recall frame",
                },
                {
                  type: "text",
                  text: "The corrected continuation is shown below.",
                },
                {
                  type: "video",
                  src: "./assets/case-embody/stagnant-gen.mp4",
                  poster: "./assets/case-embody/stagnant-gen-poster.webp",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  editing: {
    index: "05",
    domain: "Generation",
    variants: [
      {
        variantLabel: "Game Generation",
        title: "Minecraft Visual Generation Samples",
        summary:
          "A snowy-scene gameplay clip is repackaged into two game-generation samples with grounded requests and multi-frame visual outputs.",
        tags: ["minecraft", "generation", "game"],
        pipeline: {
          inputIntent:
            "This is a gameplay clip. Help me build game-image generation data from it.",
          inputVideo: "./assets/case-game/input.mp4",
          inputPoster: "./assets/case-game/game0.webp",
          inputFallbackTitle: "Minecraft source clip",
          inputFallbackCopy:
            "The source is a first-person Minecraft snow-scene interaction clip with movement, observation, and object placement.",
          thoughts: [
            {
              title: "Recognize the source gameplay",
              body: "The clip is a first-person Minecraft snow-scene sequence with player movement, environment observation, and object placement under a continuous visual trajectory.",
            },
            {
              title: "Choose a generation-style target",
              body: "Instead of sparse action labels, the output should become grounded generation data that maps natural requests to multi-frame visual targets.",
            },
            {
              title: "Lock two core visual tasks",
              body: "The clip supports two strong generation cases: a long-horizon explore-and-place request, and a local environment-observation request.",
            },
            {
              title: "Rewrite them as natural prompts",
              body: "The requests should sound like real user instructions so the supervision is usable for generation-oriented agent or model training.",
            },
          ],
          outputQuestion: "",
          outputText: "",
          outputSequence: [
            {
              type: "parallel-grid",
              items: [
                {
                  title: "Explore and Place",
                  showTaskImage: true,
                  taskImage: "./assets/case-game/game0.webp",
                  prompt:
                    "I am in a snowy scene now. First walk around and observe the surroundings, then place the block in my hand at the front-left position.",
                  solutionGallery: [
                    {
                      src: "./assets/case-game/game1.webp",
                      alt: "Minecraft planning trace frame 1",
                    },
                    {
                      src: "./assets/case-game/game2.webp",
                      alt: "Minecraft planning trace frame 2",
                    },
                    {
                      src: "./assets/case-game/game3.webp",
                      alt: "Minecraft planning trace frame 3",
                    },
                    {
                      src: "./assets/case-game/game4.webp",
                      alt: "Minecraft planning trace frame 4",
                    },
                  ],
                },
                {
                  title: "Observe the Scene",
                  showTaskImage: true,
                  taskImage: "./assets/case-game/game6.webp",
                  prompt: "Please observe what the surroundings look like right now.",
                  solutionGallery: [
                    {
                      src: "./assets/case-game/game7.webp",
                      alt: "Minecraft observation trace frame 1",
                    },
                    {
                      src: "./assets/case-game/game8.webp",
                      alt: "Minecraft observation trace frame 2",
                    },
                    {
                      src: "./assets/case-game/game9.webp",
                      alt: "Minecraft observation trace frame 3",
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        variantLabel: "Scene Editing",
        title: "Grounded Scene Editing Samples",
        summary:
          "A real kitchen scene is turned into viewpoint-consistent editing supervision with grounded prompts and compact visual targets.",
        tags: ["generation", "editing", "grounded"],
        pipeline: {
          inputIntent:
            "This is a real first-person kitchen scene. Help me build grounded scene-editing data from it.",
          inputPoster: "./assets/case1/frame-1.webp",
          inputFallbackTitle: "Kitchen source frame",
          inputFallbackCopy:
            "The requested edit should stay anchored in the original viewpoint and layout instead of drifting into prompt-only generation.",
          thoughts: [
            {
              title: "Read the requested scene change",
              body: "The source is a grounded kitchen frame, so the edit must preserve viewpoint, room structure, and object layout while changing the scene state.",
            },
            {
              title: "Choose an editing-style output",
              body: "The right target is not free-form generation. It is a compact set of edited images that keep the scene geometry stable.",
            },
            {
              title: "Export compact supervision",
              body: "A few high-signal edited targets are enough to express the transformation without flooding the sample with redundant frames.",
            },
          ],
          outputQuestion:
            "Turn this active cooking scene into a cleaned post-cooking kitchen state while keeping the viewpoint consistent.",
          outputText: "",
          outputSequence: [
            {
              type: "image",
              src: "./assets/case1/frame-3.webp",
              alt: "Edited kitchen state after cooking is finished.",
            },
            {
              type: "image",
              src: "./assets/case1/frame-4.webp",
              alt: "Edited kitchen cleanup state with the trash closed.",
            },
          ],
        },
      },
    ],
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
const caseSubnav = document.getElementById("case-subnav");
const caseSubnavCurrent = document.getElementById("case-subnav-current");
const caseSubnavCount = document.getElementById("case-subnav-count");
const caseSubnavPrev = document.getElementById("case-subnav-prev");
const caseSubnavNext = document.getElementById("case-subnav-next");
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
const caseOutputTaskField = document.getElementById("case-output-task-field");
const caseOutputTaskLabel = document.getElementById("case-output-task-label");
const caseOutputSolutionLabel = document.getElementById("case-output-solution-label");
const caseOutputQuestion = document.getElementById("case-output-question");
const caseOutputText = document.getElementById("case-output-text");
const caseTypingIndicator = document.getElementById("case-typing-indicator");
let spotlightSwapTimer;
let chatReplayTimers = [];
let activeCaseKey = "cooking";
let activeCaseInstanceKey = "cooking::0";
let activePipeline = caseData.cooking.pipeline || {};
let isCaseSpotlightVisible = false;
const completedCaseKeys = new Set();
let replayingCaseKey = null;
const caseVariantState = {
  editing: 0,
};

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

function resolveCaseItem(caseKey) {
  const baseItem = caseData[caseKey];
  if (!baseItem) {
    return null;
  }

  if (Array.isArray(baseItem.variants) && baseItem.variants.length > 0) {
    const maxIndex = baseItem.variants.length - 1;
    const variantIndex = Math.min(
      Math.max(caseVariantState[caseKey] || 0, 0),
      maxIndex,
    );
    caseVariantState[caseKey] = variantIndex;
    const variant = baseItem.variants[variantIndex];

    return {
      ...baseItem,
      ...variant,
      index: variant.index || baseItem.index,
      domain: variant.domain || baseItem.domain,
      tags: variant.tags || baseItem.tags || [],
      pipeline: variant.pipeline || baseItem.pipeline || {},
      variantIndex,
      variantCount: baseItem.variants.length,
      variantLabel: variant.variantLabel || `Page ${variantIndex + 1}`,
    };
  }

  return {
    ...baseItem,
    variantIndex: 0,
    variantCount: 1,
    variantLabel: "",
  };
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
    node.querySelectorAll("video[autoplay]").forEach((video) => {
      const playAttempt = video.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {});
      }
    });
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

  caseOutputGallery.querySelectorAll("video[autoplay]").forEach((video) => {
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === "function") {
      playAttempt.catch(() => {});
    }
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

  if (replayingCaseKey === activeCaseInstanceKey) {
    return;
  }

  if (completedCaseKeys.has(activeCaseInstanceKey)) {
    showChatConversationFully();
    return;
  }

  replayChatConversation(activePipeline, activeCaseInstanceKey);
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
  const item = resolveCaseItem(caseKey);
  if (!item) {
    return;
  }

  const pipeline = item.pipeline || {};
  activeCaseKey = caseKey;
  activeCaseInstanceKey = `${caseKey}::${item.variantIndex || 0}`;
  activePipeline = pipeline;

  spotlightIndex.textContent = item.index;
  spotlightDomain.textContent = item.domain;
  spotlightTitle.textContent = item.title;
  spotlightSummary.textContent = item.summary;
  if (
    caseSubnav &&
    caseSubnavCurrent &&
    caseSubnavCount &&
    caseSubnavPrev &&
    caseSubnavNext
  ) {
    const hasVariants = (item.variantCount || 1) > 1;
    caseSubnav.hidden = !hasVariants;

    if (hasVariants) {
      caseSubnavCurrent.textContent = item.variantLabel || "";
      caseSubnavCount.textContent = `${item.variantIndex + 1} / ${item.variantCount}`;
      caseSubnavPrev.disabled = item.variantIndex <= 0;
      caseSubnavNext.disabled = item.variantIndex >= item.variantCount - 1;
    }
  }
  setThoughtCollapsed(true);
  caseInputIntent.textContent = pipeline.inputIntent || "";
  caseInputFallbackCopy.textContent = pipeline.inputFallbackCopy || "";
  caseOutputQuestion.textContent = sanitizePrompt(pipeline.outputQuestion || "");
  caseOutputText.textContent = pipeline.outputText || "";
  const outputSequence =
    pipeline.outputSequence ||
    (pipeline.gallery || []).map((frame) => ({
      type: "image",
      src: frame.src,
      alt: frame.alt,
    }));
  const hasParallelOutput = outputSequence.some((item) => item.type === "parallel-grid");
  const hasDuoParallel = outputSequence.some(
    (item) => item.type === "parallel-grid" && (item.items || []).length === 2,
  );
  const taskPoster = pipeline.taskPoster || pipeline.inputPoster;
  const hasTaskPoster = Boolean(taskPoster);
  const hasTaskQuestion = Boolean(caseOutputQuestion.textContent.trim());

  caseOutputQuestion.hidden = !hasTaskQuestion || hasParallelOutput;
  caseOutputText.hidden = !caseOutputText.textContent.trim();

  if (caseOutputCard) {
    caseOutputCard.classList.toggle("is-parallel", hasParallelOutput);
  }

  if (caseOutputTaskField) {
    caseOutputTaskField.hidden = hasParallelOutput || (!hasTaskPoster && !hasTaskQuestion);
  }

  if (caseOutputTaskLabel) {
    caseOutputTaskLabel.hidden = hasParallelOutput;
  }

  if (caseOutputSolutionLabel) {
    caseOutputSolutionLabel.hidden = hasParallelOutput;
  }

  if (caseTaskPreview && caseTaskPoster) {
    caseTaskPreview.hidden = !hasTaskPoster || hasParallelOutput;

    if (hasTaskPoster && !hasParallelOutput) {
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
  caseOutputGallery.classList.toggle("is-wide", hasParallelOutput);
  caseOutputGallery.classList.toggle("is-duo", hasDuoParallel);
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
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";
      video.setAttribute("aria-label", item.alt || "Output video");
      video.load();

      figure.appendChild(video);
      caseOutputGallery.appendChild(figure);
      return;
    }

    if (item.type === "parallel-grid") {
      const block = document.createElement("div");
      block.className = "case-output-entry case-output-entry-parallel";
      block.classList.toggle("is-duo", (item.items || []).length === 2);

      const grid = document.createElement("div");
      grid.className = "case-output-parallel-grid";
      grid.classList.toggle("is-duo", (item.items || []).length === 2);

      (item.items || []).forEach((panelItem) => {
        const panel = document.createElement("article");
        panel.className = "case-output-panel";

        const title = document.createElement("h5");
        title.className = "case-output-panel-title";
        title.textContent = panelItem.title || "";
        panel.appendChild(title);

        const taskLabel = document.createElement("span");
        taskLabel.className = "case-output-panel-label";
        taskLabel.textContent = "Task";
        panel.appendChild(taskLabel);

        if (panelItem.taskVideo) {
          const taskVideo = document.createElement("video");
          taskVideo.className = "case-output-panel-video";
          taskVideo.src = panelItem.taskVideo;
          taskVideo.poster = panelItem.taskVideoPoster || panelItem.taskImage || "";
          taskVideo.controls = true;
          taskVideo.autoplay = true;
          taskVideo.loop = true;
          taskVideo.muted = true;
          taskVideo.playsInline = true;
          taskVideo.preload = "auto";
          taskVideo.load();
          panel.appendChild(taskVideo);
        }

        const taskImageSrc = panelItem.taskImage || panelItem.recallImage;
        if (panelItem.showTaskImage && taskImageSrc) {
          const taskImage = document.createElement("img");
          taskImage.className = "case-output-panel-image";
          taskImage.src = taskImageSrc;
          taskImage.alt =
            panelItem.taskImageAlt || `${panelItem.title || "Task"} task frame`;
          taskImage.loading = "lazy";
          panel.appendChild(taskImage);
        }

        if (panelItem.prompt) {
          const prompt = document.createElement("p");
          prompt.className = "case-output-panel-prompt";
          prompt.textContent = panelItem.prompt;
          panel.appendChild(prompt);
        }

        const solutionLabel = document.createElement("span");
        solutionLabel.className = "case-output-panel-label";
        solutionLabel.textContent = "Solution";
        panel.appendChild(solutionLabel);

        if ((panelItem.solutionSteps || []).length > 0) {
          const thoughtSteps = panelItem.solutionSteps.filter(
            (stepItem) => stepItem.type !== "video",
          );
          const solutionVideos = panelItem.solutionSteps.filter(
            (stepItem) => stepItem.type === "video",
          );

          if (thoughtSteps.length > 0) {
            const steps = document.createElement("div");
            steps.className = "case-output-panel-thoughts";

            const thoughtState = document.createElement("span");
            thoughtState.className = "case-output-panel-thought-badge";
            thoughtState.textContent = "Reasoned";
            steps.appendChild(thoughtState);

            thoughtSteps.forEach((stepItem) => {
              if (stepItem.type === "text") {
                const step = document.createElement("p");
                step.className = "case-output-panel-step";
                step.textContent = stepItem.text || "";
                steps.appendChild(step);
                return;
              }

              if (stepItem.type === "image") {
                const image = document.createElement("img");
                image.className = "case-output-panel-image";
                image.src = stepItem.src;
                image.alt = stepItem.alt || `${panelItem.title || "Recovery"} reasoning frame`;
                image.loading = "lazy";
                steps.appendChild(image);
              }
            });

            panel.appendChild(steps);
          }

          if (panelItem.answer) {
            const answer = document.createElement("p");
            answer.className = "case-output-panel-answer";
            answer.textContent = panelItem.answer;
            panel.appendChild(answer);
          }

          solutionVideos.forEach((stepItem) => {
            if (stepItem.type === "video") {
              const video = document.createElement("video");
              video.className = "case-output-panel-video";
              video.src = stepItem.src;
              video.poster = stepItem.poster || "";
              video.controls = true;
              video.autoplay = true;
              video.loop = true;
              video.muted = true;
              video.playsInline = true;
              video.preload = "auto";
              video.load();
              panel.appendChild(video);
            }
          });
        } else if (panelItem.generatedVideo) {
          const outputVideo = document.createElement("video");
          outputVideo.className = "case-output-panel-video";
          outputVideo.src = panelItem.generatedVideo;
          outputVideo.poster = panelItem.generatedVideoPoster || "";
          outputVideo.controls = true;
          outputVideo.autoplay = true;
          outputVideo.loop = true;
          outputVideo.muted = true;
          outputVideo.playsInline = true;
          outputVideo.preload = "auto";
          outputVideo.load();
          panel.appendChild(outputVideo);
        } else if (panelItem.answer) {
          const answer = document.createElement("p");
          answer.className = "case-output-panel-answer";
          answer.textContent = panelItem.answer;
          panel.appendChild(answer);
        }

        if ((panelItem.solutionGallery || []).length > 0) {
          const gallery = document.createElement("div");
          gallery.className = "case-output-panel-gallery";

          panelItem.solutionGallery.forEach((frame) => {
            const image = document.createElement("img");
            image.className = "case-output-panel-gallery-image";
            image.src = frame.src || "";
            image.alt = frame.alt || `${panelItem.title || "Solution"} frame`;
            image.loading = "lazy";
            gallery.appendChild(image);
          });

          panel.appendChild(gallery);
        }

        grid.appendChild(panel);
      });

      block.appendChild(grid);
      caseOutputGallery.appendChild(block);
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

if (caseSubnavPrev) {
  caseSubnavPrev.addEventListener("click", () => {
    const baseItem = caseData[activeCaseKey];
    if (!baseItem || !Array.isArray(baseItem.variants)) {
      return;
    }

    caseVariantState[activeCaseKey] = Math.max(
      0,
      (caseVariantState[activeCaseKey] || 0) - 1,
    );
    setSpotlight(activeCaseKey);
  });
}

if (caseSubnavNext) {
  caseSubnavNext.addEventListener("click", () => {
    const baseItem = caseData[activeCaseKey];
    if (!baseItem || !Array.isArray(baseItem.variants)) {
      return;
    }

    caseVariantState[activeCaseKey] = Math.min(
      baseItem.variants.length - 1,
      (caseVariantState[activeCaseKey] || 0) + 1,
    );
    setSpotlight(activeCaseKey);
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
