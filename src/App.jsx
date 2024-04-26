
import './App.css'
import Form from './components/Form'
import { UserProvider } from './context/form'

function App() {

  return (
    <UserProvider>
        <Form />
    </UserProvider>
  )
}

export default App
