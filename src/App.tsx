import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-bold">Tauri + React Template</h1>
      <p className="text-gray-500">
        Dev Container 上で動く Tauri + React (TypeScript) のスターターです。
      </p>
      <button
        type="button"
        onClick={() => setCount((c) => c + 1)}
        className="rounded bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        Count: {count}
      </button>
    </main>
  );
};
