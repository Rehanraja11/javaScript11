// // Task: Practice chaining promises

// // 1. Create functions that return promises
// function getUser(id) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: id, name: `User${id}` });
//         }, 1000);
//     });
// }

// function getUserPosts(userId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, title: "First post", userId: userId },
//                 { id: 2, title: "Second post", userId: userId }
//             ]);
//         }, 800);
//     });
// }

// function getPostComments(postId) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve([
//                 { id: 1, text: "Great post!", postId: postId },
//                 { id: 2, text: "Thanks for sharing", postId: postId }
//             ]);
//         }, 600);
//     });
// }

// // 2. Chain the promises to get user -> posts -> comments
// getUser(2)
//     .then((user) => {
//         console.log("Got user:", user);
//         return getUserPosts(user.id);
//     })
//     .then((posts) => {
//         console.log("Got posts:", posts);
//         return getPostComments(posts[0].id);
//     })
//     .then((comments) => {
//         console.log("Got comments:", comments);
//     })
//     .catch((error) => {
//         console.log("Error in chain:", error);
//     });

