import { backInOut } from "framer-motion";
import { isNotFoundError } from "next/dist/client/components/not-found";
import { StringXor } from "next/dist/compiled/webpack/webpack";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.product.findMany({
      include: {
        category: true,
      },
    });
  }),

  createProduct: publicProcedure
    .input(
      z.object({
        name: z.string(),
        brand: z.string(),
        description: z.string(),
        price: z.number(),
        stock: z.number(),
        imageURL: z.string(),
        categoryId: z.string(),
        newCategoryName: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (input.categoryId == "other") {
        await ctx.db.category
          .findFirst({
            where: { name: input.newCategoryName },
          })
          .then(async (data) => {
            if (data) {
              input.categoryId = data.id;
            } else {
              await ctx.db.category
                .create({
                  data: {
                    name: input.newCategoryName,
                  },
                })
                .then((data) => {
                  input.categoryId = data.id;
                });
            }
          });
      }
      return ctx.db.product.create({
        data: {
          name: input.name,
          brand: input.brand,
          description: input.description,
          price: input.price,
          stock: input.stock,
          imageURL: input.imageURL,
          categoryId: input.categoryId,
        },
      });
    }),
  search: publicProcedure
    .input(
      z.object({
        searchTerm: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { searchTerm } = input;

      const items = await ctx.db.product.findMany({
        where: {
          OR: [
            { name: { contains: searchTerm, mode: "insensitive" } },
            { description: { contains: searchTerm, mode: "insensitive" } },
            { brand: { contains: searchTerm, mode: "insensitive" } },
          ],
        },
      });
      return items;
    }),
  delete: publicProcedure.input(z.string()).mutation(({ input, ctx }) => {
    return ctx.db.product.delete({
      where: {
        id: input,
      },
    });
  }),
  update: publicProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        brand: z.string(),
        description: z.string(),
        price: z.number(),
        stock: z.number(),
        categoryId: z.string(),
      }),
    )
    .mutation(({ input, ctx }) => {
      return ctx.db.product.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          brand: input.brand,
          description: input.description,
          price: input.price,
          stock: input.stock,
          categoryId: input.categoryId,
        },
      });
    }),
  singleItem: publicProcedure
    .input(
      z.object({
        singleItem: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { singleItem } = input;

      const item = await ctx.db.product.findMany({
        where: {
          name: { contains: singleItem, mode: "insensitive" },
        },
        take: 1,
      });
      return item[0];
    }),
});
