/* ============================================================
   Kentlands Psychotherapy — flow-chart node DETAIL
   ------------------------------------------------------------
   Rich context shown in the slide-in drawer when a box on the
   Journey flow chart is clicked. Keyed by the node `id` in
   flow-data.js. Each entry is a list of "modules":

     { type, title, body, link, linkLabel }

   type controls the icon/color:
     script   💬  what's actually said (the phone script)
     behind   ⚙️  what the CRM/automations do, unseen
     textback 📲  an automatic text-back (usually with a link)
     link     🔗  a relevant page/form (renders a button)
     tool     🛠️  which KP tool is involved
     serve    ✅  can we serve this caller?
     note     📌  good-to-know context

   Nodes with no entry here fall back to their flow-data `detail`.
   ============================================================ */
window.FLOW_DETAIL = {

  phone: [
    { type: "script", title: "What the caller hears", body: "“You've reached the offices of Kentlands Psychotherapy.”  Press 1 — Existing Client · 2 — New Client · 3 — Business · 4 — Employment / Training · 5 — Anything Else. (Press 0 anytime for an available admin.)" },
    { type: "behind", title: "What the CRM does on the call", body: "Screens spam / unwanted numbers, classifies why they're calling, and creates or updates an Opportunity in the All Inquiries pipeline — so nothing is lost." },
    { type: "note", title: "Hours & after-hours", body: "Admin hours are generally M–F 9:30–5. After hours, clients reach their therapist through the SimplePractice portal; emergencies call 911 first." }
  ],

  "new-client": [
    { type: "script", title: "Dr. Carr's welcome", body: "“I'm Dr. Elizabeth Carr, Founder. I'm so glad you're considering us. A quick reminder — Kentlands is a private, fee-for-service practice, not in-network with insurance — but we provide medical receipts (superbills) for out-of-network reimbursement.”" },
    { type: "behind", title: "Why insurance is asked first", body: "The New-Client branch pre-qualifies callers by insurance so the team spends its time on good-fit leads." }
  ],

  insurance: [
    { type: "note", title: "The real lead filter", body: "Because KP is out-of-network, insurance type decides fit: government / HMO plans are usually private-pay or referred out; traditional plans use superbill reimbursement." }
  ],

  "ins-traditional": [
    { type: "script", title: "What we explain", body: "“Most of our clients have traditional insurance and use their monthly superbill to file for out-of-network reimbursement. You put a card on file, it's charged the day of service, and a cumulative superbill lands in your patient portal each month.”" },
    { type: "note", title: "Superbill tip", body: "Superbills are in the DESKTOP portal only (the app shows invoices). Submit the superbill — not invoices — to your insurer." },
    { type: "link", title: "Send them the guide", body: "Full tutorial on filing and estimating your cost share.", link: "https://www.kentlandspsychotherapy.com/contact-us-kentlands-psychotherapy/insurance-info/", linkLabel: "Out-of-network benefits guide" },
    { type: "serve", title: "Can we serve them?", body: "✅ Yes — self-pay + monthly superbill." }
  ],

  "ins-medicare": [
    { type: "script", title: "What we say", body: "“Our providers have opted out of Medicare, which means Medicare clients are private-pay — there's no reimbursement from Medicare or a supplement.”" },
    { type: "textback", title: "Auto text-back", body: "“Press 1 and we'll text you a Psychology Today list, pre-filtered for Gaithersburg + Medicare.”", link: "https://www.psychologytoday.com/us/therapists/md/gaithersburg?category=medicare", linkLabel: "Psychology Today · Medicare" },
    { type: "serve", title: "Fit", body: "⚠️ Private pay only, or referred out." }
  ],

  "ins-medicaid": [
    { type: "script", title: "What we say", body: "“Our practice is private-pay, so we aren't able to see clients enrolled in Medicaid — even out of pocket. That's a federal compliance rule, not case-by-case. I'm sorry we can't be the right fit.”" },
    { type: "textback", title: "Auto text-back", body: "“Press 1 and we'll text you a Psychology Today list, filtered for Gaithersburg + Medicaid.”", link: "https://www.psychologytoday.com/us/therapists/md/gaithersburg?category=medicaid", linkLabel: "Psychology Today · Medicaid" },
    { type: "serve", title: "Fit", body: "⛔ Cannot serve at all, even self-pay (federal compliance)." }
  ],

  "ins-tricare": [
    { type: "script", title: "What we say", body: "“Tricare out-of-network requires a Non-Participating registration, which we've found too onerous to maintain — so we're not able to bill Tricare.”" },
    { type: "textback", title: "Auto text-back", body: "“Press 1 and we'll text you a Psychology Today list, filtered for Gaithersburg + Tricare.”", link: "https://www.psychologytoday.com/us/therapists/md/gaithersburg?category=tricare", linkLabel: "Psychology Today · Tricare" },
    { type: "serve", title: "Fit", body: "❌ Referred out." }
  ],

  "ins-hmo": [
    { type: "script", title: "What we say", body: "“We're not in any HMO networks, so HMO clients are private-pay. That said, some clients have successfully petitioned their HMO for out-of-network reimbursement when the HMO couldn't meet their needs — it can be worth advocating for a written OON agreement.”" },
    { type: "serve", title: "Fit", body: "⚠️ Private pay; client can self-advocate for OON reimbursement." }
  ],

  "nc-therapist": [
    { type: "script", title: "What we say", body: "“Great — let's find the best therapist for your needs. I'm transferring you now.”" },
    { type: "behind", title: "Behind the scenes", body: "Tags the call ‘Pot. Therapy Call', sets Contact Type = Lead, and hands off to the matcher / coordinator." },
    { type: "tool", title: "Tool in play", body: "Clinician Matching Tool + CCC Console." }
  ],

  "nc-prescriber": [
    { type: "script", title: "What we say", body: "“We have two prescribers — Dr. Adrian Kress (MD psychiatrist) and Dr. Brent Donmoyer (PMHNP). Press 1 to text fees & info on Dr. Kress, 2 for Dr. Donmoyer, 3 for both, or 4 to talk with someone about who fits best.”" },
    { type: "textback", title: "Auto text-back", body: "Sends the chosen prescriber's fees + info by text so the caller has it in hand." }
  ],
  "presc-kress": [
    { type: "textback", title: "Press 1 → auto text-back", body: "Texts Dr. Adrian Kress's fees & info (MD-level psychiatrist) so the caller has it in hand." }
  ],
  "presc-donmoyer": [
    { type: "textback", title: "Press 2 → auto text-back", body: "Texts Dr. Brent Donmoyer's fees & info (doctoral-level Psychiatric Mental Health Nurse Practitioner)." }
  ],
  "presc-both": [
    { type: "textback", title: "Press 3 → auto text-back", body: "Texts fees & info for both prescribers so the caller can compare." }
  ],
  "presc-talk": [
    { type: "script", title: "Press 4 → what we say", body: "“…to talk with someone now about these providers and learn more about who might be the best fit for you.” Routes the caller to the team." }
  ],

  "nc-testing": [
    { type: "script", title: "What we say", body: "“Our testing program is comprehensive — about 20 hours of psychologist time: a free 20-minute consult, a pre-meeting, two half-days of testing, then a results meeting with a written report.”" },
    { type: "note", title: "Package & next step", body: "$4,320 — half deposit at booking, half the day before. Press 1 to talk with a coordinator and set up the discovery call." }
  ],

  "existing-client": [
    { type: "script", title: "The menu", body: "Press 1 — urgent (today) · 2 — book / cancel / reschedule · 3 — new service · 4 — medication · 5 — records · 6 — billing · 7 — anything else · 0 — operator." }
  ],
  "ex-urgent": [
    { type: "script", title: "What happens", body: "Routes to a dedicated voicemail that begins “If you're hearing this…” — the team is alerted right away for same-day needs." }
  ],
  "ex-records": [
    { type: "link", title: "Records request form", body: "Release of Information & Records Request.", link: "https://link.kentlandspsychotherapy.com/widget/form/4qDE621P5Pe07bvNhy", linkLabel: "Open the records form" }
  ],
  "ex-billing": [
    { type: "note", title: "Billing", body: "Superbills live in the desktop patient portal; the team can resend receipts and answer billing questions." },
    { type: "faq", title: "“Where's my superbill?”", body: "Superbills are titled “Statement for Insurance Reimbursement”, published monthly for the prior month, in the DESKTOP portal (scroll past the invoices). They carry the diagnostic + treatment codes insurers require for out-of-network reimbursement." },
    { type: "problem", title: "Invoices ≠ superbills", body: "Clients keep submitting the Invoice (also in the portal) to their insurer — invoices lack the required codes and get rejected. They must submit the Superbill. It's in the Welcome Guide, but many miss it." }
  ],
  "ex-meds": [
    { type: "behind", title: "Med management", body: "Current-client med requests route to the Med Management pipeline via a form or a texted trigger link." }
  ],

  anything: [
    { type: "behind", title: "What happens", body: "Rings the desk or takes a message — either way an inquiry is created so the team follows up." }
  ],
  webforms: [
    { type: "behind", title: "Every form lands the same way", body: "Main Website, All-Inquiries, Testing, and Cancellation forms each create an Opportunity and notify the team." }
  ],
  tools: [
    { type: "tool", title: "The three KP tools", body: "Matching Tool (public search), CCC Console (coordinator co-pilot), and Clinician Console (self-service) — all feed the same All Inquiries pipeline." }
  ],

  response: [
    { type: "behind", title: "The escalation engine", body: "If there's no reply: follow-up 9h → URGENT, waiting-on-response 16h → URGENT, low-priority 32h → URGENT. RESPONDED automations reset the clock the moment the client replies." },
    { type: "checklist", title: "Coordinator call checklist", body: "• Confirm insurance / out-of-network fit · Capture the need + preferences · Set expectations (private pay, superbill) · Give onboarding info + the next step · Log the call note in GHL (via the CCC Console)." }
  ],
  matching: [
    { type: "tool", title: "How the match happens", body: "Matching form → opportunity; Syncing Clinician Data keeps availability live; the coordinator approves the clinician–client match." }
  ],
  scheduling: [
    { type: "behind", title: "Behind the scenes", body: "Consult confirmation + reminder go out; the consult event moves the pipeline stage; waitlisted clients get a 7-day reminder." }
  ],
  paperwork: [
    { type: "behind", title: "Keeping paperwork moving", body: "The PWK Pending stage tracks it; if it's incomplete after 48h it escalates to URGENT, and nudges keep it moving." },
    { type: "note", title: "Welcome Guide sent here", body: "Goes out with the SimplePractice paperwork. Covers finding us + parking, arrival, the client portal, appointment/telehealth details, and payments — including how superbills work for out-of-network reimbursement." },
    { type: "checklist", title: "Onboarding checklist", body: "• Intake forms + credit card on file, 24h before the first appt · Set out-of-network expectations (private pay + monthly superbill) · Confirm portal access + where to find the superbill · Point them to the Welcome Guide." },
    { type: "problem", title: "The Welcome Guide isn't being seen", body: "Clients aren't opening it — so they ask FAQs the guide already answers and submit invoices instead of superbills. Worth surfacing the key bits earlier / more visibly, not just in the attached PDF." }
  ],
  client: [
    { type: "behind", title: "Becoming a client", body: "The Won Inquiry automation moves them to Completed / Current Clients and into the NEW CLIENTS (first 6 months) pipeline." },
    { type: "note", title: "Their phone-tree path changes", body: "Now recognized as a current client — future calls route to the Existing-Client menu (billing, records, meds, scheduling…), not the New-Client insurance flow." }
  ],
  reviews: [
    { type: "behind", title: "Reputation loop", body: "A 5-star survey nudges the client to leave a Google review; a low score routes to internal manual review + an email so nothing festers." }
  ],
  "care-gaps": [
    { type: "behind", title: "No one slips away", body: "Active Care Gaps tracks days since the last appointment (1–7d … 1yr+) and prompts re-engagement so active clients don't quietly lapse." }
  ],

  "matching-tool": [
    { type: "tool", title: "How it works", body: "A prospective client answers a few questions — type of care, then their needs in their own words — and gets the best 1–3 clinicians, ranked, with the reason each fits. It never shows an empty screen: if no one's open, it offers a 'welcoming clients soon' tier." },
    { type: "behind", title: "Behind the scenes", body: "Same scoring engine as the CCC Console. Reads live availability from GHL and collects ZERO PHI — identifying info only appears at the hand-off form." }
  ],
  "mt-medication": [
    { type: "note", title: "All prescribers shown", body: "When 'Medication' is picked, every available prescriber is listed (not just the top 3): Dr. Adrian Kress (MD psychiatrist) and Dr. Brent Donmoyer (PMHNP)." }
  ],
  "mt-testing": [
    { type: "script", title: "What the client sees", body: "A shared Testing Team card appears first — always available, even when the psychologists are full — with the ~20-hour process and the $4,320 package. 'Reach out to our team' sets up the discovery call." }
  ],
  "mt-book": [
    { type: "script", title: "The disclaimer (shown first)", body: "“Before you reach out — Kentlands is out-of-network. Most clients pay out of pocket and use a monthly superbill for reimbursement.” Then the client chooses their path." },
    { type: "note", title: "Three message paths — tagged differently", body: "Whatever they pick tags the inquiry: “Clinician Matching — <clinician>” (booking), “— In-network referral request”, or “— Insurance question”, so the team knows exactly what it is." }
  ],
  "mt-oop": [
    { type: "textback", title: "The pre-written message", body: "“We've already written your message — just review and send.” Goes by text (SMS to the practice) or a prefilled HIPAA form — carrying the care type, specialties, and the client's summary. Reassures: 'no payment or commitment here.'" },
    { type: "note", title: "Superbill", body: "Client is reminded a superbill is provided for out-of-network reimbursement." }
  ],
  "mt-innet": [
    { type: "script", title: "In-network path", body: "Choosing 'stay in-network' flips the module to a 'we'll help you find someone in-network' view; the message becomes an in-network referral request — a warm signal/lead for the team to work." }
  ],
  "ccc-console": [
    { type: "tool", title: "Coordinator co-pilot", body: "Guides the coordinator through the call with word-for-word scripts, captures the details, and recommends clinicians live using the same matcher. Caller name/contact go only into the secure GHL form." }
  ],
  "clinician-console": [
    { type: "tool", title: "Clinician self-service", body: "Clinicians sign in (email + last-4 of phone) and flip OPEN/FULL or edit their bio/age range. Availability writes straight to their GHL record and the matcher picks it up — so the public tool is always current." }
  ],
  "team-tools": [
    { type: "note", title: "Backstage, not a client channel", body: "These are internal tools — not a way clients reach us. The Matching Tool (a client channel) lives up in Getting in touch; the two consoles here are how the team works the inquiry and keeps the match current." }
  ],

  /* ── Getting-in-touch extras ── */
  "entry": [
    { type: "behind", title: "The front door", body: "Every first contact — a call, text, email, web form, or one of our own tools — lands here and becomes an inquiry the team can work. Nothing is lost." }
  ],
  "ex-sched": [
    { type: "behind", title: "Booking changes", body: "Book, cancel, or reschedule — a coordinator handles it or routes to the calendar. Cancellations can also come through the Cancellation Request form." }
  ],
  "ex-newservice": [
    { type: "script", title: "Adding a service", body: "A current client asking to add something to their care — e.g. therapy + medication, or a testing evaluation. Routed to set up the new service." }
  ],
  "ex-other": [
    { type: "behind", title: "Catch-all", body: "Anything the menu didn't cover — takes a message and routes it to the right admin so it still becomes a tracked inquiry." }
  ],
  "ex-operator": [
    { type: "script", title: "Press 0 — anytime", body: "“…at any time you can press ZERO — and if an admin person is available, we'll pick up.” The escape hatch on every menu." }
  ],
  "biz-entry": [
    { type: "behind", title: "Business inquiries", body: "Vendors, referral partners, and general business go to the BUSINESS pipeline — kept separate from the client journey." }
  ],
  "emp-entry": [
    { type: "behind", title: "Hiring", body: "Job and internship inquiries route to the APPLICANTS pipeline (a full hiring flow, not a client inquiry)." }
  ],

  /* ── ② Inquiry journey ── */
  "inquiry": [
    { type: "behind", title: "The All Inquiries pipeline", body: "Once created, every inquiry moves through 16 stages here — worked by the coordinator team and the escalation engine so nothing goes stale." }
  ],
  "new-inquiry": [
    { type: "behind", title: "Not yet contacted", body: "A fresh opportunity waiting for first contact. The escalation timers start ticking the moment it lands." }
  ],
  "lost": [
    { type: "behind", title: "Done / Lost Lead", body: "The Lost Inquiry automation flips the contact type to archived. Kept for reporting and possible future re-engagement." }
  ],

  /* ── ③ Staying cared for ── */
  "retention": [
    { type: "behind", title: "Staying cared for", body: "After someone becomes a client, retention automations keep them supported and catch anyone quietly slipping away." }
  ],
  "new-clients": [
    { type: "behind", title: "First 6 months", body: "New clients enter a dedicated pipeline for onboarding and early check-ins, ending in a 'Called for Feedback' touchpoint." }
  ],
  "med-mgmt": [
    { type: "behind", title: "Current-client medication", body: "A current client's med request — via a form or a texted trigger link — creates an inquiry in the Med Management pipeline: New request → uncompleted form → completed." }
  ],
  "reactivation": [
    { type: "behind", title: "Reactivation", body: "Clients waiting for a clinician's return (e.g. Reuven's) are tracked and re-booked when the clinician is back." }
  ],

  /* ── ④ Other journeys ── */
  "other": [
    { type: "note", title: "Non-client pipelines", body: "Business/vendor, referral outreach, and job/internship applicants each get their own pipeline, separate from the client journey." }
  ],
  "business": [
    { type: "behind", title: "Business pipeline", body: "Vendors & referral contacts: New Lead → Contacted → Proposal Sent → Closed." }
  ],
  "referral": [
    { type: "behind", title: "Referral outreach", body: "Proactive outreach to referral partners: New Lead → Contacted → Proposal → Closed." }
  ],
  "applicants": [
    { type: "behind", title: "Hiring pipeline", body: "New Applicant → check SP for a former patient → Responded → Application → Interview → Offer → Onboarding." }
  ],

  /* ── Matching Tool extras ── */
  "mt-care": [
    { type: "behind", title: "Step 1 routes everything", body: "The type of care picked here shapes the whole result experience — a ranked therapy match, the full prescriber list, or the shared testing-team card. Insurance isn't asked yet — that only comes at the end, when connecting." }
  ],
  "mt-needs": [
    { type: "behind", title: "Step 2 · in your own words", body: "A free-text box the tool reads against each clinician's bio (non-AI keyword relevance), plus optional refine chips — specialty, population, age, format, PSYPACT." }
  ],
  "mt-results": [
    { type: "tool", title: "Step 3 · the matches", body: "Therapy → ranked by fit; Medication → every available prescriber; Testing → the shared team card. Always the best 1–3, never an empty screen — a pending 'welcoming soon' tier appears if no one is open." }
  ],
  "mt-therapy": [
    { type: "tool", title: "How the therapy match works", body: "Ranks open clinicians by specialty, population, age, location and PSYPACT — plus a non-AI read of the client's own words against each bio. Always returns the best 1–3, never an empty screen." }
  ],
  "mt-insq": [
    { type: "behind", title: "Insurance question", body: "Routes an insurance question to the team, tagged '— Insurance question' so it's answered fast." }
  ]
};
