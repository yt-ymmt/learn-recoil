import { selectorFamily, atom, SerializableParam } from 'recoil';
import { getAllTodos } from './apis';

export type Todo = {
    id: string;
    title: string;
    body: string;
    userId: string;
};

export type Todos = Todo[];

const todos = atom<Todos>({
    key: 'todos',
    default: [],
});

const todosSelector = selectorFamily<Todos, SerializableParam>({
    key: 'todos',
    get: () => async () => {
        return getAllTodos();
    },
    set: () => ({ set }, newValue) => {
        set(todos, newValue as Todos);
    },
});

export default todosSelector;
