function subscribeGitHubProfile(username, listener) {
    console.count(`subscribe for ${username}`);

    // mock "subscription" ...
    const intervalId = setInterval(async () => {
        console.count(`listener for ${username} called`);
        const response = await fetch(`https://api.github.com/users/${username}`);
        const profile = await response.json();
        listener(profile);
    }, 3000);

    return () => {
        console.count(`unsubscribe for ${username}`);
        clearInterval(intervalId);
    };
}

export { subscribeGitHubProfile };
