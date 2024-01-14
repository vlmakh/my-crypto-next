import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);

  // Add new request headers
  requestHeaders.set(
    "X-API-KEY",
    "r9FNSR3h4KySY93Gz9AJaYZMII+7fsxA7b1mvlPVQhY="
  );

  return NextResponse.next({
    request: {
      // New request headers
      headers: requestHeaders,
    },
  });
}
