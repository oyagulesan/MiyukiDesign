import './App.css';
import './components/HeaderComponent';
import HeaderComponent from './components/HeaderComponent';
import { AppProvider } from './context/appContext';

function App() {
  // TODO Router .... DONE
  // TODO App context .... DONE
  // TODO canvas .... DONE
  // TODO color list
  // TODO result calculation
  // TODO download as JPEG
  // TODO Contact
  // TODO Styling
  return (
    <div className="App">
      <AppProvider>
        <HeaderComponent/>
      </AppProvider>
    </div>
  );
}

export default App;
