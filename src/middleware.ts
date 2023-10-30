import { authMiddleware} from "@clerk/nextjs";


export default authMiddleware({
    publicRoutes:["/","/search","/register","/signin","/products","/api/trpc/product.search",
    "/admin",
    "/api/trpc/product.createProduct",
    "/api/trpc/product.getAll",
    "/api/trpc/product.delete",
    "/api/trpc/category.getAll",
    "/api/trpc/category.create",
    "/api/trpc/product.getAll,category.getAll",

]
});;

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}