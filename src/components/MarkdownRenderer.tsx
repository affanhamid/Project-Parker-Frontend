import React from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import CodeBlock from "@/components/CodeBlock";

const MarkdownRenderer = ({ markdown }) => {
  return (
    <article className="prose max-w-none dark:prose-invert">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code: CodeBlock,
        }}
      >
        {markdown}
      </Markdown>
    </article>
  );
};

export default MarkdownRenderer;
