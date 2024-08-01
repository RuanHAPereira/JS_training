function sum(a, b) {
  return a + b
}

export default function App() {
  const tech = "React"
  const status = false

  return (
    <div>
      <h1>{tech} é incrível!!</h1>
      <h2>É facil, como 1 + 1 é {sum(1, 1)}</h2>
      <h2>Status atual: {status ? "ON" : "OFF"}</h2>
    </div>
  )
}