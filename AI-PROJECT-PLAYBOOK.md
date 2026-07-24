# AI Project Playbook (portable — copy this into any project)

**What this is:** a project-agnostic process for keeping AI agents (and the humans
directing them) organized, accountable, and honest while building real software —
especially when multiple people and multiple AI sessions touch the same codebase.
Nothing here is specific to any one project's domain. Drop this file into a new
project's repo root (or link to it), adapt the two starter templates at the bottom,
and it works the same way there.

It exists because of three repeatable failure modes that cost real time on past
projects:
1. **Claimed-but-unverified work** — an AI (or a person) says "this works" without
   actually driving the live system and checking. Silent bugs ship.
2. **Lost context between sessions** — a new session (human or AI) has to
   reconstruct "what's actually going on" from scratch, or worse, assumes stale
   information is still true.
3. **Concurrent-work collisions** — two people (or a person and an AI, or two AI
   sessions) edit/deploy the same project independently, unaware of each other,
   and silently clobber one another's work for hours before anyone notices.

Three habits fix all three. All three are mandatory, not optional polish.

---

## Habit 1 — A single living backlog document, updated as you go

Keep ONE document (e.g. `TODO.md` or `BACKLOG.md`) that is the actual source of
truth for "what needs doing," not scattered across chat history, memory, or
someone's head. Structure:

- **Now / Next / Later** (or priority-tagged) sections — not a flat undifferentiated list.
- Each item: what, why it matters, and its current status (not started / in
  progress / blocked / done).
- A **changelog or "recently shipped" section** so anyone catching up sees what
  moved recently without reading full git history.
- **Update it as a habit, not an afterthought**: any session (human or AI) that
  completes a real chunk of work updates this file in the SAME sitting — add what
  shipped, remove or check off what's done, add anything newly discovered. Don't
  let it drift stale; a stale backlog is worse than no backlog, because people trust it.
- If the project is large enough to need it, add a companion **macro-status
  snapshot** (a "read this first if you just joined or lost context" doc,
  updated whenever something material changes) — separate from the detailed
  backlog, this is the 60-second version.

## Habit 2 — Verify before you claim, with a cheap/strong model split

Never report something as "done" or "working" without actually checking it against
the real, live system (not just reading the code and reasoning it should work).

**The two-role pattern, when using AI agents to help verify:**
- **Tester (cheap/fast model)** drives the real system — clicks, types, reads
  actual output/state, checks for errors — and reports ONLY what it observed, not
  conclusions drawn from reading source code. Good for breadth: cover a lot of
  ground quickly, flag "something's off here."
- **Verifier (stronger model, or a careful human)** treats every tester finding as
  a hypothesis, not a fact — especially anything tagged severe. Re-checks
  independently (live system, real data/API, not just "looks right") before
  accepting it as real. Only confirmed issues get fixed; every fix gets its own
  before/after live re-check, not just a code read.
- **Why the split matters:** in practice, roughly half of a cheap tester's
  specific claims won't survive a direct re-check (tooling artifacts, misreads,
  timing quirks) — but its breadth is still what surfaces the areas worth
  double-checking in the first place. Treat it as a metal detector pointing at
  where to dig, not as the final verdict on what's buried there. Log false
  alarms too, with why they didn't hold up — that record is what makes the
  process more accurate over time instead of repeating the same wasted
  double-checks.

**The standard to verify against, in order:** does it actually do the real
thing (not just show a success message)? Do failures surface clearly instead of
vanishing silently? Would the actual end user understand what to do next without
guessing? Is the same pattern used consistently elsewhere in the product? Does it
work on every environment/viewport/condition it needs to, not just one? Can you
verify without corrupting real data (use disposable test records + clean them up
afterward)?

**Every verification round gets logged** (in the backlog doc or a dedicated
`TESTING-PROCESS.md`/`QA.md`): what was tested, what was found and fixed, what was
a false alarm and why, what's confirmed solid. This is what lets the pattern of
"what actually goes wrong" compound over time instead of resetting every session.

## Habit 3 — One source of truth for code + deploys, especially with concurrent work

The moment more than one person or AI session can touch a project independently:
- **Git is the single source of truth**, not whoever's laptop has the "current"
  version. Pull before starting; commit and push (or PR) when done — don't
  accumulate silent local divergence.
- **A commit is not a fix until it's deployed and re-verified live.** These are
  two different facts; track both. It's common (and costly) for a real, correct
  fix to sit committed-but-undeployed for a while — check deployed state
  directly, don't assume a commit shipped.
- **Prefer CI/automatic deploy on merge over manual deploy commands** once more
  than one person/session is involved — manual deploys from multiple local
  checkouts is exactly how silent clobbering happens.
- **If a collision happens anyway** (two histories diverged, production doesn't
  match any one checkout), reconcile explicitly: treat live production behavior
  as the tiebreaker fact when code disagrees with itself, merge histories
  properly (don't just force-push over someone's work), and write down what
  happened and how it was resolved so the next collision is faster to untangle.
- Keep a short **deploy log** (what shipped, when, by whom/which session) if
  deploys happen often enough that "what's actually live right now" becomes hard
  to answer from git log alone.

---

## Habit 4 — Multi-persona UI/UX audit (fast way to build a big, honest backlog)

Use this when you need to go from "something feels off about this app" to a real,
prioritized to-do list — not for routine QA (that's Habit 2's tester/verifier split).
Built and refined running it live against Inkwell (10 tabs/pages, 9 personas/tab,
~100 agents per pass).

