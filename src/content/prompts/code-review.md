---
title: A code review that only reports real problems
description: Skip the style nits and focus on what would actually break.
date: 2026-11-06
tags: [coding, review]
---

Replace the text in braces with your own.

```text
Review the code change below.

Purpose of the change: {purpose}

Report only things that would cause real problems: logic errors,
unhandled cases, data loss, security issues, clear performance
regressions. Do not report naming, formatting or style preferences.

For each problem, give:
1. File and line
2. The input or state that triggers it
3. A suggested fix

If you find nothing, say so. Do not report things just to have a report.

Change:
{diff}
```
