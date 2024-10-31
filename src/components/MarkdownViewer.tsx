import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';

interface MarkdownViewerProps {
  content: string;
}

export const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ content }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="prose prose-invert max-w-none"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="relative group">
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
                <button 
                  className="absolute top-2 right-2 bg-gray-700 p-2 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => navigator.clipboard.writeText(String(children))}
                >
                  Copy
                </button>
              </div>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          },
          a({ node, children, href, ...props }) {
            return (
              <a 
                href={href}
                className="flex items-center gap-1 text-purple-400 hover:text-purple-300"
                target="_blank"
                rel="noopener noreferrer"
                {...props}
              >
                <FaLink className="text-sm" />
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </motion.div>
  );
};