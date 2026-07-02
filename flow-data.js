/* ============================================================
   Kentlands Psychotherapy — Client Journey flow chart data
   ------------------------------------------------------------
   THIS is the file to edit to grow the chart. The page (journey.html)
   reads this tree and draws it automatically — you never touch the HTML.

   Each node looks like:
     {
       id:     "unique-id",              // required, must be unique
       label:  "What the box says",      // required
       sub:    "small italic subtitle",  // optional
       type:   "stage",                  // optional, controls the color:
                                          //   entry | decision | stage |
                                          //   pipeline | milestone | urgent |
                                          //   ref | root
       detail: ["bullet one",            // optional — shown when the node is
                "bullet two"],           //   expanded; use for the specifics
       to:     "some-other-id",          // ONLY for type:"ref" — clicking the
                                          //   box jumps to that node
       children: [ ...more nodes... ]    // optional — the boxes it points to
     }

   To add a journey: drop a new node (with its own children) wherever it
   belongs and save. To add a step: add it to a node's `children`.
   ============================================================ */

window.JOURNEY = {
  id: "root",
  label: "Client Journeys",
  sub: "Kentlands Psychotherapy — every path, one system",
  type: "root",
  children: [

    /* ───────────────── ① GETTING IN TOUCH ───────────────── */
    {
      id: "entry",
      label: "① Getting in touch",
      sub: "How a person first reaches KP",
      type: "entry",
      children: [
        {
          id: "phone",
          label: "Phone Tree",
          sub: "The front door",
          type: "entry",
          detail: ["Screens spam / unwanted calls", "Classifies why they're calling", "Creates or updates an inquiry"],
          children: [
            {
              id: "new-client",
              label: "New Client",
              sub: "New to the practice",
              type: "decision",
              children: [
                {
                  id: "insurance",
                  label: "Insurance check",
                  sub: "The real lead filter",
                  type: "decision",
                  detail: ["KP is private / out-of-network / fee-for-service", "Pre-qualifies callers so the team spends time on good-fit leads"],
                  children: [
                    { id: "ins-traditional", label: "Traditional insurance", sub: "BC/BS, Aetna, Cigna, United", type: "milestone", detail: ["✅ Served — self-pay + monthly superbill for OON reimbursement"], children: [ { id: "ref-trad", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] },
                    { id: "ins-medicare", label: "Medicare", type: "stage", detail: ["⚠️ Private pay only (providers opted out)", "Or texted a Psychology Today referral link"] },
                    { id: "ins-hmo", label: "HMO (Kaiser)", type: "stage", detail: ["⚠️ Private pay only; can self-advocate for OON reimbursement"] },
                    { id: "ins-tricare", label: "Tricare", type: "urgent", detail: ["❌ Referred out — texted a Psychology Today link"] },
                    { id: "ins-medicaid", label: "Medicaid", type: "urgent", detail: ["❌ Cannot serve at all, even self-pay (federal compliance)", "Texted a Medicaid referral link"] }
                  ]
                },
                { id: "nc-therapist", label: "Find a therapist", type: "stage", detail: ["Transferred to find a good-fit therapist", "Or uses the online Matching Tool"], children: [ { id: "ref-therapist", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] },
                {
                  id: "nc-prescriber", label: "Prescriber", sub: "Psychiatry / medication", type: "decision",
                  detail: ["Two providers; caller chooses how to learn more (press 1–4)"],
                  children: [
                    { id: "presc-kress", label: "Dr. Adrian Kress", sub: "MD psychiatrist · press 1", type: "stage",
                      detail: ["Text-back with his fees & info"], children: [ { id: "ref-presc-kress", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] },
                    { id: "presc-donmoyer", label: "Dr. Brent Donmoyer", sub: "PMHNP · press 2", type: "stage",
                      detail: ["Text-back with his fees & info"], children: [ { id: "ref-presc-don", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] },
                    { id: "presc-both", label: "Info on both", sub: "press 3", type: "stage",
                      detail: ["Text-back with both providers' fees & info"], children: [ { id: "ref-presc-both", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] },
                    { id: "presc-talk", label: "Talk to someone now", sub: "press 4", type: "stage",
                      detail: ["Speak with the team about who's the best fit"], children: [ { id: "ref-presc-talk", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] }
                  ]
                },
                { id: "nc-testing", label: "Testing program", sub: "$4,320 package", type: "stage", detail: ["~20 hrs of psychologist time", "Free 20-min consult → pre-meeting → testing → results + report"], children: [ { id: "ref-testing", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] }
              ]
            },
            {
              id: "existing-client",
              label: "Existing Client",
              sub: "Already a client",
              type: "decision",
              children: [
                { id: "ex-urgent", label: "Urgent — today", sub: "press 1", type: "urgent", detail: ["Dedicated voicemail; team alerted right away"] },
                { id: "ex-sched", label: "Book / cancel / reschedule", sub: "press 2", type: "stage", detail: ["Coordinator handles it or routes to the calendar"] },
                { id: "ex-newservice", label: "Set up a new service", sub: "press 3", type: "stage", detail: ["Adding therapy, meds, or testing to current care"] },
                { id: "ex-meds", label: "Medication issues", sub: "press 4", type: "stage", detail: ["Med management for current clients"], children: [ { id: "ref-exmed", label: "→ Med Management", type: "ref", to: "med-mgmt" } ] },
                { id: "ex-records", label: "Records request", sub: "press 5", type: "stage", detail: ["Release of Information & Records Request form"] },
                { id: "ex-billing", label: "Payment & billing", sub: "press 6", type: "stage", detail: ["Superbills live in the desktop patient portal"] },
                { id: "ex-other", label: "Anything else", sub: "press 7", type: "stage", detail: ["Message or route to the right admin"] },
                { id: "ex-operator", label: "Operator", sub: "press 0 — anytime", type: "stage", detail: ["An available admin picks up if one's free"] }
              ]
            },
            { id: "biz-entry", label: "Business matters", sub: "Vendors, referrals", type: "stage", children: [ { id: "ref-biz", label: "→ Business pipeline", type: "ref", to: "business" } ] },
            { id: "emp-entry", label: "Employment / Training", sub: "Jobs & internships", type: "stage", children: [ { id: "ref-emp", label: "→ Applicants pipeline", type: "ref", to: "applicants" } ] },
            { id: "anything", label: "Anything else", type: "stage", detail: ["Rings the desk or takes a message"], children: [ { id: "ref-any", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] }
          ]
        },
        { id: "webforms", label: "Web forms", sub: "Website & webforms", type: "entry", detail: ["Main Website Contact form", "All Inquiries webform", "Website Testing Inquiry form", "Cancellation Request"], children: [ { id: "ref-web", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] },
        {
          id: "matching-tool", label: "Clinician Matching Tool", sub: "Our self-serve search — a client channel", type: "decision",
          detail: ["Our software (built on GHL): the self-serve way a client finds their own match", "A 3-step wizard, in order — the insurance step only comes at the very end, when you connect"],
          children: [
                {
                  id: "mt-care", label: "Step 1 · Type of care", sub: "routes what you'll see", type: "decision",
                  detail: ["Therapy (individual · minor · couples · family) · Medication · Testing"],
                  children: [
                    {
                      id: "mt-needs", label: "Step 2 · Your needs", sub: "in your own words", type: "stage",
                      detail: ["Free-text summary + optional refine chips (specialty, population, age, format, PSYPACT)"],
                      children: [
                        {
                          id: "mt-results", label: "Step 3 · Matched clinicians", sub: "the best 1–3", type: "stage",
                          detail: ["Therapy → ranked by fit + your words vs each bio", "Medication → every available prescriber", "Testing → shared team card ($4,320)", "Always the best 1–3 — never a dead end"],
                          children: [
                            {
                              id: "mt-book", label: "Connect with the clinician", sub: "the insurance fork — only at booking", type: "decision",
                              detail: ["Triggered when you click 'Connect' on a match", "Out-of-network disclaimer shown first: KP is private, fee-for-service"],
                              children: [
                                { id: "mt-oop", label: "Comfortable paying out of pocket", type: "milestone",
                                  detail: ["Prefilled text or HIPAA form (no PHI on our side)", "Superbill provided for out-of-network reimbursement"],
                                  children: [ { id: "ref-mt-oop", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] },
                                { id: "mt-innet", label: "Prefer to stay in-network", type: "stage",
                                  detail: ["Shifts to an in-network referral request — the team helps find someone"],
                                  children: [ { id: "ref-mt-innet", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] },
                                { id: "mt-insq", label: "Insurance question", type: "stage",
                                  children: [ { id: "ref-mt-insq", label: "→ Creates an inquiry", type: "ref", to: "inquiry" } ] }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
        }
      ]
    },

    /* ───────────────── ② THE INQUIRY JOURNEY (spine) ───────────────── */
    {
      id: "inquiry",
      label: "② The inquiry journey",
      sub: "Once you're in the All Inquiries pipeline",
      type: "pipeline",
      children: [
        {
          id: "new-inquiry",
          label: "New Inquiry",
          sub: "Not yet contacted",
          type: "stage",
          children: [
            {
              id: "response",
              label: "Response & Follow-up",
              sub: "The team makes contact",
              type: "stage",
              detail: ["Escalation engine (all live):", "9 business hrs → URGENT", "16 business hrs → URGENT", "32 business hrs → URGENT"],
              children: [
                {
                  id: "matching",
                  label: "Clinician Matching",
                  sub: "Finding the right fit",
                  type: "stage",
                  detail: ["Matching form → opportunity", "Appointment Desk Survey → opportunity", "Syncing Clinician Data keeps availability fresh"],
                  children: [
                    {
                      id: "scheduling",
                      label: "Scheduling",
                      sub: "Booking the first appointment",
                      type: "stage",
                      detail: ["Consult / FollowUp Scheduled", "Ready to Schedule", "Waiting List (7-day reminder)"],
                      children: [
                        {
                          id: "paperwork",
                          label: "Paperwork",
                          sub: "Intake documentation",
                          type: "stage",
                          detail: ["PWK Pending (Scheduled)", "Incomplete after 48 hrs → URGENT"],
                          children: [
                            {
                              id: "client",
                              label: "Officially a Client",
                              sub: "Booked + paperwork complete",
                              type: "milestone",
                              detail: ["Won Inquiry Automation", "Moved to Completed — Current Clients", "Enters NEW CLIENTS pipeline", "On future calls, the phone tree now routes them as a current client"],
                              children: [
                                { id: "ref-retention", label: "→ Staying cared for", type: "ref", to: "retention" },
                                { id: "ref-exclient", label: "→ Future calls: the Existing-Client menu", type: "ref", to: "existing-client" }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { id: "lost", label: "Done / Lost Lead", type: "urgent", detail: ["Lost Inquiry Automation", "Contact type → archived"] }
              ]
            }
          ]
        }
      ]
    },

    /* ───────────────── ③ STAYING CARED FOR ───────────────── */
    {
      id: "retention",
      label: "③ Staying cared for",
      sub: "Active clients & retention",
      type: "milestone",
      children: [
        { id: "care-gaps", label: "Active Care Gaps", sub: "Time since last appointment", type: "stage", detail: ["1–7d · 8–14d · 2–4wk · 1–2mo · 2+mo", "6+ months → urgent", "1 year+ → urgent"] },
        { id: "new-clients", label: "New Clients", sub: "First 6 months", type: "stage", detail: ["Onboarding & early check-ins", "Called for Feedback"] },
        { id: "med-mgmt", label: "Med Management", sub: "Current-client requests", type: "stage", detail: ["New request → form → completed"] },
        { id: "reviews", label: "Surveys & Reviews", type: "stage", detail: ["Satisfaction survey after sessions", "Google Review link tracker"] },
        { id: "reactivation", label: "Reactivation", sub: "Reuven's clients", type: "stage", detail: ["Clients awaiting a clinician's return", "Reactivation booked"] }
      ]
    },

    /* ───────────────── ④ OTHER JOURNEYS ───────────────── */
    {
      id: "other",
      label: "④ Other journeys",
      sub: "Non-client pipelines",
      type: "entry",
      children: [
        { id: "business", label: "Business — Vendor & Referral", type: "stage", detail: ["New Lead → Contacted → Proposal Sent → Closed"] },
        { id: "referral", label: "Referral Outreach", type: "stage", detail: ["Proactive outreach to referral partners", "New Lead → Contacted → Proposal → Closed"] },
        { id: "applicants", label: "Applicants — Job / Internship", type: "stage", detail: ["New Applicant → Responded → Application → Interview → Offer → Onboarding"] }
      ]
    },

    /* ───────────────── ⑤ BEHIND THE SCENES (internal tools) ───────────────── */
    {
      id: "team-tools",
      label: "⑤ Behind the scenes",
      sub: "🔒 Internal tools that serve the client",
      type: "pipeline",
      detail: ["Not how clients reach us — how our team works the inquiry and keeps the match current"],
      children: [
        { id: "ccc-console", label: "CCC Console", sub: "Coordinator call co-pilot", type: "stage",
          detail: ["Guides the coordinator through the call live", "Reuses the SAME matcher engine on the call", "Logs the call note straight into GHL"],
          children: [ { id: "ref-ccc", label: "→ Works the inquiry (Response & Follow-up)", type: "ref", to: "response" } ] },
        { id: "clinician-console", label: "Clinician Console", sub: "Clinician self-service", type: "stage",
          detail: ["Clinicians set OPEN / FULL + edit their profile", "Availability feeds the matcher in real time"],
          children: [ { id: "ref-clincon", label: "→ Keeps the Matching Tool current", type: "ref", to: "matching-tool" } ] }
      ]
    }
  ]
};
