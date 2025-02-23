import React from "react";
import MarkdownRenderer from "@/components/MarkdownRenderer";

const markdownString = `
# Heading Level 1
## Heading Level 2
### Heading Level 3
#### Heading Level 4
##### Heading Level 5
###### Heading Level 6

This is a paragraph with **bold text**, _italic text_, and ~~strikethrough text~~. Here’s some \`inline code\` to illustrate inline formatting.

---

## Lists

### Unordered List
- Item 1
- Item 2
  - Nested Item 1
  - Nested Item 2

### Ordered List
1. First item
2. Second item
   1. Sub-item A
   2. Sub-item B

### Task List
- [x] Completed Task
- [ ] Incomplete Task

---

## Blockquotes

> This is a blockquote.
>
> It can span multiple lines and include other elements, such as:
> - A nested list
> - \`inline code\` for emphasis

---

## Code Blocks

Below is a JavaScript code block with syntax highlighting:

\`\`\`javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}
greet("World");
\`\`\`

---

## Table

| Column 1     | Column 2     | Column 3     |
| ------------ | ------------ | ------------ |
| Row 1 Col 1  | Row 1 Col 2  | Row 1 Col 3  |
| Row 2 Col 1  | Row 2 Col 2  | Row 2 Col 3  |

---

## Images and Links

![Placeholder Image](https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg "Placeholder Image")

For more information, visit [Google](https://www.google.com).

---

## Video

Below is an embedded video using HTML (ensure your markdown renderer supports HTML):

<video width="320" height="240" controls>
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## Footnotes

This sentence contains a footnote reference.[^1]

[^1]: This is the footnote text.

---

## Horizontal Rule

You can also insert a horizontal rule with three dashes:

---
`;

const Page = () => {
  return <MarkdownRenderer markdown={markdownString} />;
};

export default Page;
