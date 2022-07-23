import { useState } from 'react'
import { Container, TodoList, Input, Button, List, Item } from './styles'

function App(){
  //estado do react
  const [tasks, setTasks] = useState([])
  const [inputValue, setinputValue] = useState('')

  function inputChange(event) {
    setinputValue(event.target.value) //pega o que digita e coloca dentro da variável inputValue - atualiza a variável inpuntValue
  }

  function buttonClick() { //... => pega tudo que já tem 
    setTasks([...tasks, inputValue])// pega as tarefas (tasks) e coloca dentro da variável setTasks - atualiza a variável tasks
  }

  return (//onChange => quando digita no input ele chama a função inputChange e manda a informação
    <Container>
      <TodoList>
      <Input type="text" placeholder="Digite a sua tarefa" onChange={inputChange} />
      <Button onClick={buttonClick}>Adicionar tarefa</Button>

      <List>
        {tasks.map((item, index) => ( //mapea tasks, pega item por item e coloca no li
          <Item key={index}>{item}</Item>
        ))}
      </List>
      </TodoList>
    </Container>
  )
}

export default App