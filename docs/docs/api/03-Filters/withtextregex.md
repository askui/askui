---
displayed_sidebar: apiSidebar
---
# withTextRegex

Filters for texts, which match the regex pattern.

**Examples:**

```typescript
'The rain in Spain' === withTextRegex('\b[Ss]\w+') => true
'The rain in Portugal' === withTextRegex('\b[Ss]\w+') => false
'The rain in switzerland' === withTextRegex('\b[Ss]\w+') => true
```

* @param {string} regex_pattern - A regex pattern
