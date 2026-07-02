# The Phone Tree, Explained

The phone tree ("Lead Filtering Phone System") is the front door of the whole client journey.
It does two jobs at once, on two different axes:

1. **What the caller presses** — the menu they hear (see `phone-tree-script.md`).
2. **What the CRM does** — behind the scenes it also branches by the caller's **Contact Type**
   (Current / Past / Prospective Lead / Lost Lead / Vendor / Unwanted / Unknown) to route known
   callers and to **tag the call + create or update the Inquiry** in the All Inquiries pipeline.

So every call is simultaneously *filtered* (spam/unwanted screened out), *classified* (why they're
calling), and *recorded* (an Opportunity is created for the team to work).

---

## The big picture

```
INBOUND CALL
│
├─ Pre-screen (CRM): "unwanted business" / spam / do-not-call → deflect (no team ring)
│
├─ Known caller? (CRM Contact Type)
│    Current Client  → Existing-Client menu (billing, records, meds, scheduling…)
│    Past / Inactive → routed / message
│    Vendor / Referral → notify team → ring all
│
└─ Caller menu (what they press)
     1 Existing Client   → book/cancel · new service · meds · records · billing · press 0 operator
     2 New Client        → insurance filter → therapist / prescriber / testing
     3 Business          → Business pipeline
     4 Employment        → Applicants pipeline
     5 Anything Else     → ring desk / voicemail
```

Whatever path the caller takes, the workflow ends by **creating/updating an Inquiry** (Opportunity)
so nothing is lost — the team picks it up in the **All Inquiries** pipeline, and the escalation
timers (9h / 16h / 32h → URGENT) make sure it's never dropped.

---

## The New-Client insurance logic (the real "lead filter")

Because KP is **private / out-of-network / fee-for-service**, the New-Client branch pre-qualifies
callers by insurance so the team spends time on good-fit leads:

| Insurance | What the tree does | Can KP serve them? |
|---|---|---|
| Traditional (BC/BS, Aetna, Cigna, United) | Explains superbill / OON reimbursement | ✅ Yes (self-pay + superbill) |
| Medicare | Explains providers opted out; offers private pay | ⚠️ Private pay only; else referred out |
| HMO (Kaiser) | Not in network; suggests self-advocating for OON | ⚠️ Private pay only |
| Tricare | Non-participating too onerous | ❌ Referred out |
| **Medicaid** | Federal compliance | ❌ **Cannot serve at all, even self-pay** |

For Medicare / Medicaid / Tricare, the tree **texts the caller a pre-filtered Psychology Today link**
(Gaithersburg + their insurance) so even a "no" leaves the caller with a real next step.

---

## Services surfaced on the call
- **Therapist matching** → tags the call, sets Contact Type = Lead, transfers to find a good-fit therapist.
- **Prescriber** → Dr. Adrian Kress (MD psychiatrist) or Dr. Brent Donmoyer (PMHNP); texts fees/info.
- **Testing** → comprehensive ~20-hr program, **$4,320** package; sets up a discovery call.

---

## ⚠️ Open questions / things to confirm with KP
- The CRM prescriber menu showed a third name (**"Roth"**) that is **not** in the caller script (which
  lists only Kress + Donmoyer). Confirm whether "Roth" belongs in the prescriber branch or is stale.
- The **72-hour Appointment Reminder** and several scheduling automations are still **drafts** — the
  actual reminder message isn't built yet.
- The prospective-caller ("call log") side of the phone-tree workflow is still ~90% under construction
  per the builder's own notes; the current-client side is the more complete half.

---

*Mapped from the Kentlands demo GoHighLevel account (no real client data) + the KP phone tree script.*
