import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/"];

export default function middleware(req: NextRequest) {
  let verify = req?.cookies?.get("token");
  const parsedUrl = new URL(req.url).pathname;

  // if (!verify && protectedRoutes.some((route) => parsedUrl === route)) {
  //   return NextResponse.redirect(new URL("login", req?.url));
  // }

  // if (
  //   verify &&
  //   role.value === "user" &&
  //   (pathname.startsWith("/login") ||
  //     pathname.startsWith("/admin") ||
  //     pathname.startsWith("/prompt-engineer"))
  // ) {
  //   return NextResponse.redirect(new URL("/user/dashboard", req?.url));
  // }

  // if (
  //   verify &&
  //   role.value === "admin" &&
  //   (pathname.startsWith("/login") ||
  //     pathname.startsWith("/user") ||
  //     pathname.startsWith("/prompt-engineer"))
  // ) {
  //   return NextResponse.redirect(new URL("/admin/dashboard", req?.url));
  // }

  // if (
  //   verify &&
  //   (pathname.startsWith("/login") ||
  //     pathname.startsWith("/user") ||
  //     pathname.startsWith("/admin"))
  // ) {
  //   return NextResponse.redirect(new URL("/", req?.url));
  // }
}