**The reusable prompt** (fill in the `{...}` and hand the whole thing to an
orchestrator that can spawn parallel cheap-model agents — a `Workflow` script, not
one agent doing it serially):

> Audit {PROJECT} for UI/UX problems. Tabs/pages to cover: {LIST_OF_TABS_WITH_HOW_TO_REACH_EACH}.
> Login if needed: {CREDENTIALS_OR_N/A}.
>
> For each tab, run {N≥3} independent cheap-model testers in parallel, each a
> **distinct persona** (not the same prompt N times — diversity of lens is what finds
> different bugs, repetition mostly finds the same one). Mix: a first-time mobile
> user, a fast desktop power-user, an accessibility/edge-case tester, a skeptic
> comparing it to known competitors, a tester actively trying to break it
> (double-submits, back-button abuse, resize-mid-flow), and a pure visual/branding
> critic. Force structured output (schema: `{title, severity, description}` per
> issue) so results merge cleanly — free-text reports don't aggregate well at scale.
> Instruct testers to drive the *live* system (not read code), report only what they
> observed, cap at ~2-6 real issues each, and return empty rather than inventing
> filler.
>
> Then, per tab, one cheap-model "solve" pass: feed it that tab's full issue list,
> ask it to merge duplicates into distinct problems and propose a concrete fix +
> impact tier (massive/moderate/minor) per problem. Keep this step to one pass per
> tab, not one per issue — issue-level fan-out for solutions is usually wasted spend
> since most fixes are self-evident once the problem is stated clearly.
>
> Do the final synthesis (dedupe across tabs, rank by impact, write the actual
> prioritized to-do list) yourself with the strong/orchestrating model, not another
> agent call — this is the one step that benefits from full context across every
> tab at once, and it's cheap relative to the fan-out.

**Efficiency notes learned from running it:**
- **Persona diversity beats repeat count.** 3 identical testers on the same tab
  mostly converge on the same 2-3 obvious issues; 3 *differently-briefed* testers
  surface 3 different categories of problem. If asked for "3 testers × 3 rounds,"
  interpret that as "9 distinct personas," not 9 copies of the same prompt.
- **Parallelize tabs and personas together** (one big `parallel()`/`pipeline()`
  fan-out), not tab-by-tab-then-persona-by-persona in sequence — wall-clock is the
  slowest single tester, not the sum of all of them.
- **Structured output (JSON schema) is mandatory at this scale.** Free-text reports
  from 90+ agents are not human-reconcilable; a schema turns "read 90 essays" into
  "concat 90 arrays."
- **Cap solution fan-out at one agent per tab/area, not per issue.** The find phase
  benefits from many independent eyes (find = breadth); the solve phase mostly
  doesn't (solve = synthesis, and synthesis quality drops, not rises, when it's
  split across too many small-context agents). Do the *cross-tab* synthesis
  yourself — it's the step that most needs full context and least needs volume.
- **Multiple full cycles (find→solve repeated 2-3×) are for exhaustiveness, not
  routine use.** They mostly re-find the same top issues with diminishing new
  discoveries each pass — worth it once, when explicitly building a big backlog
  from scratch or after a long stretch of unaudited changes; overkill for a single
  feature's QA (use Habit 2 instead).
- **Every real record a tester creates must be prefixed and cleaned up** (e.g.
  `ZZTEST-`) and the orchestrator should independently re-check + delete it after —
  same discipline as Habit 2, it doesn't relax just because the fan-out is bigger.

## Adopting this in a new project (quick start)

1. Create `TODO.md` (or `BACKLOG.md`) using the structure in Habit 1. Seed it with
   whatever's already known to be broken/missing/planned.
2. If the project is non-trivial, add a short `STATUS.md` macro-snapshot too.
3. Create `TESTING-PROCESS.md` (or fold a "Verification" section into the
   backlog doc) describing the tester/verifier split from Habit 2, and start
   logging rounds as you do real verification work.
4. Put one line in the project's main AI-instructions file (`CLAUDE.md` or
   equivalent) pointing at these docs and stating the habit explicitly: *"Update
   TODO.md/STATUS.md as part of finishing any real chunk of work — this is not
   optional. Verify before claiming something works — see TESTING-PROCESS.md."*
5. If/when a second person or AI session starts touching the project, set up
   Habit 3 immediately (git remote as source of truth, ideally CI auto-deploy) —
   don't wait for a collision to force the issue.

---

## Minimal starter template — `TODO.md`

```markdown
# <Project> — Backlog

**Last reconciled:** <date> — everyone/every AI session updates this when they
finish real work. If you're not sure whether to update it, update it.

## Now
- [ ] <highest-priority item> — why it matters: <one line>

## Next
- [ ] <item>

## Later / ideas
- <item, lower confidence or lower priority>

## Recently shipped
- <date> — <what shipped, one line, link to commit/PR if useful>

## Blocked / needs a decision
- <item> — blocked on: <what specifically>
```

## Minimal starter template — verification round log

```markdown
### Round N — <scope> (<date>)
- Tested: <what, by whom/which model>
- Real issues found + fixed: <bug → root cause → fix → live re-verification>
- False alarms (investigated, not real): <claim → why it didn't hold up>
- Confirmed working: <what was checked and is solid>
- Deferred / logged: <known gaps intentionally left, with why>
```
