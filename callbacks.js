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

function createPost(post, callback) {
    setTimeout(function() {
        posts.push(post);
        callback();
    }, 2000);
}

// getPosts(); //posle ovoga ce posle 1 sec izbaciti Post One Post Two

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts); //izlaz je Post one, post two Post three
//iznad fakticki dodaje post Three sa tim podacima i onda ide callback sto je fakticki getPosts()