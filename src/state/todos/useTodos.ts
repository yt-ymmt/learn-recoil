import { useRecoilState } from 'recoil';
import todosSelector from './todos';

const useTodos = () => {
    const [todoItems, setTodoItems] = useRecoilState(todosSelector(10));

    const deleteItems = async (id: string): Promise<void> => {
        const updatedItems = todoItems.filter((todo) => todo.id !== id);
        setTodoItems(updatedItems);
    };

    return {
        todoItems,
        deleteItems,
    };
};

export default useTodos;
