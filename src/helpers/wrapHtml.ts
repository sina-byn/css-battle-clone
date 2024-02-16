const wrapHtml = (html: string) => {
  return `<html><head><style>body{padding: 0; margin: 0; box-sizing:border-box; overflow: hidden; width: 400px; height: 300px;}</style><head><body>${html}</body></html>`;
};

export default wrapHtml;
