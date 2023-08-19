"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/dashboard')
  }, [router])
  return (
    <main className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1>KNUST student Dashboard</h1>
        <small className="text-black/100 text-center block">Copyright &copy; 2023 Kwame Nkrumah University Of Science and Technology. All Rights Reserved</small>
      </div>
    </main>
  );
}
