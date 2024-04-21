import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  create: publicProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      // simulate a slow db call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      return ctx.db.post.create({
        data: {
          name: input.name,
        },
      });
    }),

    getAll: publicProcedure.query(async ({ ctx }) => {
      const posts = await ctx.db.post.findMany({
        orderBy: { createdAt: 'desc' }, 
      });
      return posts;
    }),

  update: publicProcedure
    .input(z.object({ id: z.number(), name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const { id, name } = input;
      const updatedPost = await ctx.db.post.update({
        where: { id },
        data: { name },
      });
      return updatedPost;
    }),

  remove: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ ctx, input }) => {
      const { id } = input;
      const deletedPost = await ctx.db.post.delete({
        where: { id },
      });
      return deletedPost;
    }),
});
