---
title: Write the acceptance criteria first
description: Saying what "done" looks like works better than describing how to do the work.
date: 2026-11-07
tags: [workflow, coding]
---

**Use it when** the result can be checked. **Skip it when** you are still exploring and don't know what you want.

Written criteria let the AI judge its own work and correct itself when it fails.

```text
Add email validation to the signup form.

Done means:
- An invalid format shows an error under the field and blocks submit
- An existing email returns 409 and shows "Email already registered"
- npm test passes
- Nothing outside the auth folder changes

When finished, paste the npm test output.
```

The last criterion also sets the scope. Without one, AI tends to change things you never asked about.
