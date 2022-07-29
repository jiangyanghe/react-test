import { ContextProvider } from "./reducer";
import Counter from "./counter";
import CounterTest from "./counterTest";

export default function ContextDemo() {
  return (
    <ContextProvider>
      <Counter />
      <CounterTest />
    </ContextProvider>
  )
}