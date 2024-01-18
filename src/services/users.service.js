const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(response);
    return await response.json();
}

export { fetchUsers };
