import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS = gql`
  query{
      lessons{
        id
        title
      }
  }
`

interface Lesson {    //aqui estamos definindo o tipo de dado que vai ser retornado
  id: string
  title: string
}

function App() {

  const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS)   //aqui estamos tipando a query com 'Lesson' e puxando o resultado/parametros da query GET_LESSONS

  console.log(data)

  return (
    <ul>
    {data?.lessons.map((lesson) => {    
      return <li key={lesson.id}>{lesson.title}</li>    
      })
    }
    </ul>
  )
}

export default App