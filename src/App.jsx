import {Routes,Route} from 'react-router-dom';
import './App.css';
import Parent from './Parent'
import Login from './Login';

function App() {

  return (
  <>

<Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Parent" element={<Parent/>}/>
      </Routes>
       
  </>
      
  )
}


export default App;