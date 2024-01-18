const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        console.log(await response.json());
    return await response.json();
}

export { fetchTodos };