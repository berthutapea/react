function ProfilePicture({ userId }) {
    return (
        <img src={`https://avatars.githubusercontent.com/u/${userId}`} />
    );
}

function ProfileLink({ username }) {
    return (
        <a href={`https://github.com/${username}`} />
    );
}


function GithubInfo({ username, userId }) {
    return (
        <div className='github-info'>
            <ProfilePicture userId={userId} />
            <ProfileLink username={username} />
        </div>
    )
}