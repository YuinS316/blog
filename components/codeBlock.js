import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
// 设置高亮样式
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
// 设置高亮的语言
import {
  jsx,
  javascript,
} from "react-syntax-highlighter/dist/cjs/languages/prism";
import { useEffect } from "react";

export default function CodeBlock({ language, value }) {
  useEffect(() => {
    SyntaxHighlighter.registerLanguage("jsx", jsx);
    SyntaxHighlighter.registerLanguage("javascript", javascript);
  });
  return (
    <figure className="highlight">
      <SyntaxHighlighter language={language} style={vscDarkPlus}>
        {value}
      </SyntaxHighlighter>
    </figure>
  );
}
