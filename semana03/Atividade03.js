import FirstComponent from './FirstComponent';
import Profile from './Profile';
import Gallery from './Gallery';
import { Link } from "react-router-dom";
import TodoList from './TodoList';
import TodoListPerson from './TodoListPerson';
import ProfileCard from './Card';
import PackingList from './PackingList';
import List from './List';
import TeaGathering from './Cup';

export default function Atividade03()
{
    return (
        <>
          <Link to="/"> Voltar para Homepage </Link>
          <h1> Atividade 03 - Semana 03 </h1>
          <FirstComponent />
          <Profile />
          <Gallery />
          <TodoList />
          <TodoListPerson />
          <ProfileCard />
          <PackingList />
          <List />
          <TeaGathering />
        </>
    );
}

//Atividade realiza graças ao W3S (https://www.w3schools.com/react/react_components.asp) e alguns videos do youtube explicando. 
//gm
