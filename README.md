# Hi, I'm Brian 👋

Software developer in training — documenting what I build as I learn.

I'm working through the fundamentals of software engineering by building real, full-stack projects rather than just tutorials- this profile is where that journey lives.

- 🔭 Currently learning: full-stack web development (Rails/GraphQL on the backend, React/Next.js on the frontend)
- 🌱 Currently building: projects to apply what I'm learning and grow my portfolio
- 🤖 I build with AI-assisted dev tools (like Claude Code). More on how, below👇
- 💬 Ask me about: what I'm currently working through (happy to talk shop)
- 📫 Reach me on [LinkedIn](https://www.linkedin.com/in/brian-talugende-bt/)
- 🖥️ Personal site: https://www.btalu.ca

## Tech stack

**Backend**

![Ruby](https://img.shields.io/badge/-Ruby-CC342D?style=flat-square&logo=ruby&logoColor=white)
![Rails](https://img.shields.io/badge/-Rails-CC0000?style=flat-square&logo=rubyonrails&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?style=flat-square&logo=mysql&logoColor=white)

**Frontend**

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)

**Tooling**

![Git](https://img.shields.io/badge/-Git-F05032?style=flat-square&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white)

## My dev process

I don't just use AI to write code faster, I've built a small pipeline of specialized AI agents that review and test my own work before it ships, so AI acts as a second set of eyes, not just a pair-programmer. Built as custom Claude Code subagents:

- **Architect**: reviews a design or an open issue *before* any code gets written: what's missing, what conflicts with existing architecture, what's underspecified
- **Bug-hunter**: a line-level review of every diff for real defects: tenant-isolation leaks, authorization gaps, data-integrity issues, compliance risks (e.g. GDPR)
- **PR-reviewer**: a broader merge-readiness pass: does the change do what it claims, does it break something that worked, can each type of user see exactly what they should and nothing more
- **Flow-verifier**: the dynamic check: actually runs the system (test suite + targeted probes of real flows like sign-in, applying, data erasure) to catch runtime failures static review can't see

Before pushing any non-trivial change, I run a local hunt → fix → re-hunt loop and only push once it comes back clean — the AI review isn't a one-and-done pass, it's a gate I hold myself to on every PR.

## Featured project

### Xylodesk: an all-in-one career platform serving two sides of hiring

Recruiting teams and job seekers today mostly work through disconnected tools: recruiters cobble together spreadsheets, job boards, and a clunky ATS to track applicants, while candidates apply into a black hole, a static form with no real profile, no visibility into fit, and no feedback. Xylodesk puts both sides in one platform: recruiting orgs get an applicant tracking system built around their actual hiring workflow, and job seekers get a real profile, resume tools, and job matching instead of a one-way application form. Built solo, from schema to UI.

**What it solves: for job seekers**
- One account, not a new login for every company: apply across different orgs and track every application and follow-up in one place instead of scattered across each employer's own portal
- A real, public profile and resume builder instead of a résumé re-typed into every application form
- AI-assisted resume writing: suggestions and rewrites on your own content, opt-in and consent-gated
- Job discovery with fit-based matching, plus an AI-explained breakdown of *why* a role fits, not just a score
- *On the roadmap*: AI career coaching, building on the same matching and resume data

**What it solves: for orgs**
- One applicant tracking workflow for the whole hiring team, with role-based access (admin/HR/recruiter/hiring manager) instead of spreadsheets and email threads
- An employee directory and reporting structure, with compensation visibility gated by role, so sensitive data isn't one permissions bug away from being everyone's business
- Every organization's data strictly isolated from every other's, by design; a hard requirement when the data is people's employment and compensation records
- *On the roadmap*: surfacing signals the platform already has the data for, like retention risk and interest in internal mobility, as proactive insight for HR, not just a system of record

**Stack, and why**
- **Rails 8 (API-only) + GraphQL**: one typed, flexible API surface instead of juggling REST endpoints per view; a recruiter dashboard and a candidate profile page need very different shapes of the same data
- **MySQL**: relational integrity matters when applications, memberships, and org data are all foreign-key linked
- **SolidQueue / SolidCache / SolidCable**: Rails 8's DB-backed job/cache/cable stack, so background jobs and caching don't need a separate Redis service to operate
- **React / Next.js / TypeScript**: a typed frontend consuming the GraphQL API
- **Google Gemini**: AI features (resume suggestions/rewrite, job-fit explanations) are consent-gated, live per request, and fall back gracefully to non-AI behavior if a call fails

**Challenges & decisions**
- *Tenant isolation*: chose `acts_as_tenant` configured **fail-closed**, a query scoped to an organization with no tenant set raises, rather than silently returning nothing or (worse) another org's rows. A few code paths intentionally cross tenant boundaries (e.g. a candidate viewing an application across orgs); those are paired with an explicit authorization check on the record, not just tenant scoping.
- *Two kinds of "profile"*: a job seeker's public profile and an employee's HR record (compensation, manager, employment status) look similar but have very different privacy needs. Splitting them into separate models early avoided ever mixing pay data into what's shown on a public profile page.
- *Compliance by design*: GDPR erasure needed to both let candidates delete their data **and** let employers retain what they're legally required to keep, solved with a 30-day window that anonymizes retained records in place rather than deleting rows that other data still references.
- *Matching, pragmatically*: started with a heuristic scoring model (skills/experience overlap) before layering in a Gemini-backed AI tier on top, a working, explainable baseline first, then a probabilistic one. If the AI call fails, it falls back to the heuristic score rather than showing nothing.
- *AI, opt-in by design*: every AI feature (resume suggestions, job-fit explanations) only runs once a user has granted data-processing consent — the consent gate is one chokepoint every caller goes through, not a check repeated (and possibly missed) at each call site.

*(Repo is private while it's under active development.)*

<!-- TODO: add screenshots, e.g.
![Recruiter dashboard](docs/screenshots/recruiter-dashboard.png)
![Candidate profile](docs/screenshots/candidate-profile.png)
Drop images into a docs/screenshots/ folder in this repo and reference them above.
-->

## Connect

[![LinkedIn](https://img.shields.io/badge/-LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/brian-talugende-bt/)
[![GitHub](https://img.shields.io/badge/-GitHub-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/BtaluW)
