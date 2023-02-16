import logo from './logo.svg';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoForm />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
