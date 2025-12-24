import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value
  const pathname = req.nextUrl.pathname

  // مسیرهای داشبورد محافظت‌شده
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url))
    }

    // نمونه: Role check می‌تواند اینجا اضافه شود
    const role = req.cookies.get("role")?.value
    if (!role || (role !== "admin" && role !== "operator")) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
  }

  return NextResponse.next()
}

// اعمال middleware روی مسیرهای مورد نظر
export const config = {
  matcher: ["/dashboard/:path*"],
}