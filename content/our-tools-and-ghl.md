# How the KP tools connect to GHL

Kentlands runs three custom tools (built by LIAH/Fusion Creatives) that plug into this same
GoHighLevel account. This file maps each tool to the exact GHL pieces it reads or writes, so the
whole system is visible in one place. Everything below is confirmed against the demo GHL account.

---

## The full GHL inventory (so nothing's missed)

| Resource | Count | Highlights |
|---|---|---|
| Workflows | 70 (48 live) | see `automations.md` (big rocks) |
| Pipelines | 10 | All Inquiries (spine), Active Care Gaps, New Clients, Med Mng, Petra, Business, Referral, Applicants, Reuven's, Therasaas |
| Tags | 62 | routing / filtering / call-type / insurance / sensitive (see phone-tree docs) |
| Forms | 14 | 5 are our tools writing in (below) |
| Surveys | 4 | Appointment Desk · All Website Inquiries · Clinician Availability · Fancy Satisfaction |
| Trigger links | 15 | PsychToday referral-outs (Medicare/Medicaid/Tricare) · SimplePractice portal · med-mgmt & records forms · Google review · fees/OON pages |
| Custom objects | 2 | **Clinicians** (43 fields) · **Testing Availabilities** (9 fields) |
| Contact custom fields | 137 | incl. the CCC "Excel…" call-log set + "AD…" Appointment-Desk set |

---

## 1. Clinician Matching Tool  (public search page)
Helps a prospective client find the right-fit clinician; hands off to intake.

- **Reads:** `Clinicians` custom object (43 fields — specialties, populations, modalities, ages, service flags, availability `new_pt_openings`, bio, photos). A Cloudflare Worker pulls it, strips to a public allow-list (no internal notes), and serves it.
- **Kept fresh by:** the **`Syncing Clinician Data`** workflow — when a clinician record is created/updated in GHL it fires a webhook that re-syncs the tool.
- **Testing side:** reads the **Testing Availabilities** object (Julie / Briana / Heather / Jessica availability by month) for the testing-team card.
- **Hands off via:** the **`Clinician Matching - Form`** → `Inquiry for clinician matching form submission` workflow → Opportunity in **All Inquiries**.

## 2. Coordinator (CCC) Console  (internal call co-pilot)
Guides client-care coordinators through calls and logs them straight into GHL.

- **Writes:** the **`CCC internal call note (from CCC Console)`** form → `Inquiry for CCC Call Scripting form submission` workflow → creates/updates the inquiry + note.
- **Uses:** the CCC "**Excel…**" contact fields (Coordinator, Summary, Follow-up Needed, Response to Caller, Time 1st Responded) and the "**AD…**" Appointment-Desk fields — the structured call-log the team works from.
- **Reuses:** the Matching Tool's engine to recommend clinicians live on the call.
- **Works:** the **All Inquiries** pipeline (16 stages) + the escalation engine (9h/16h/32h → URGENT).

## 3. Clinician Console  (clinician self-service)
Lets clinicians manage their own availability, info, and tickets.

- **Availability:** **`Current Availability for Clinicians`** form / **`Clinician Availability Survey`** → updates `new_pt_openings` on the Clinicians object (via a separate write Worker) → flows straight to the Matching Tool.
- **Tickets:** **`Admin Ticket for Clinicians`** form → `Inquiry for admin ticket for clinicians form submission` workflow.
- **Profile:** **`Clinician Info Form`** → writes the clinician's specialties/populations/modalities into the Clinicians object.
  - ⚠️ **Known issue:** this form appears to create a *new* Clinicians record with the self-describe checkbox fields but **without setting the unique `email`**, which is how the **duplicate "Esti Schonbrun"** record was created. Fix = have the form map email into the unique field (or upsert on email) so it updates the existing record instead of making a second one.

---

## The through-line
A person is discovered → contacts KP (phone tree / form / our tools) → becomes an **Opportunity in All Inquiries** → the CCC Console + escalation engine work it → the Matching Tool finds their clinician → scheduling/paperwork → active client → retention (care-gaps, surveys, reviews). Clinician availability that powers the match is kept current by clinicians themselves through the Clinician Console. It's one connected loop.

*Mapped from the Kentlands demo GoHighLevel account — no real client data.*
