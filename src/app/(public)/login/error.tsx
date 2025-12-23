'use client'

interface Props {
  error: Error & { digest?: string }
  reset: () => void
}

export default function LoginError({ error, reset }: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h2 className="text-xl font-bold text-red-600">
          خطایی در ورود رخ داد
        </h2>

        <p className="text-sm text-gray-500">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="rounded bg-black px-4 py-2 text-white"
        >
          تلاش مجدد
        </button>
      </div>
    </div>
  )
}
