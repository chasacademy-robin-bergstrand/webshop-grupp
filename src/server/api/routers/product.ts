import { isNotFoundError } from "next/dist/client/components/not-found";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany();
  }),
  createProduct: publicProcedure
    .input(
      z.object({
        name: z.string(),
        brand: z.string(),
        description: z.string(),
        price: z.number(),
        stock: z.number(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.product.create({
        data: {
          name: input.name,
          brand: input.brand,
          description: input.description,
          price: input.price,
          stock: input.stock,
        },
      });
    }),
    search: publicProcedure.input(
      z.object({
        searchTerm: z.string(),
        
      })
    ).query(async({ ctx, input }) => {
      const {searchTerm} = input;
      const items = await ctx.db.product.findMany({
        
        where: {
          name: {
            contains: searchTerm,
            mode:'insensitive'
          },
        },

      })
      return items
})});
