function getProfilePicture(userId) {
    return `https://avatars.githubusercontent.com/u/${userId}`;
}

function getProfileLink(username) {
    return `https://github.com/${username}`;
}


function getGithubInfo(username, userId) {
    return {
        profilePicture: getProfilePicture(userId),
        profileLink: getProfileLink(username),
    };
}

console.log(getGithubInfo('dimasmds', 25724809));