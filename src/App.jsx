import { useState } from "react";
import { Lista } from "./components/Lista";
import { Adicionar } from "./components/AdicionarForm";

export function App() {
  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      text: "Fazer lição",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      isCompleted: false,
    }

  ]);


  function removerTodo(id) {
    const newTodos = [...tarefas]
    const filteredTarefas = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTarefas(filteredTarefas)
  }

  function completar(id) {
    const newTodos = tarefas.map((todo) => todo.id === id ? { ...todo, isCompleted: !todo.isCompleted }: todo);

    setTarefas(newTodos);
  }

  const addTodo = (text) => {

    const newTodos = [...tarefas,
    {
      id: Math.floor(Math.random() * 10000),
      text,
      
      isCompleted: false,
    },
    ];

    setTarefas(newTodos);

  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <Adicionar addTodo={addTodo} />

      <div className='todo-list'>
        {tarefas.map((todo) => (
          <Lista key={todo.id} todo={todo} removerTodo={removerTodo} completar={completar} />
        ))}
      </div>

    </div >
  )
}