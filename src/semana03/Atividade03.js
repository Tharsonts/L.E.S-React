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

export default function Atividade03() {
    return (
        <div className="atividade03-container">
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
        </div>
    );
}
