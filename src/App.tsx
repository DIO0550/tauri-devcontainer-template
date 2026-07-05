import { useState } from "react";
import { Button } from "@/components/Button";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Tauri + React Template</h1>
      <p className="text-gray-500">
        Dev Container 上で動く Tauri + React (TypeScript) のスターターです。
      </p>
      <Button label={`Count: ${count}`} onClick={() => setCount((c) => c + 1)} />
    </main>
  );
};
