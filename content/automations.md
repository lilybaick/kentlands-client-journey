# Automations Overview

All active GoHighLevel automations that touch the client journey.
Update this file when automations change in GHL.

---

## Inquiry Creation
| Automation | Status | Trigger |
|---|---|---|
| Main Website Form OPP Creation & Notification | ✅ Published | Form submission |
| All Inquiries Webform - OPP Creation & Notification | ✅ Published | Webform submission |
| Email to CCC# - inquiry creation | ✅ Published | Inbound email |
| SMS to CCC# - inquiry creation | ✅ Published | Inbound SMS |
| Live chat to inquiry | ✅ Published | Live chat message |
| Lead Filtering Phone System | ✅ Published | Inbound call |

> 📞 The **Lead Filtering Phone System** is the front door and by far the most complex automation.
> It has its own docs: **`phone-tree-script.md`** (the caller-facing menu, verbatim) and
> **`phone-tree-detail.md`** (how the menu + CRM logic work together).

## Response & Follow-up
| Automation | Status | Trigger |
|---|---|---|
| Inquiry RESPONDED automation PRIORITY | ✅ Published | Inquiry responded |
| Inquiry RESPONDED automation Follow up needed | ✅ Published | Inquiry responded |
| Inquiry RESPONDED automation Low Priority | ✅ Published | Inquiry responded |
| Inquiry "follow up needed" Priority - 9 business hours → urgent | ✅ Published | Time-based |
| Inquiry "Waiting on Response" Priority - 16 business hours → urgent | ✅ Published | Time-based |
| Low Inquiry "Waiting on Response" - 32 business hours → urgent | ✅ Published | Time-based |

## Clinician Matching
| Automation | Status | Trigger |
|---|---|---|
| Inquiry for clinician matching form submission | ✅ Published | Form submission |
| Appointment Desk Survey to Opportunity | ✅ Published | Survey submission |
| Syncing Clinician Data | ✅ Published | Contact updated |

## Scheduling
| Automation | Status | Trigger |
|---|---|---|
| Consult Calendar Confirmation & Reminder | 🔶 Draft | Appointment booked |
| Consultation event happening - change pipeline stage | 🔶 Draft | Appointment event |
| Waitlist Pipeline Stage - 7-Days Reminder | 🔶 Draft | Time-based |
| 72 hour Appointment Reminder | 🔶 Draft | Appointment upcoming |

## Paperwork
| Automation | Status | Trigger |
|---|---|---|
| PWK stage to urgent in 48 hours | ✅ Published | Stage entered |
| New Client Form Submission | 🔶 Draft | Form submission |

## Active Client Management
| Automation | Status | Trigger |
|---|---|---|
| ACTIVE CARE GAPS & NEW CLIENT PIPELINE - Opportunity UPDATING & Task Automation | ✅ Published | Opportunity change |
| No Next Appointment Tag Automation | ✅ Published | Tag added |
| Client Status > To Contact Type SYNC | ✅ Published | Status change |
| Won Inquiry Automation | ✅ Published | Opportunity won |
| Lost Inquiry Automation | ✅ Published | Opportunity lost |

## Satisfaction & Reviews
| Automation | Status | Trigger |
|---|---|---|
| Satisfaction Survey Auto: Notifications | ✅ Published | Survey response |
| Google Review Link Tracker | ✅ Published | Trigger link clicked |
| Sending out Surveys for new clients | 🔶 Draft | Time-based |

## Notes
- 🔶 **Draft** = built but not yet active
- ✅ **Published** = live in the demo account