import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import DragDrop from './components/DragDrop';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <h3 className='Heading'>Drag and Drop</h3>
        <DragDrop/>
      </div>
    </DndProvider>

  );
}

export default App;
