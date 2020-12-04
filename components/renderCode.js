import ReactMarkdown from "react-markdown";
import CodeBlock from "./codeBlock";

export default function Test({ value }) {
  return (
    <div>
      <ReactMarkdown
        source={value}
        escapeHtml={false}
        renderers={{
          code: CodeBlock,
        }}
      />
    </div>
  );
}
