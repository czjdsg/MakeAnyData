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
    title: "Geometry Stuck-Point Tutoring Data",
    summary:
      "A circle-geometry teaching video is distilled into one stuck-point tutoring sample: the exact frame where students get blocked, a natural question, and a short interleaved path to ∠KML.",
    tags: ["education", "reasoning", "stuck-point"],
    pipeline: {
      inputIntent:
        "This is a worked-solution teaching video. Please construct tutoring data from it.",
      inputVideo: "./assets/case-edu/input-30s.mp4",
      inputPoster: "./assets/case-edu/edu.webp",
      inputFallbackTitle: "Geometry lesson recording",
      inputFallbackCopy:
        "The full lesson runs for more than an hour, but the useful tutoring signal is concentrated in one geometric bottleneck.",
      thoughts: [
        {
          title: "Identify the lesson content",
          body: "The clip is a circle-geometry worked solution involving a tangent, a radius, an isosceles triangle, and the target angle ∠KML. The board writing, formulas, and angle annotations make it suitable for tutoring-style supervision.",
        },
        {
          title: "Choose the right data form",
          body: "Educational data should not replay the whole solution from start to finish. The stronger sample is a stuck-point tutoring example that asks only what to do next at the exact reasoning bottleneck.",
        },
        {
          title: "Lock the unique bottleneck",
          body: "After the earlier 42-degree deduction and the isosceles-triangle cue, the real bottleneck is solving ∠KML. Most students get stuck here because they fail to notice the tangent-plus-chord pattern.",
        },
        {
          title: "Select the key frame",
          body: "The right tutoring frame is the moment just before ∠KML is solved. At that point the tangent, chord, and known angle are all visible, but the theorem bridge has not yet been stated.",
        },
        {
          title: "Write a natural student query",
          body: "The prompt should sound like a real learner: I have reached this step in the circle-geometry problem. How should I continue to solve ∠KML? You can refer to this teaching video.",
        },
        {
          title: "Package the ground truth",
          body: "The final sample should stay short and interleaved: current stuck state, theorem cue, supporting board frame, and the final angle deduction.",
        },
      ],
      outputQuestion:
        "I have reached this step in the circle-geometry problem shown in the image. How should I continue to solve ∠KML? You can refer to this teaching video.",
      taskVideo: "./assets/case-edu/input-30s.mp4",
      taskPoster: "./assets/case-edu/edu.webp",
      outputText:
        "Based on the solution video and diagram you provided, here is a clear explanation of how to continue solving ∠KML, focused on the exact point where you got stuck:",
      outputSequence: [
        {
          type: "text",
          text:
            "You have already used the fact that the radius is perpendicular to the tangent to derive 42 degrees, and you also know that triangle KOL is isosceles, but you still do not know how to continue solving ∠KML. Based on the explanation in the teaching video, if you look carefully at the diagram, you can see that it contains tangent ML together with chord KL. This is the typical signal for applying the tangent-chord theorem, and it is also the key breakthrough emphasized in the video.",
        },
        {
          type: "image",
          src: "./assets/case-edu/edu2.webp",
          alt: "The board highlights the tangent-chord relation needed for the final deduction.",
        },
        {
          type: "text",
          text:
            "As the teaching video explains, according to the tangent-chord theorem, the angle between a tangent and a chord is equal to the inscribed angle on the opposite side subtended by that chord. Combining this diagram with the 42 degrees you have already obtained, the video derives that the inscribed angle corresponding to chord KL is 48 degrees, so ∠KML = 48 degrees. The core bottleneck in this problem is failing to recognize the tangent-plus-chord pattern. The video also highlights that once you recall the tangent-chord theorem, you can obtain the angle directly.",
        },
      ],
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
    variants: [
      {
        variantLabel: "Shopping",
        title: "Cross-App GUI Task Reconstruction",
        summary:
          "Fragmented phone interactions are reorganized into one coherent shopping task that spans eBay and Amazon.",
        tags: ["gui", "cross-app", "trajectory"],
        pipeline: {
          inputIntent:
            "These are my mobile interaction fragments. Use them to construct a more comprehensive long-horizon task trajectory from them.",
          inputFallbackTitle: "Fragmented mobile interaction traces",
          inputFallbackCopy:
            "These clips capture separate app operations rather than one complete goal-directed task.",
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
      {
        variantLabel: "Route Planning",
        title: "Desktop Route-Planning Reconstruction",
        summary:
          "A set of desktop map fragments is stitched into one long-horizon route-planning workflow from browser launch to multi-modal route review.",
        tags: ["gui", "maps", "desktop"],
        pipeline: {
          inputIntent:
            "These are my desktop interaction fragments. Use them to construct a more comprehensive long-horizon task trajectory from them.",
          inputFallbackTitle: "Desktop route-planning fragments",
          inputFallbackCopy:
            "These clips record partial browser and map interactions rather than one complete end-to-end planning task.",
          inputAssetMode: "landscape",
          inputAssets: [
            {
              type: "video",
              src: "./assets/case-gui-2/fragment_A.mp4",
              label: "Fragment A",
              description: "Inspect the public-transit route between London and Oxford.",
            },
            {
              type: "video",
              src: "./assets/case-gui-2/fragment_B.mp4",
              label: "Fragment B",
              description: "Inspect the driving route between London and Oxford.",
            },
            {
              type: "video",
              src: "./assets/case-gui-2/fragment_C.mp4",
              label: "Fragment C",
              description: "Return to the Google home page.",
            },
            {
              type: "video",
              src: "./assets/case-gui-2/fragment_D.mp4",
              label: "Fragment D",
              description: "Search Walmart in Google and open the Walmart Mexico site.",
            },
            {
              type: "video",
              src: "./assets/case-gui-2/fragment_E.mp4",
              label: "Fragment E",
              description: "Inspect the walking route between London and Oxford.",
            },
            {
              type: "video",
              src: "./assets/case-gui-2/fragment_F.mp4",
              label: "Fragment F",
              description: "Launch Microsoft Edge and enter Google Maps.",
            },
            {
              type: "video",
              src: "./assets/case-gui-2/fragment_G.mp4",
              label: "Fragment G",
              description: "Inspect the cycling route between London and Oxford.",
            },
            {
              type: "video",
              src: "./assets/case-gui-2/fragment_H.mp4",
              label: "Fragment H",
              description: "Re-check the public-transit route details.",
            },
            {
              type: "video",
              src: "./assets/case-gui-2/fragment_I.mp4",
              label: "Fragment I",
              description: "Search for University of London and set Oxford as the destination.",
            },
          ],
          thoughts: [
            {
              title: "Analyze the fragment set",
              body: "F launches Edge and opens Google Maps; I searches for University of London and sets Oxford as the destination; G, E, A, and B inspect cycling, walking, public-transit, and driving routes; H revisits public transit; C ends the task; D searches Walmart and is unrelated.",
            },
            {
              title: "Form the task hypothesis",
              body: "The useful fragments describe a route-planning workflow: open the browser, enter map service, set the route, review several transportation modes, and then finish the task.",
            },
            {
              title: "Stitch a valid long chain",
              body: "F must come before I because the browser and map service have to be opened first. After the route is set in I, the interface can move through G, E, A, and B to inspect cycling, walking, public-transit, and driving views. H naturally follows as a final public-transit check, and C closes the task. The final order is F -> I -> G -> E -> A -> B -> H -> C.",
            },
            {
              title: "Export the final trajectory",
              body: "The reconstructed sample becomes one coherent desktop GUI task: launch the browser, open Google Maps, set directions from London to Oxford, inspect multiple route modes, and then exit.",
            },
          ],
          taskPoster: "./assets/case-gui-2/init.webp",
          outputQuestion:
            "Open a browser, go to Google Maps, search directions from London to Oxford, and review cycling, walking, public-transit, driving, and best-route options.",
          outputText: "",
          outputSequence: [
            {
              type: "text",
              text: "A complete desktop GUI trajectory with screen states, reasoning, and actions from browser launch to route comparison.",
            },
            {
              type: "video",
              src: "./assets/case-gui-2/full_task_video.mp4",
              poster: "./assets/case-gui-2/init.webp",
              alt: "A long-horizon desktop GUI task video that plans and compares routes from London to Oxford in Google Maps.",
            },
          ],
        },
      },
    ],
  },
  embodied: {
    index: "04",
    domain: "Embodied",
    variants: [
      {
        variantLabel: "Robot Recovery",
        title: "Embodied Fault-Recovery World Model",
        summary:
          "One robot manipulation clip is expanded into three fault-recovery world-model samples with diagnosis, recall, and corrected execution.",
        tags: ["robotics", "world-model", "fault-recovery"],
        pipeline: {
          inputIntent:
            "This is a robot manipulation video. Help me construct embodied decision and world-model training data from it.",
          inputVideo: "./assets/case-embody/hesitate-gen.mp4",
          inputPoster: "./assets/case-embody/source.webp",
          inputFallbackTitle: "Robot manipulation source clip",
          inputFallbackCopy:
            "A successful tissue pick-and-place routine can be turned into richer decision data once failure and correction are modeled.",
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
      {
        variantLabel: "Driving Planning",
        title: "Driving Planning Decision Data",
        summary:
          "A short road-driving clip is converted into a readable planning sample with a natural driving task and interleaved decision evidence.",
        tags: ["driving", "planning", "decision-making"],
        pipeline: {
          inputIntent:
            "This is an outdoor driving scene. Help me construct driving planning and decision data from it.",
          inputVideo: "./assets/case-driving/input.mp4",
          inputPoster: "./assets/case-driving/driving1.webp",
          inputFallbackTitle: "Road-driving source clip",
          inputFallbackCopy:
            "The useful supervision is a near-term planning answer grounded in crosswalk, workzone, bus, and oncoming-traffic constraints.",
          thoughts: [
            {
              title: "Parse the road scene",
              body: "The clip shows a daytime urban or campus road with a two-way two-lane layout, a double yellow center line, a crosswalk ahead, roadside parking or curb space on the right, and multiple interacting risk sources.",
            },
            {
              title: "Choose the right data type",
              body: "The target should be planning-decision supervision: summarize the scene, identify the main risks, decide how to manage speed and lane position, and explain the next few steps in a trainable format.",
            },
            {
              title: "Lock the high-value supervision target",
              body: "The strongest sample is a compound-risk segment where crosswalk yielding, left-side workzone pressure, right-side bus uncertainty, and oncoming-traffic constraints all appear in one short horizon.",
            },
            {
              title: "Rewrite JSON into readable guidance",
              body: "Instead of exposing structured fields directly, the final answer should read like a natural planning response while preserving the same evidence, actions, and safety constraints.",
            },
          ],
          taskVideo: "./assets/case-driving/input.mp4",
          taskVideoPoster: "./assets/case-driving/driving1.webp",
          taskPoster: "",
          outputQuestion:
            "I am driving straight on an outdoor road. I am approaching a crosswalk, there may be a pedestrian entering from the left, there is a work vehicle and cones ahead on the left, a bus is stopped or moving slowly on the right, and oncoming traffic may appear while I must not cross the double yellow line. Based on the video, give me a driving plan for the next 10 to 15 seconds and explain each step.",
          outputText: "",
          outputSequence: [
            {
              type: "text",
              text:
                "Start by easing off the speed while staying centered in the lane. The road ahead is still open, but this is the moment to create margin before the crosswalk and to watch whether the pedestrian on the left is about to commit to crossing.",
            },
            {
              type: "image",
              src: "./assets/case-driving/driving1.webp",
              alt: "The ego vehicle approaches the crosswalk on a straight road with clear forward visibility.",
            },
            {
              type: "text",
              text:
                "As the crosswalk markings and the pedestrian become active conflict points, keep the steering stable and slow to a low speed. If the pedestrian occupies the crossing path, be ready to stop and wait until the crosswalk is fully clear before continuing.",
            },
            {
              type: "image",
              src: "./assets/case-driving/driving2.webp",
              alt: "A pedestrian is entering the crosswalk, which creates an immediate yield requirement.",
            },
            {
              type: "text",
              text:
                "After the crosswalk, pass the workzone cautiously at low speed. Stay inside your lane, bias slightly to the right to open space from the cones and work vehicle, but do not accelerate alongside the bus and do not cross the double yellow line. Use the extra attention margin to monitor any hidden pedestrian, cyclist, or bus pull-out from the right.",
            },
            {
              type: "image",
              src: "./assets/case-driving/driving3.webp",
              alt: "The lane is compressed by left-side cones and a right-side bus, requiring a careful in-lane offset.",
            },
            {
              type: "text",
              text:
                "Once the cone corridor starts to end and the road opens up again, return gradually to the lane center and recover to a comfortable cruising speed. Even after the main conflict is gone, keep checking the oncoming lane and preserve enough stopping room in case the right-side vehicle moves unexpectedly.",
            },
            {
              type: "image",
              src: "./assets/case-driving/driving4.webp",
              alt: "The road becomes more open after the constrained section, allowing a gradual return to normal driving.",
            },
          ],
        },
      },
    ],
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
        variantLabel: "Livestream Generation",
        title: "Livestream Hand-Object Generation",
        summary:
          "A bag-selling livestream replay is distilled into three text-to-video samples centered on precise hand-object interactions.",
        tags: ["generation", "livestream", "product"],
        pipeline: {
          inputIntent:
            "This is a livestream e-commerce replay. Help me construct valuable generation data from it.",
          inputVideo: "./assets/case-gen-digit/input.mp4",
          inputPoster: "./assets/case-gen-digit/input.webp",
          inputFallbackTitle: "Livestream e-commerce replay",
          inputFallbackCopy:
            "The useful signal is not the whole replay. It is the high-value hand-object interaction segments that can be turned into clean text-to-video supervision.",
          thoughts: [
            {
              title: "Analyze the source livestream",
              body: "The clip is a Belle shopping livestream centered on a beige monogram tote bag. The host repeatedly demonstrates zipper closing, lifting, shoulder carrying, and close-up display through clear and continuous hand-object interactions.",
            },
            {
              title: "Choose the right target format",
              body: "The useful output is not the full replay. It is a filtered set of high-value interaction segments paired with precise visual prompts so the sample can directly supervise video generation.",
            },
            {
              title: "Localize the core segments",
              body: "Three segments stand out: 00:00-00:04 for lifting, zipper closing, and handle display; 00:09-00:11 for putting the bag onto the shoulder; and 00:14-00:18 for taking the bag off and presenting it to the camera.",
            },
            {
              title: "Write generation-ready prompts",
              body: "Each task prompt should fully specify the livestream setting, the host appearance, the outfit, the bag state, and the detailed hand-object motion so the interaction can be faithfully reproduced by a video model.",
            },
          ],
          outputText: "",
          outputSequence: [
            {
              type: "parallel-grid",
              items: [
                {
                  title: "Zip and Lift",
                  prompt:
                    "Belle New Year shopping livestream scene. The main subject is an East Asian female host with long straight black hair and gold earrings. She wears a dark-blue denim jacket, a white inner shirt, and dark-blue denim jeans, standing inside a light beige livestream room with a white BELLE logo on the wall, a BELLE New Year promotional poster at the top, gray handbags on the shelf to the right, and floating livestream benefit widgets on screen. The host lightly lifts the left side of a beige monogram tote bag with her left hand, uses her right hand to pull the zipper slider upward until the bag is fully closed, then grips the brown leather handle and raises the bag while stepping back slightly so the bag swings naturally. The full sequence should clearly show the precise hand-object interaction.",
                  generatedVideo: "./assets/case-gen-digit/seg1.mp4",
                },
                {
                  title: "Shoulder Carry",
                  prompt:
                    "Belle New Year shopping livestream scene. An East Asian female host with long straight black hair and gold earrings stands in a light beige livestream room wearing a dark-blue denim outfit. She supports the brown handle of a beige monogram tote bag with her left hand, keeps the bag vertical, slides her right arm under the handle and along the side of the bag, then lifts with the left hand while the right hand guides the bag so the strap lands precisely on her right shoulder. She adjusts the bag until it sits naturally against the shoulder, fully presenting the hand-object interaction of putting the bag on.",
                  generatedVideo: "./assets/case-gen-digit/seg2.mp4",
                },
                {
                  title: "Take Off and Present",
                  prompt:
                    "Belle New Year shopping livestream scene. An East Asian female host with long straight black hair and gold earrings stands in a light beige livestream room wearing a dark-blue denim outfit. With her right hand, she gently pulls down the strap of a beige monogram tote bag to remove it from her right shoulder, then grips the handle and raises the bag toward the camera. She rotates the bag slightly, around thirty degrees, to clearly present the monogram pattern and the decorative charm on the front. The full motion should capture the complete hand-object interaction of taking off the bag and presenting the product.",
                  generatedVideo: "./assets/case-gen-digit/seg3.mp4",
                },
              ],
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
const caseTaskVideo = document.getElementById("case-task-video");
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
  embodied: 1,
  gui: 1,
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
  const taskPoster = Object.prototype.hasOwnProperty.call(pipeline, "taskPoster")
    ? pipeline.taskPoster
    : pipeline.inputPoster;
  const taskVideo = pipeline.taskVideo || "";
  const taskVideoPoster = Object.prototype.hasOwnProperty.call(
    pipeline,
    "taskVideoPoster",
  )
    ? pipeline.taskVideoPoster
    : taskPoster || pipeline.inputPoster || "";
  const hasTaskPoster = Boolean(taskPoster);
  const hasTaskVideo = Boolean(taskVideo);
  const hasTaskQuestion = Boolean(caseOutputQuestion.textContent.trim());

  caseOutputQuestion.hidden = !hasTaskQuestion || hasParallelOutput;
  caseOutputText.hidden = !caseOutputText.textContent.trim();

  if (caseOutputCard) {
    caseOutputCard.classList.toggle("is-parallel", hasParallelOutput);
  }

  if (caseOutputTaskField) {
    caseOutputTaskField.hidden =
      hasParallelOutput || (!hasTaskPoster && !hasTaskVideo && !hasTaskQuestion);
  }

  if (caseOutputTaskLabel) {
    caseOutputTaskLabel.hidden = hasParallelOutput;
  }

  if (caseOutputSolutionLabel) {
    caseOutputSolutionLabel.hidden = hasParallelOutput;
  }

  if (caseTaskPreview && caseTaskPoster && caseTaskVideo) {
    caseTaskPreview.hidden = (!hasTaskPoster && !hasTaskVideo) || hasParallelOutput;

    if (hasTaskVideo) {
      caseTaskVideo.hidden = false;
      caseTaskVideo.src = taskVideo;
      caseTaskVideo.poster = taskVideoPoster;
      caseTaskVideo.load();
    } else {
      caseTaskVideo.hidden = true;
      caseTaskVideo.removeAttribute("src");
      caseTaskVideo.removeAttribute("poster");
      caseTaskVideo.load();
    }

    if (hasTaskPoster && !hasParallelOutput) {
      caseTaskPoster.hidden = false;
      caseTaskPoster.src = taskPoster;
      caseTaskPoster.alt = pipeline.inputFallbackTitle || "Task source frame";
    } else {
      caseTaskPoster.hidden = true;
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
  caseInputAssets.classList.toggle(
    "is-landscape",
    pipeline.inputAssetMode === "landscape",
  );

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
