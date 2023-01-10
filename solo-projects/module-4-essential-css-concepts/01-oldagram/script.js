const posts = [
    {
        name: 'Vincent van Gogh',
        username: 'vincey1853',
        location: 'Zundert, Netherlands',
        avatar: 'images/avatar-vangogh.jpg',
        post: 'images/post-vangogh.jpg',
        comment: 'just took a few mushrooms lol',
        likes: 21,
    },
    {
        name: 'Gustave Courbet',
        username: 'gus1819',
        location: 'Ornans, France',
        avatar: 'images/avatar-courbet.jpg',
        post: 'images/post-courbet.jpg',
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
    {
        name: 'Joseph Ducreux',
        username: 'jd1735',
        location: 'Paris, France',
        avatar: 'images/avatar-ducreux.jpg',
        post: 'images/post-ducreux.jpg',
        comment:
            'gm friends! which coin are YOU stacking up today?? post below and WAGMI!',
        likes: 152,
    },
];

const container = document.querySelector('.container');

const main = document.createElement('main');

function html(obj) {
    main.innerHTML += `
    <section>
        <div class="user-info">
            <img
                class="img-avatar"
                src="${obj.avatar}"
                alt="avatar"
            />
            <p class="inline-block">
                <span class="bold-text">${obj.name}</span>
                <br />${obj.location}
            </p>
        </div>
        <img
            class="img-post"
            src="${obj.post}"
            alt="post"
        />
        <div class="interaction">
            <img src="images/icon-heart.png" alt="like" />
            <img src="images/icon-comment.png" alt="comment" />
            <img src="images/icon-dm.png" alt="dm" />
        </div>
        <p class="bold-text"><span class="likes">${obj.likes}</span> likes</p>
        <p>
            <span class="bold-text">${obj.username}</span> ${obj.comment}
        </p>
    </section>
    `;
}

container.append(main);

posts.forEach((obj) => html(obj));
