const caseData = {
  cooking: {
    index: "01",
    domain: "生活教程",
    title: "Cooking to Interleaved Tutorial",
    summary:
      "从烹饪视频里抽出关键动作、关键帧和自然问题，把过程重组为可训练的图文交错教程。",
    input: "做饭视频、关键动作、自然语言提问",
    output: "教程型 JSON，包含 step_id、images、text 与用户问题",
    tags: ["interleaved", "tutorial", "video-to-data"],
  },
  geometry: {
    index: "02",
    domain: "学科教育",
    title: "Geometry Stuck-Point Reasoning",
    summary:
      "不从头到尾讲整题，而是锁定学生真正卡住的那一帧，生成高价值的解题引导数据。",
    input: "课堂解题视频、板书关键帧、学生卡点",
    output: "图文交错推理过程和定理触发点说明",
    tags: ["education", "reasoning", "stuck-point"],
  },
  editing: {
    index: "03",
    domain: "通用生成编辑",
    title: "Ego Image Editing Samples",
    summary:
      "给定当前场景图像和动作描述，保持光照、视角和背景一致，生成编辑目标图像。",
    input: "第一人称图像、编辑指令、当前场景约束",
    output: "cot + edited_image 的图像编辑训练样本",
    tags: ["editing", "egocentric", "instruction"],
  },
  temporal: {
    index: "04",
    domain: "时空理解",
    title: "Temporal QA Builder",
    summary:
      "从单段视频同时构造定位、先后、状态变化、多事件联合推理等不同难度样本。",
    input: "视频、时间段、动作与状态变化",
    output: "temporal QA、顺序推理、复杂时空联合查询",
    tags: ["temporal", "qa", "state-change"],
  },
  gui: {
    index: "05",
    domain: "人机交互",
    title: "GUI Long-Horizon Composition",
    summary:
      "把原本零散的短 GUI 操作片段拼接为自然、连贯、有目标的长程任务轨迹。",
    input: "手机或电脑片段、任务目标、状态衔接线索",
    output: "完整长程任务链，适合 GUI agent 训练",
    tags: ["gui", "agent", "long-horizon"],
  },
  embodied: {
    index: "06",
    domain: "具身智能",
    title: "Embodied Fault Recovery",
    summary:
      "从成功操作中反推故障场景，让模型学习异常识别、状态回溯与修正执行。",
    input: "机器人操作视频、异常片段、当前观测",
    output: "故障判定 + CoT + future video 的世界模型数据",
    tags: ["robotics", "world-model", "fault-repair"],
  },
  commerce: {
    index: "07",
    domain: "直播电商",
    title: "Hand-Object Segment Mining",
    summary:
      "从直播带货视频中筛出复杂、清晰、可模仿的手物交互片段，为视频生成提供高质量素材。",
    input: "电商直播视频、动作时间段、展示过程",
    output: "结构化 segment 标注与训练价值说明",
    tags: ["commerce", "hand-object", "video-gen"],
  },
  drawing: {
    index: "08",
    domain: "逐步生成",
    title: "Stepwise Digital Painting",
    summary:
      "从长绘画序列中只留下真正关键的起形、塑造、细化、完成节点，形成图文交错生成模板。",
    input: "绘画过程图、人物目标、关键阶段节点",
    output: "stepwise image-to-text generation tutorial",
    tags: ["drawing", "progressive", "generation"],
  },
};

