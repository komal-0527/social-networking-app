let posts = JSON.parse(localStorage.getItem("posts")) || [
  {
    id: Date.now(),
    content: "Hello, this is my first post!",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fproduct%2F&psig=AOvVaw0RGkvU_FKqMYKy4bw6FYcl&ust=1751149972561000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIC4sKjUko4DFQAAAAAdAAAAABAE",
    likes: 5,
    dislikes: 0,
    comments: ["Nice post!", "Welcome!"]
  },
  {
    id: Date.now() + 1,
    content: "Reading is the key to success.",
    image: "https://img.freepik.com/free-photo/foundation-bottles-advertising-arrangement_23-2149511225.jpg?semt=ais_hybrid&w=740",
    likes: 8,
    dislikes: 0,
    comments: ["Absolutely!", "I love reading too."]
  },
  {
    id: Date.now() + 2,
    content: "Just finished a great book. Highly recommend it!",
    image: "https://plus.unsplash.com/premium_photo-1661769750859-64b5f1539aa8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww",
    likes: 12,
    dislikes: 0,
    comments: ["What's the title?", "Share more books!"]
  }
];
