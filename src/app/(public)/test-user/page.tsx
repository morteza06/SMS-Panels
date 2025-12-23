"use client";

import { useCreateUser } from "@/features/user/hooks/useCreateUser";

export default function TestUserPage() {
  const { mutate, error, isPending } = useCreateUser();

  return (
    <div style={{ padding: 40 }}>
      <button
        onClick={() =>
          mutate({
            name: "A",
            lastName: "",
            mobile: "0912",
            nId: "123",
            password: "123",
            confirmPassword: "999",
            acceptTerms: false,
          })
        }
      >
        Send Invalid Data
      </button>

      {isPending && <p>Loading...</p>}
      {error && <pre>{JSON.stringify(error, null, 2)}</pre>}
    </div>
  );
}
