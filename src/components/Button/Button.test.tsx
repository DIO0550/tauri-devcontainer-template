import { flushSync } from "react-dom";
import { createRoot } from "react-dom/client";
import { expect, test } from "vitest";
import { Button } from "./index";

test("renders the given label", () => {
  const container = document.createElement("div");
  const root = createRoot(container);

  flushSync(() => {
    root.render(<Button label="Hello" />);
  });

  expect(container.textContent).toBe("Hello");

  root.unmount();
});
