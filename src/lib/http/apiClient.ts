// old name is proxy

export async function apiClient<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}${url}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    }
  )

  if (!res.ok) {
    const message = await res.text()
    throw new Error(message || "API Error")
  }

  return res.json()
}
