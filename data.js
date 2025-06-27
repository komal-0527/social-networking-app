let posts = JSON.parse(localStorage.getItem("posts")) || [
  {
    id: Date.now(),
    content: "Hello, this is my first post!",
    image: "1.png",
    likes: 5,
    dislikes: 0,
    comments: ["Nice post!", "Welcome!"]
  },
  {
    id: Date.now() + 1,
    content: "Reading is the key to success.",
    image: "3.png",
    likes: 8,
    dislikes: 0,
    comments: ["Absolutely!", "I love reading too."]
  },
  {
    id: Date.now() + 2,
    content: "Just finished a great book. Highly recommend it!",
    image: "5.png",
    likes: 12,
    dislikes: 0,
    comments: ["What's the title?", "Share more books!"]
  }
];
