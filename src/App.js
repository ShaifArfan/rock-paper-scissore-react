
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Board from './components/Board';
import {MyContextProvider} from './components/Context';
import HighScore from './components/HighScore';
import Home from './components/Home';


function App() {
  return (
    <MyContextProvider>

    <div className="App">
        <Router>
          <Switch>

            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/high-score'>
              <HighScore></HighScore>
            </Route>
            <Route path='/board' exact>
              <Board />
            </Route>

          </Switch>
        </Router>
    </div>

    </MyContextProvider>
  );
}

export default App;
