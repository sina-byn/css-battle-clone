'use client';

// * dompurify
import { sanitize } from 'isomorphic-dompurify';

// * hooks
import { useHtmlContext } from '@/context/HtmlContextProvider';

// * helpers
import wrapHtml from '@/helpers/wrapHtml';

// * data
const sanitizer_config = { ALLOWED_TAGS: ['div', 'style'] };

const Iframe = () => {
  const { html } = useHtmlContext();
  const sanitizedHtml = wrapHtml(sanitize(`<body>${html}</body>`, sanitizer_config));

  return (
    <iframe srcDoc={sanitizedHtml} className='output w-full h-full bg-white pointer-events-none' />
  );
};

export default Iframe;
