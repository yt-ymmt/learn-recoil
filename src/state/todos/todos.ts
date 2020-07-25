import { selectorFamily, atom, SerializableParam } from 'recoil';
import sleep from '../../../utility/sleep';

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
    get: () => async (): Promise<Todos> => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
        ).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Not Found');
            }
        });

        await sleep(2000);

        return response;
    },
    set: () => ({ set }, newValue) => {
        set(todos, newValue as Todos);
    },
});

export default todosSelector;
