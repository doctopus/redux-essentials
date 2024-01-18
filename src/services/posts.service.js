const fetchPosts = ()=> {
    const posts = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json[0]))
    return posts;
}

export { fetchPosts };