# Client Journey Stages

This file defines each stage of the client journey. Edit the text here and ask Claude to update the website.

---

## Stage 1: Discovery
**Icon:** 🔍
**Subtitle:** How prospective clients find us

### Channels
- Google Search
- Referrals
- Advertisements
- Social Media
- In-person Events
- Attorney Referral

---

## Stage 2: First Contact
**Icon:** 📞
**Subtitle:** Inquiry enters the system

### Entry Points
- Main Website Form
- All Inquiries Webform
- Phone Call (CCC#)
- SMS to CCC#
- Email to CCC#
- Live Chat
- Petra's Direct Line

### What happens automatically
- Opportunity auto-created in All Inquiries pipeline
- Team notification sent
- Tagged by source

---

## Stage 3: Response & Follow-up
**Icon:** ⚡
**Subtitle:** Team contacts the prospective client

### Pipeline Stages
- New Inquiry (Not Contacted)
- Calls, Txts, Emails
- Needs Contacting Again
- Client Responded
- Follow Up Needed
- Waiting on Client Response
- Waiting on 3rd Party

### Escalation Rules
- No response in 9 business hours → URGENT
- Waiting on response for 16 business hours → URGENT
- Low priority: no response in 32 business hours → URGENT
- "Follow Up Needed" auto-moves after 1 day
- "Waiting on Client" auto-moves after 2 days

---

## Stage 4: Clinician Matching
**Icon:** 🤝
**Subtitle:** Finding the right fit

### Steps
- Clinician Matching Form submitted
- Insurance & Pricing reviewed
- Approved Clinician-Client Match (CC Match)

### What happens automatically
- Clinician matching form → opportunity updated
- Appointment Desk Survey → opportunity linked
- Clinician data synced to contact record

---

## Stage 5: Scheduling
**Icon:** 📅
**Subtitle:** Booking the first appointment

### Pipeline Stages
- Consult or FollowUp Scheduled
- Ready to Schedule
- Waiting List

### What happens automatically
- Consult calendar confirmation sent
- Consult reminder sent
- Consultation event → pipeline stage updated
- 7-day waitlist reminder

---

## Stage 6: Paperwork
**Icon:** 📝
**Subtitle:** Completing intake documentation

### Pipeline Stage
- PWK Pending (Scheduled)

### What happens automatically
- Paperwork sent to client
- Paperwork incomplete after 48 hrs → URGENT
- New Client Form submission triggers next steps

---

## Stage 7: Officially a Client
**Icon:** ✅
**Subtitle:** First appointment booked, paperwork complete

### Milestones
- Moved to "Completed — Current Clients" in All Inquiries
- Entered NEW CLIENTS pipeline (first 6 months)
- Client Status synced to Contact Type

### Active Automations
- 72-hour appointment reminder
- Satisfaction survey after sessions
- Google Review link tracker
- New client survey (first 6 months)

---

## Stage 8: Ongoing Care
**Icon:** 🔄
**Subtitle:** Retaining and re-engaging active clients

### Active Care Gaps Pipeline Stages
- 1–7 Days Since Last Appointment
- 8–14 Days SLA
- 2–4 Weeks SLA
- 1–2 Months SLA
- 2+ Months SLA
- 6+ Months SLA (urgent)
- 1 Year+ SLA (urgent)

### Re-engagement Automations
- No Next Appointment tag → automation triggered
- Overdue balance → pipeline stage updated
- Med. Management request → separate pipeline