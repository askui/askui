---
displayed_sidebar: apiSidebar
---
# withText
<span class="theme-doc-version-badge badge badge--success">production</span><br/><br/>

Filters for similar -- meaning >70% similar -- text.

Takes an optional parameter to specify the similarity. Usually you need the optional parameter for long texts you want to match precisely.

_We use [RapidFuzz](https://maxbachmann.github.io/RapidFuzz/Usage/fuzz.html#ratio) which calculates the similarity like this:_

`1 - (distance / (lengthString1 + lengthString2))`

**Examples:** 
```typescript
'text' === withText('text') => true
'test' === withText('text') => true
'Test' === withText('text') => true
'Text' === withText('text') => true
'TEXT' === withText('text') => true
'texst' === withText('text') => true
'texts' === withText('text') => true

'atebxtc' === withText('text') => false
'other' === withText('text') => false

// optional parameter: similarity_score
'978-0-201-00650-6' == withText("978-0-201-00", 90) => false with 82.76 < 90 similarity
'978-0-201-00650-6' == withText("978-0-201-00650", 90) => true with 93.75 > 90 similarity
```
![](/img/gif/withText.gif)

   * @param \{string} text - A text to be matched.
