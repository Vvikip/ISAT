# ISAT Documentation

This directory contains all documentation for the ISAT application.

## Documentation Flow Overview

To help both LLMs and new developers understand, navigate, and contribute to the project, documentation is organized to answer three core questions:

1. **What are we building?**  
   _Product Requirements Documents (PRDs)_ — Describe the goals, requirements, user stories, and success criteria for each feature or product area.
   - See [`/prd`](prd/) for templates and examples.

2. **Why are we building it this way?**  
   _Architecture Decision Records (ADRs)_ — Capture the rationale, tradeoffs, and context behind major architectural or technical decisions.
   - See [`/adr`](adr/) for templates and all ADRs.

3. **How will it be built?**  
   _Technical Design Documents (TDDs)_ — Detail the implementation approach, architecture, data models, APIs, integration points, and other technical specifics for each major feature or component.
   - See [`/design`](design/) for templates and examples.

All documents use Markdown for easy collaboration and versioning.

## Directory Structure

```
/docs
├── /adr            # Architecture Decision Records
│   ├── README.md   # ADR index and explanation
│   ├── 0001-example-adr.md
│   └── ...
├── /prd            # Product Requirements Documents
│   ├── template.md
│   └── ...
├── /design         # Technical Design Documents (TDDs)
│   ├── template.md
│   └── ...
└── README.md       # Documentation overview (this file)
```

## Using This Documentation

- **Start with PRDs** to understand the business goals, requirements, and user needs.
- **Consult ADRs** to learn the reasoning and context behind architectural or technical choices.
- **Reference TDDs** for concrete implementation details, architecture, and integration guidance.
- Cross-links between PRDs, ADRs, and TDDs are encouraged for traceability.

> For onboarding, LLM prompts, or code generation, always begin with the PRD for context, review relevant ADRs for rationale, and consult the TDD for implementation details.