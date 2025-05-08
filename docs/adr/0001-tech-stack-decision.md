# Architecture Decision Record (ADR)

## ADR 0001: Technology Stack Selection for ISAT Mobile App

### Status
Accepted

### Context
We need to select a technology stack for building the "I Saw A Thing (ISAT)" mobile app, which is a group-based challenge application with real-time leaderboards and user authentication. The app should be cross-platform (iOS, Android, and possibly web), easy to maintain, and support rapid development.

### Decision
We will use the following technology stack and development practices:
- **Capacitor**: For cross-platform native app development (iOS, Android, Web) using web technologies.
- **Vite**: As the frontend build tool and development server for fast iteration and modern JavaScript/TypeScript support.
- **Supabase**: For backend-as-a-service, providing authentication, real-time database, storage, and API integration.
- **TypeScript**: All JavaScript/TypeScript code will be written in TypeScript for type safety and maintainability.
- **Functional Programming Approach**: Prefer functional programming patterns and modern libraries/packages in all JS/TS code.
- **pnpm**: Use pnpm as the package manager for efficient, fast, and reliable dependency management.

### Rationale
- **Capacitor** allows us to build a single codebase for multiple platforms, leveraging web standards and native APIs where needed. It is well-supported and integrates easily with modern frontend tools.
- **Vite** offers a fast, modern development experience, with instant hot module reload and first-class TypeScript support. This will speed up frontend development and improve code quality.
- **Supabase** provides essential backend features (auth, real-time database, storage, RESTful APIs) out-of-the-box, reducing the need for custom backend development and infrastructure management. It is open source and has a generous free tier.
- The combination enables rapid prototyping, easy scaling, and a modern developer experience.

### Alternatives Considered
- **React Native**: More mature for mobile, but less seamless for web and requires more native code for some features.
- **Flutter**: Excellent for mobile, but web support is less mature and Dart is less familiar to our team.
- **Custom Backend (Node.js/Express, Firebase, etc.)**: More flexibility, but increases maintenance burden and slows down MVP delivery.

### Consequences
- We can deliver a cross-platform MVP quickly with minimal backend overhead.
- We may need to implement some custom plugins if native features are required beyond Capacitor's ecosystem.
- Vendor lock-in with Supabase for backend services, but mitigated by its open-source nature.

### Related Documents
- [ISAT Challenge PRD](../prd/isat-challenge-prd.md)

---

*This ADR documents the rationale for the initial technology stack. Future ADRs will address other major architectural decisions as needed.*
