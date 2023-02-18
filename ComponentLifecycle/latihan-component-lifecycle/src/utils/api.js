async function getRepositories(language = 'all') {
    const response = await fetch(`https://api.github.com/legacy/repos/search/dicoding-academy?language=${language}`);
    const responseJson = await response.json();
    return responseJson.repositories;
}

export { getRepositories };