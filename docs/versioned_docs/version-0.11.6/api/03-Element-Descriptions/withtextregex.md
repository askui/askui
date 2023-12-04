---
displayed_sidebar: apiSidebar
---
# withTextRegex
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for texts, which match the regex pattern.

**Examples:**

```typescript
'The rain in Spain' === withTextRegex('\b[Ss]\w+') => true
'The rain in Portugal' === withTextRegex('\b[Ss]\w+') => false
'The rain in switzerland' === withTextRegex('\b[Ss]\w+') => true

// this filters any text that contains 'pie' or 'cake' or 'Pie' or 'Cake'
await aui.get().text().withTextRegex('.*([Pp]ie|[Cc]ake).*').exec();
```
![](/img/gif/withTextRegex.gif)

   * @param \{string} regex_pattern - A regex pattern