const storyData = {
  cooking: {
    badge: "01 / Featured Case",
    title: "生活教程：从厨房视频到图文交错步骤",
    text:
      "这里适合放真实关键帧拼接图。页面右侧大面板强调每一步都像用户在教程页中真实会看到的提问与回答。",
    input: "视频片段、关键帧、自然教程问题",
    reasoning: "识别动作边界、挑选代表帧、把步骤转成真实教程语气。",
    output: "多 step 教程数据，每步都能被单独训练。",
    accent: "rgba(255, 141, 77, 0.26)",
    secondary: "rgba(255, 212, 158, 0.18)",
  },
  geometry: {
    badge: "02 / Featured Case",
    title: "学科卡点：只展示学生真正卡住的一步",
    text:
      "这一类特别适合做沉浸式滚动讲述。左边是“卡住的瞬间”，右边是从观察到定理触发的推理过程。",
    input: "板书关键帧、已知条件、学生提问",
    reasoning: "定位卡点、识别应触发的定理、组织图文交错解题过程。",
    output: "针对单一关键步骤的高价值教学样本。",
    accent: "rgba(158, 216, 255, 0.22)",
    secondary: "rgba(200, 239, 119, 0.18)",
  },
  gui: {
    badge: "03 / Featured Case",
    title: "GUI 长任务：从碎片片段重建完整目标链",
    text:
      "这里更适合做流程型展示。页面中可以看到从 eBay 到 Amazon，再回到 eBay 的任务拼接逻辑。",
    input: "短 GUI 片段、主屏幕状态、任务目标",
    reasoning: "判断哪些片段可拼接、顺序是否自然、结束状态是否连续。",
    output: "可复用的长程任务轨迹，用于 GUI agent 训练。",
    accent: "rgba(200, 239, 119, 0.18)",
    secondary: "rgba(255, 141, 77, 0.18)",
  },
  embodied: {
    badge: "04 / Featured Case",
    title: "具身故障修正：让模型学会回溯与继续",
    text:
      "这类 case 适合用更冷峻的视觉语言。把“犹豫循环”“抓取不稳”“接近停滞”做成连续故障状态展示会很强。",
    input: "机器人观测、异常片段、当前问题",
    reasoning: "识别异常、找到上一个更优状态、给出后续修正执行。",
    output: "故障判定 + reasoning + future_video 的世界模型样本。",
    accent: "rgba(255, 141, 77, 0.18)",
    secondary: "rgba(158, 216, 255, 0.24)",
  },
};

const spotlightIndex = document.getElementById("spotlight-index");
const spotlightDomain = document.getElementById("spotlight-domain");
const spotlightTitle = document.getElementById("spotlight-title");
const spotlightSummary = document.getElementById("spotlight-summary");
const spotlightInput = document.getElementById("spotlight-input");
const spotlightOutput = document.getElementById("spotlight-output");
const spotlightTags = document.getElementById("spotlight-tags");

const storyBadge = document.getElementById("story-badge");
const storyTitle = document.getElementById("story-title");
const storyText = document.getElementById("story-text");
const storyInput = document.getElementById("story-input");
const storyReasoning = document.getElementById("story-reasoning");
const storyOutput = document.getElementById("story-output");
const storyPreview = document.getElementById("story-preview");
const storyProgressBar = document.getElementById("story-progress-bar");

const caseCards = Array.from(document.querySelectorAll(".case-card"));
const storySteps = Array.from(document.querySelectorAll(".story-step"));
const revealItems = document.querySelectorAll(".reveal");
const cursorGlow = document.querySelector(".cursor-glow");

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
  spotlightOutput.textContent = item.output;

  spotlightTags.innerHTML = "";
  item.tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.textContent = tag;
    spotlightTags.appendChild(chip);
  });

  caseCards.forEach((card) => {
    card.classList.toggle("is-active", card.dataset.case === caseKey);
  });
}

function setStory(storyKey) {
  const item = storyData[storyKey];
  if (!item) {
    return;
  }

  const index = storySteps.findIndex((step) => step.dataset.story === storyKey);
  storyBadge.textContent = item.badge;
  storyTitle.textContent = item.title;
  storyText.textContent = item.text;
  storyInput.textContent = item.input;
  storyReasoning.textContent = item.reasoning;
  storyOutput.textContent = item.output;
  storyPreview.style.setProperty("--story-accent", item.accent);
  storyPreview.style.setProperty("--story-secondary", item.secondary);
  storyProgressBar.style.width = `${((index + 1) / storySteps.length) * 100}%`;

  storySteps.forEach((step) => {
    step.classList.toggle("is-current", step.dataset.story === storyKey);
  });
}

caseCards.forEach((card) => {
  card.addEventListener("click", () => {
    setSpotlight(card.dataset.case);
  });

  card.addEventListener("mouseenter", () => {
    setSpotlight(card.dataset.case);
  });

  card.addEventListener("pointermove", (event) => {
    if (window.innerWidth < 900) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateY = ((offsetX / rect.width) - 0.5) * 10;
    const rotateX = ((offsetY / rect.height) - 0.5) * -10;

    card.style.setProperty("--rx", `${rotateX}deg`);
    card.style.setProperty("--ry", `${rotateY}deg`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--rx", "0deg");
    card.style.setProperty("--ry", "0deg");
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
  {
    threshold: 0.18,
  },
);

revealItems.forEach((item) => {
  revealObserver.observe(item);
});

const storyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setStory(entry.target.dataset.story);
      }
    });
  },
  {
    threshold: 0.55,
    rootMargin: "-10% 0px -18% 0px",
  },
);

storySteps.forEach((step) => {
  storyObserver.observe(step);
});

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
setStory("cooking");
