# Technical Design Document (TDD)

## Project: I Saw A Thing (ISAT)

---

## 1. Overview
This document describes the technical architecture and implementation plan for the ISAT mobile app—a group-based challenge platform where users earn points by confirming they have seen or done a group-defined challenge (e.g., "I saw a Tesla car").

## 2. Architecture Diagram
```
[ User Device (iOS/Android/Web) ]
           |
      [Capacitor + Vite]
           |
      [Supabase Backend]
           |
     [Postgres DB, Auth, Storage]
```

## 3. Technology Stack
- **Frontend**: Vite + React (TypeScript, functional style)
- **Mobile**: Capacitor (iOS/Android/Web)
- **Backend**: Supabase (Auth, Database, Storage, Realtime)
- **Package Manager**: pnpm

## 4. Core Components & Features
### 4.1 Authentication
- Supabase Auth (email/password, OAuth providers optional)
- User registration, login, session management

### 4.2 Group & Challenge Management
- Create/join private groups
- Define a group challenge (e.g., "See a Tesla car")
- Invite users to group (invite code or link)
- Group membership management (remove/leave)

### 4.3 Challenge Confirmation
- Prominent "big red button" in UI
- Each press = point for the user in the group
- Prevent rapid repeat submissions (debounce/cooldown)
- Store timestamped events in Supabase

### 4.4 Leaderboard
- Real-time group leaderboard (Supabase Realtime/Subscriptions)
- Show user rankings, points, and challenge status

### 4.5 Profile & History
- User profile (display name, avatar optional)
- List of completed challenges/events

## 5. Data Model (Supabase/Postgres)
- **users**: id, email, display_name, avatar_url
- **groups**: id, name, challenge_description, created_by
- **group_members**: id, group_id, user_id, joined_at
- **challenge_events**: id, group_id, user_id, timestamp

## 6. API & Integration
- Use Supabase client SDK for all data/auth/storage operations
- Realtime subscriptions for leaderboard updates
- RESTful endpoints (if needed for custom logic)

## 7. Security & Privacy
- Groups are private by default—invite only
- Only group members can see group data
- Basic rate-limiting for button presses

## 8. Future Enhancements (Not in MVP)
- Photo/video proof for challenge completion
- Challenge rotation/reset
- Push notifications
- Public groups/discovery

## 9. Development Workflow
- Use TypeScript everywhere
- Functional programming style for all JS/TS code
- pnpm for dependency management
- Linting, formatting, and CI/CD pipeline (to be defined)

---

*This TDD is a living document and will be updated as the project evolves.*
