# Phone Tree — Caller Script (verbatim)

The exact wording a caller hears, and what each keypress does. This is the source of truth for
the caller-facing menu. For how the CRM reacts to each call, see `phone-tree-detail.md`.

Source: KP "phone tree script.docx". Practice model: **private, out-of-network, fee-for-service**
(not in-network with any insurance; provides superbills for OON reimbursement).

---

## Initial Message
> "You've reached the offices of Kentlands Psychotherapy —"

| Press | Goes to |
|---|---|
| 1 | Existing Client |
| 2 | New Client |
| 3 | Business related matters |
| 4 | Employment or Training opportunities |
| 5 | Anything Else |

### System / status messages
- **Admin Office Closed (holiday):** team on holiday; prospective clients leave a message; phone tree still works; existing clients reach their clinician via the SimplePractice patient portal.
- **After-hours (toggled off):** admin hours generally **M–F 9:30–5 PM**; non-emergency after-hours → therapist via portal; **emergencies → 911 first**; follow the tree and leave a message.
- **Can't pick up (landing message):** "We are either away from the phone or helping someone else. We will call you back ASAP during business hours…"

---

## 1 — Existing Client
> "Let's make sure we get you to the right person… at any time you can press **0** and, if an admin is available, we'll pick up."

| Press | Purpose |
|---|---|
| 1 | **Urgent** — appointment scheduled for **today** → voicemail ("If you're hearing this…") |
| 2 | Book / cancel / reschedule an appointment |
| 3 | Inquire about setting up a **new service** |
| 4 | Medication issues |
| 5 | Records request |
| 6 | Payment, billing, medical receipts |
| 7 | Anything else |
| 0 | Operator (available admin) |

---

## 2 — New Client
> Intro from **Dr. Elizabeth Carr, Founder**. Reminder: KP is private, fee-for-service, **not in-network**; provides medical receipts (superbills) for out-of-network reimbursement.

**Full version**
| Press | Purpose |
|---|---|
| 1 | Medicare / Medicaid / Tricare / HMO (e.g. Kaiser) |
| 2 | Traditional insurance → learn about OON benefits |
| 3 | Find a good-fit therapist (self or loved one) |
| 4 | Psychiatric evaluation for possible medication |
| 5 | Testing services |
| 6 | Something else |

**Shortened version**
- **Press 1** — questions about OON / fee-for-service → 1 = Medicare/Medicaid/Tricare/HMO · 2 = Traditional (OON) · 3 = ready to discuss needs
- **Press 2** — all other callers → 1 = psychiatric/medication · 2 = testing · 3 = find a therapist · 4 = something else

---

## 2 → 1 — Insurance sub-tree
| Press | Insurance | Outcome |
|---|---|---|
| 1 | **MediCARE** | Providers opted out of Medicare → private pay only. Option to learn about private pay, or get a **texted Psychology Today link** (Gaithersburg + Medicare pre-filtered). |
| 2 | **MedicAID** | **Cannot serve Medicaid clients at all** — even self-pay (federal compliance, no exceptions). Texted Psychology Today link (Medicaid). |
| 3 | **Tricare** | Non-participating registration too onerous to maintain → texted Psychology Today link (Tricare). |
| 4 | **HMO** (Kaiser) | Not in HMO networks → private pay; some clients petition HMO for OON reimbursement — worth self-advocating for a written OON agreement. |
| 5 | Other Traditional (BC/BS, Aetna, Cigna) | → routes to the Traditional-insurance branch (see 2 → 2) |
| 6 | Schedule a call back | Leave name, call-back #, good times, and insurance question details |
| 7 | Back to main menu | |

Referral-out links texted to callers:
- Medicare → `psychologytoday.com/us/therapists/md/gaithersburg?category=medicare`
- Medicaid → `…/gaithersburg?category=medicaid`
- Tricare → `…/gaithersburg?category=tricare`

---

## 2 → 2 — Traditional insurance
> **Superbills:** register → card on file → charged day of service → monthly cumulative receipt (Superbill) in the patient portal. Superbills are in the **desktop** portal only (the app shows invoices); submit **Superbills, not invoices**, to your insurer.
- Press 1 → texted link: `kentlandspsychotherapy.com/contact-us-kentlands-psychotherapy/insurance-info/`

---

## New Client → Therapist / Prescriber / Testing
- **Therapist (3.1):** "finding the best therapist for your needs — transferring you now."
- **Prescriber (4.1):** two providers — **Dr. Adrian Kress (MD psychiatrist)** and **Dr. Brent Donmoyer (doctoral-level Psychiatric Mental Health Nurse Practitioner)**. Press 1 = text fees/info on Kress · 2 = text fees/info on Donmoyer · 3 = both · 4 = talk to someone now about fit.
- **Testing (5.1):** comprehensive program — ~20 hrs of psychologist time (incl. 20-min free consult, 1-hr pre-meeting, two half-days of testing, ~1-month-later results meeting + written report). **Package $4,320** (half deposit at booking, half the day before). Press 1 = talk to a client-care coordinator + set up a discovery call.
- **Something else (6.1):** straight to ring desk / voicemail.

---

## 3 / 4 / 5 — Business · Employment · Anything Else
Top-level branches (detailed scripts not in the source doc). Business inquiries feed the **BUSINESS / Vendor & Referral** pipeline; employment feeds the **APPLICANTS** pipeline.
