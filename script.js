const postsContainer = document.getElementById("postsContainer");

function saveToLocalStorage() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function renderPosts() {
  postsContainer.innerHTML = "";
  posts.forEach((post) => {
    postsContainer.innerHTML += `
      <div class="post">
        <p contenteditable="false" id="content-${post.id}">${post.content}</p>
        <img src="${post.image}" alt="Post Image" id="image-${post.id}">

        <input type="text" id="editImage-${post.id}" value="${post.image}" style="display: none; width: 100%; margin: 5px 0;">

        <div class="post-actions">
          <button onclick="likePost(${post.id})"><i class="ri-thumb-up-fill"></i> ${post.likes}</button>
          <button onclick="dislikePost(${post.id})"><i class="ri-thumb-down-fill"></i> ${post.dislikes}</button>
          <button onclick="editPost(${post.id})" id="editBtn-${post.id}"><i class="ri-edit-line"></i> Edit</button>
          <button onclick="deletePost(${post.id})"><i class="ri-delete-bin-6-line"></i> Delete</button>
        </div>

        <div class="comments">
          <h4>Comments</h4>
          ${post.comments.map((c, index) => `
            <div class="comment-item">
              <span id="commentText-${post.id}-${index}">${c}</span>
              <input type="text" id="editCommentInput-${post.id}-${index}" value="${c}" style="display: none;">

              <div class="comment-actions">
                <button onclick="toggleEditComment(${post.id}, ${index})"><i class="ri-edit-line"></i></button>
                <button onclick="deleteComment(${post.id}, ${index})"><i class="ri-delete-bin-line"></i></button>
              </div>
            </div>
          `).join("")}

          <div class="comment-input">
            <input type="text" placeholder="Add a comment..." id="comment-${post.id}">
            <button onclick="addComment(${post.id})"><i class="ri-send-plane-fill"></i></button>
          </div>
        </div>
      </div>
    `;
  });
}

function addPost() {
  const content = document.getElementById("postContent").value.trim();
  const image = document.getElementById("postImage").value.trim() || "images/1.png";

  if (content === "") return alert("Post content cannot be empty!");

  posts.unshift({
    id: Date.now(),
    content,
    image,
    likes: 0,
    dislikes: 0,
    comments: []
  });

  saveToLocalStorage();
  document.getElementById("postContent").value = "";
  document.getElementById("postImage").value = "";
  renderPosts();
}

function deletePost(id) {
  if (confirm("Delete this post?")) {
    posts = posts.filter((p) => p.id !== id);
    saveToLocalStorage();
    renderPosts();
  }
}

function editPost(id) {
  const contentP = document.getElementById(`content-${id}`);
  const imageInput = document.getElementById(`editImage-${id}`);
  const editBtn = document.getElementById(`editBtn-${id}`);

  const isEditing = contentP.getAttribute("contenteditable") === "true";

  if (!isEditing) {
    contentP.setAttribute("contenteditable", "true");
    imageInput.style.display = "block";
    editBtn.innerHTML = `<i class="ri-check-line"></i> Save`;
    contentP.focus();
  } else {
    contentP.setAttribute("contenteditable", "false");
    imageInput.style.display = "none";
    editBtn.innerHTML = `<i class="ri-edit-line"></i> Edit`;

    const updatedContent = contentP.innerText.trim();
    const updatedImage = imageInput.value.trim();

    const post = posts.find((p) => p.id === id);
    if (post) {
      post.content = updatedContent;
      post.image = updatedImage || "images/1.png";
    }

    saveToLocalStorage();
    renderPosts();
  }
}

function likePost(id) {
  const post = posts.find((p) => p.id === id);
  if (post) post.likes++;
  saveToLocalStorage();
  renderPosts();
}

function dislikePost(id) {
  const post = posts.find((p) => p.id === id);
  if (post) post.dislikes++;
  saveToLocalStorage();
  renderPosts();
}

function addComment(postId) {
  const input = document.getElementById(`comment-${postId}`);
  const comment = input.value.trim();
  if (comment === "") return;

  const post = posts.find((p) => p.id === postId);
  if (post) post.comments.push(comment);

  saveToLocalStorage();
  input.value = "";
  renderPosts();
}

function toggleEditComment(postId, commentIndex) {
  const textSpan = document.getElementById(`commentText-${postId}-${commentIndex}`);
  const inputField = document.getElementById(`editCommentInput-${postId}-${commentIndex}`);

  const isEditing = inputField.style.display === "inline-block";

  if (!isEditing) {
    inputField.style.display = "inline-block";
    textSpan.style.display = "none";
    inputField.focus();
  } else {
    const updatedComment = inputField.value.trim();
    if (updatedComment === "") return alert("Comment cannot be empty!");

    const post = posts.find((p) => p.id === postId);
    if (post) {
      post.comments[commentIndex] = updatedComment;
      saveToLocalStorage();
      renderPosts();
    }
  }
}

function deleteComment(postId, commentIndex) {
  if (confirm("Delete this comment?")) {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      post.comments.splice(commentIndex, 1);
      saveToLocalStorage();
      renderPosts();
    }
  }
}

renderPosts();
