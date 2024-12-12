import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/", "/index"],
};

/**
 * Middleware function to handle basic authentication.
 *
 * @param {NextRequest} req - The incoming request object.
 * @returns {NextResponse} - The response object.
 *
 * This middleware checks for the presence of an "authorization" header in the request.
 * If the header is present, it extracts the username and password from the Basic Auth value.
 * If the username and password match the expected values, the request is allowed to proceed.
 * Otherwise, the request is rewritten to the "/api/auth" path.
 */
export default function middleware(req: NextRequest) {
  const basicAuth = req.headers.get("authorization");
  const url = req.nextUrl;

  if (basicAuth) {
    const authValue = basicAuth.split(" ")[1];
    const [user, pwd] = atob(authValue).split(":");

    if (user === "mm-december-assignment" && pwd === "M4R1M3KK0") {
      return NextResponse.next();
    }
  }
  url.pathname = "/api/auth";

  return NextResponse.rewrite(url);
}
