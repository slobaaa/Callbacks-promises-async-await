/*
var posts = [
    { title: 'Post One', body: 'This is post one'},
    { title: 'Post Two', body: 'This is post two'},
];

function getPosts() {
    setTimeout(function() {
        var output = '';
        posts.forEach(function(post, index) {
            output += '<li>' + post.title + '</li>';
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            posts.push(post);
            var error = false;
            if (!error) {
                resolve();
            } else {
                reject('Error: Someting went wrong');
            }
        }, 2000);
    });
}
*/

/*
createPost({ title: 'Post Three', body: 'This is post three' })
.then(getPosts) //ovo ce izvrsiti ako ode u resolve
.catch(err => console.log(err)); //ovo ce izvrsiti ako ode u reject
*/


/*
// Async / Await
async function init() {
    await createPost({ title: 'Post Three', body: 'This is post three' });
    getPosts();
}

init();
*/
/*
//Async / Await / Fetch
async function fetchUsers() {
   const res = await fetch('https://jsonplaceholder.typicode.com/users');
   const data = await res.json();
   console.log(data);
   
}
fetchUsers();
*/

/*
//Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => 
    setTimeout(resolve, 2000, 'Goodbye'));
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));
*/