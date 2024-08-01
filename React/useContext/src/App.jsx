import UserInfo from "./components/UserInfo"
import UserContext from "./contexts/UserContext"

export default function App() {
  const user = {
    name: "Ruan",
    email: "ruan@email.com"
  }
  
  return (
    <>
      <UserContext.Provider value={user}>
        <h1>Usando Contexto</h1>
        <UserInfo />
      </UserContext.Provider>
    </>
  )
}