import {Post} from "./Post";
import './styles.css';

export function App() {

  return (
    // para colocar um componente abaixo do outro
    // é necessário estar envoltos em algo
    <div>
      <Post
        author="matheus junio"
        content="Lorem ipsum dolor sit amet consectetur adipisicing"
      />
      <Post
        author="junin"
        content="lfofodfk jdfj  jfifjijifods"
      />

    </div>
  )
}

