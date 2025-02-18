// http://localhost:3000/isolated/examples/warnings.js

import * as React from 'react'
import warning from 'warning'

function App() {
  const [name, setName] = React.useState()
  const [animal, setAnimal] = React.useState('tiger')
  return (
    <div>
      <div>
        <label>
          Read only (missing onChange):{' '}
          <input
            value="yo"
            readOnly
            onClick={() => {
              warning(false, 'This is a read only segment')
            }}
          />
        </label>
      </div>
      <div>
        <button onClick={() => setName('bob')}>Set name to bob</button>
        <label>
          Changing from uncontrolled to controlled:{' '}
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <button onClick={() => setAnimal()}>Unset animal</button>
        <label>
          Changing from controlled to uncontrolled:{' '}
          <input value={animal} onChange={e => setAnimal(e.target.value)} />
        </label>
      </div>
    </div>
  )
}

export default App
