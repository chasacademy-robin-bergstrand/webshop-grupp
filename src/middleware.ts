import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/search",
    "/register",
    "/signin",
    "/api/trpc/product.search",
    "/admin",
    "/api/trpc/product.createProduct",
    "/api/trpc/product.getAll",
    "/api/trpc/product.delete",
    "/api/trpc/category.getAll",
    "/api/trpc/category.create",
    "/api/trpc/product.getAll,category.getAll",
    "/api/trpc/product.update",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
