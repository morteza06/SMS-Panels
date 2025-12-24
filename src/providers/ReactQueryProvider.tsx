'use client'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"
import { useHydrateAuth } from "@/features/identity/hooks/useHydrateAuth"

export default function ReactQueryProvider({
    children,
}: {
    children: ReactNode
}){
    const[client] = useState(() => new QueryClient())

    useHydrateAuth()

    return(
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}

