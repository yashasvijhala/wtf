import './App.css'
import { useGetPersonByIdQuery } from './generated/graphql'

function App() {
  const { data } = useGetPersonByIdQuery({
    variables: {
      getPersonByIdId: '26d2a1cc-518d-4482-afa1-b85b597597a5'
    }
  })
  return <div className="App">={JSON.stringify(data)}</div>
}

export default App
