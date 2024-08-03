async function getPosts() {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

async function displayPostsIntoCard() {
    try {
        const posts = await getPosts();
        const row = document.querySelector(".cards");

        row.innerHTML = "";

        for (const post of posts) {
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${post.id}: ${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                </div>
            `;
            row.appendChild(card);
        }
    } catch (error) {
        console.error("Error displaying posts:", error);
    }
}
getPosts()
    .then(displayPostsIntoCard)
    .catch(error => console.error("Overall error:", error));
