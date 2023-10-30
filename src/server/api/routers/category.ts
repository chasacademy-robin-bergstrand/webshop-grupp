import { isNotFoundError } from "next/dist/client/components/not-found";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const categoryRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.category.findMany();
  }),
  create: publicProcedure.input(z.string()).mutation(({ input, ctx }) => {
    return ctx.db.category.create({
      data: {
        name: input,
      },
    });
  }),
});
