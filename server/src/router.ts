import { router, publicProcedure } from "./trpc";

export const testRouter = router({
    test: publicProcedure.mutation(()=> 'test')
})

export type TestRouter = typeof testRouter