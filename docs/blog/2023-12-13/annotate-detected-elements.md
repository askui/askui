---
title: 2023-12-13
slug: release-2023-12-13
authors: [leonmeier]
tags: [Selection, Annotation]
hide_table_of_contents: false
---

## Introduction

On December 13, we introduced three new features: the **Visual Description Matching Method** for selecting diverse visual elements, **Targeted Annotations** for precise debugging, and **Precision Text Matching** for flexible text matching.

## Overview

1. **Visual Description Matching Method**
   - **Documentation**: [Matching Feature](https://docs.askui.com/docs/api/Element-Descriptions/matching)
   - This feature introduces the `matching()`method, allowing users to identify and interact with UI elements based solely on textual descriptions.
   - Enhances the flexibility of automated interactions with dynamic UIs.

2. **Targeted Annotations**
   - **Documentation**: [Annotate DetectedElements](https://docs.askui.com/docs/api/Annotation/annotate)
   - Introduces an `AnnotationRequest` parameter in the `annotate()` method, allowing users to annotate specific elements retrieved from user interfaces by the `get()` method.
   - Simplifies debugging of UI element selection.

3. **Precision Text Matching**
   - **Documentation**: [Adjustable Similarity Score](https://docs.askui.com/docs/api/Element-Descriptions/withtext)
   - Introduces an optional `similarity_score` parameter for the `.withText()` method.
   - Improves script resilience and minimizes mismatches in text-based automation.
