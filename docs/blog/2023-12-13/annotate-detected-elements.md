---
title: 2023.12.13 Annotate DetectedElements from get()
slug: release-notes-annotate-detected-elements
authors: [leonmeier, johannesdienst]
tags: [ReleaseNotes]
hide_table_of_contents: false
---

## Overview

This update introduces an optional `AnnotationRequest` parameter to the `annotate()` method, allowing users to annotate specific elements retrieved from user interfaces by the `get()` method.

## Benefits

- Users can now annotate elements fetched by `get()`, enhancing visibility and interaction with these elements.
- Simplifies UI element selection debugging with targeted annotations.

<!-- truncate -->

## How to Use

1. Use the `get()` method to retrieve elements.
2. Pass the `AnnotationRequest` parameter to specify which elements to annotate.
3. Execute the annotation command as shown in the provided example.

## Example

```typescript
const detectedElements = await aui.get().text().withText("User Interfaces?").exec();
await aui.annotate({ elements: detectedElements });
```

_Result: Annotated bounding box around the text "User Interfaces?" on askui.com._

![Screenshot of askui.com website with a bounding box around the detected element User Interfaces?](annotate_with_detected_elements.png)