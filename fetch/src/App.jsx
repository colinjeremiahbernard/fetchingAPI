import { useEffect, useState } from "react"

const tarefas = [
  {id:'1', title:'minha primeira tarefa'},
  {id:'2', title:'minha segunda tarefa'},
  {id:'3', title:'minha terceira tarefa'},
  {id:'4', title:'minha quarta tarefa'},
  {id:'5', title:'minha quinta tarefa'},
]

export default function App() {
  const [tarefas, setTarefas] = useState([])
  useEffect(() => {
    async function buscarDados() {
      const resultado = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(res => setTarefas(res));
      const finalResult = await resultado.json();
      return finalResult;
    }
    buscarDados().then(res => setTarefas(res));
  },[])
  return (
    <div>
      <h1>Buscando dados.</h1>
      <ol>
         {tarefas.map((tarefa) => {
         return(
          <div>
            <li key={tarefa.id}>  {tarefa.title}
               {tarefa.   completed ?   '-Tarefa    Concluida' : null}
            </li>
          </div>
         )
         })}
      </ol>
    </div>
  )
}


