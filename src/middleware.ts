import { authMiddleware} from "@clerk/nextjs";


export default authMiddleware({
    publicRoutes:["/","/search","/register","/signin"]
});;

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}