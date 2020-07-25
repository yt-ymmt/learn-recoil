import sleep from '../../../utility/sleep';
import { Todos } from './todos';

export const getAllTodos = async (): Promise<Todos> => {
    try {
        await sleep(2000);

        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
        ).then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Not Found');
            }
        });

        return response;
    } catch (error) {
        throw new Error(error);
    }
};
