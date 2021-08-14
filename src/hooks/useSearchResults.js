export const useSearchResults = () => {
    //fetching the sample data
    fetch('/Sample-Api.json')
    .then(response => response.json())
    .then(data => console.log(data));

    const searchResults = []

    return {searchResults}

}