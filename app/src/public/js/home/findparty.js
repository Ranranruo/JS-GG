// 게시글 목록을 로드
function loadPosts() {
    const postList = document.getElementById("post-list");
    postList.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("post_")) {
            const post = JSON.parse(localStorage.getItem(key));
            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${post.title}</strong><p>${post.content}</p>`;
            postList.appendChild(listItem);

            // 게시글을 10분 후에 삭제
            const expirationTime = 10 * 1000; // 10분을 밀리초로 변환
            const currentTime = new Date().getTime();
            const postTime = parseInt(key.split("_")[1]);
            if (currentTime - postTime >= expirationTime) {
                // 게시글이 만료되었으면 삭제
                localStorage.removeItem(key);
                listItem.remove();
            }
        }
    }
}

// 게시글 작성
document.getElementById("submit").addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (title && content) {
        const postId = "post_" + new Date().getTime();
        const post = { title, content };
        localStorage.setItem(postId, JSON.stringify(post));
        loadPosts();
        document.getElementById("title").value = "";
        document.getElementById("content").value = "";

        // 10분 후에 게시글 삭제
        setTimeout(() => {
            localStorage.removeItem(postId);
            loadPosts();
        }, 10 * 60 * 1000);
    }
});

// 초기 로드
loadPosts();
