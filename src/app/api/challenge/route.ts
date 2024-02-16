import { type NextRequest } from 'next/server';

// * helpers
import { readPixels, takeScreenshot, meanSquaredError } from '@/helpers';
import wrapHtml from '@/helpers/wrapHtml';

// * types
type RequestBody = { html: string };

export const POST = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get('id');

  const errorResponse = { ok: false, status: 500 };
  const body: RequestBody = await req.json();
  const html = wrapHtml(body.html);

  if (id === null) return Response.json(errorResponse);

  console.log('here');

  await takeScreenshot(id, html, 'base', 'output');

  try {
    const basePixels = await readPixels('public/base.png');
    const outputPixels = await readPixels('public/output.png');
    const similarityPercent = meanSquaredError(outputPixels, basePixels);

    return Response.json({ ok: true, status: 200, data: { similarity: similarityPercent } });
  } catch (err) {
    console.error(err);
  }

  Response.json(errorResponse);
};
