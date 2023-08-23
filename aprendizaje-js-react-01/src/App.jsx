import Hello from './components/hello-example-1'
import ReactDOM from 'react-dom/client'

import './App.css'

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'))
  root.render(<Hello name="Ricardo" />)
}
export default App
