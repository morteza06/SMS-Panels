import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * proxy
 * -----
 * Gate امنیتی پروژه
 * جایگزین middleware در Next جدید
 */
export function proxy(req: NextRequest) {
  console.log("🔥 PROXY RUNNING:", req.nextUrl.pathname)
  
  const token = req.cookies.get("access_token")
  console.log("🍪 ACCESS TOKEN:", token?.value)
  const path = req.nextUrl.pathname

  // محافظت مسیرهای داشبورد
  if (!token && path.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}
