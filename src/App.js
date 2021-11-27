import './App.css';
import './components/HeaderComponent';
import HeaderComponent from './components/HeaderComponent';
import { AppProvider } from './context/appContext';

function App() {
  // TODO download as JPEG
  return (
    <div className="App">
      <AppProvider>
        <HeaderComponent/>
      </AppProvider>
    </div>
  );
}

export default App;
