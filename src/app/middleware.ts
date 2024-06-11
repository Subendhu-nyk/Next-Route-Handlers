import { NextResponse, type NextRequest } from "next/server";

export function middleware (request:NextRequest){
//   return (
//     NextResponse.redirect(new URL("/",request.url))
//   )
// redirection
if(request.nextUrl.pathname==='/profile'){
    return (NextResponse.redirect(new URL('/hello',request.url)))
}

// url rewrite
  if (request.nextUrl.pathname === "/profile") {
    return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  }


}

// export const config={
//     matcher:"/profile",
//     }