import './App.css';
import { Router } from '@reach/router'
import Detail from './views/Detail';
import View from './views/View'
import Update from './views/Update';
import Form from './components/Form';


function App() {
  return (
    <div className="wrapper">
      <Router>
        <View path="/" />
        <Form path="/ideas/new" />
        <Detail path="/ideas/:id" />
        <Update path="/ideas/:id/edit" />
      </Router>
    </div>
  );
}

export default App;
