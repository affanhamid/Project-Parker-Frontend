"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

function CodeBlock({ className, children, ...props }) {
  const language = className?.replace("language-", "") || "";
  const [copyState, setCopyState] = useState(false);

  const copyToClipboard = () => {
    const codeToCopy = Array.isArray(children) ? children.join("\n") : children;

    navigator.clipboard.writeText(codeToCopy);
    setCopyState(true);
  };

  return (
    <p className="relative group my-4">
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

      {/* Syntax highlighted code */}
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        PreTag="div"
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </p>
  );
}

export default CodeBlock;
