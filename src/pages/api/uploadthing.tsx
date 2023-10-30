import { createNextPageApiHandler } from "uploadthing/next-legacy";

import { ourFileRouter } from "~/server/uploadThing";

const handler = createNextPageApiHandler({
  router: ourFileRouter,
});

export default handler;
