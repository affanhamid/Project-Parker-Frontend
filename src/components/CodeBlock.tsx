"use client";
import React, { useState } from "react";
import { ExtraProps } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  props: React.ClassAttributes<HTMLElement> &
    React.HTMLAttributes<HTMLElement> &
    ExtraProps;
};

const CodeBlock = (props: CodeBlockProps) => {
  const { children, className, ...rest } = props.props;
  const language = className?.replace("language-", "") || "";
  const [copyState, setCopyState] = useState(false);

  const copyToClipboard = () => {
    const codeToCopy = Array.isArray(children) ? children.join("\n") : children;

    navigator.clipboard.writeText(codeToCopy!.toString());
    setCopyState(true);
  };

  return (
    <div className="relative group my-4">
      <button
        onClick={copyToClipboard}
        className="
          absolute right-2 top-2
          px-2 py-1
          text-sm rounded
          bg-gray-700 hover:bg-gray-600
          text-white
          opacity-0 group-hover:opacity-100
          transition-opacity
        "
      >
        {copyState ? "Copied!" : "Copy"}
      </button>

      <SyntaxHighlighter
        {...rest}
        language={language}
        style={vscDarkPlus}
        PreTag="pre"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
