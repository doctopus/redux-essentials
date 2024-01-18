const fetchQuotes = () => {
    const response = fetch ('https://dummyjson.com/quotes')
        .then((res)=>{console.log(res)});
}

export { fetchQuotes };