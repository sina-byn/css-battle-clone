import { type NextRequest } from 'next/server';

// * types
type RequestBody = { html: string };

export const POST = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const id = searchParams.get('id');

  const errorResponse = { ok: false, status: 500 };
  const body: RequestBody = await req.json();

  if (!id) return Response.json(errorResponse);
};
