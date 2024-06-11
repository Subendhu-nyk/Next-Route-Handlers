import { NextResponse, type NextRequest } from "next/server";

export function middleware (request:NextRequest){
//   return (
//     NextResponse.redirect(new URL("/",request.url))
//   )
// redirection
// if(request.nextUrl.pathname==='/profile'){
//     return (NextResponse.redirect(new URL('/hello',request.url)))
// }

// url rewrite (it will redirected to hello but the url will be same that is profile)
  // if (request.nextUrl.pathname === "/profile") {
  //   return NextResponse.rewrite(new URL("/hello", request.nextUrl));
  // }

  const response=NextResponse.next()
  const themePreference=request.cookies.get('theme')
  if(!themePreference){
    response.cookies.set("theme","dark")
  }
  return response;


}

// export const config={
//     matcher:"/profile",
//     }