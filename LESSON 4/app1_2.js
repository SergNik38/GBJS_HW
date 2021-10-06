'use strict'
// Using es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
}

let postObj = new Post('Jack', 'text1', 1990);
console.log(postObj.text);
postObj.edit('edited text');
console.log(postObj.text);


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
}


let attachedpostObj = new AttachedPost('John', 'some text', 2000);

console.log(attachedpostObj.highlighted);
console.log(attachedpostObj.text);
attachedpostObj.makeTextHighlighted();
attachedpostObj.edit('edited some text');
console.log(attachedpostObj.text);
console.log(attachedpostObj.highlighted);

// using es6

class Post2 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit = function (text) {
        this.text = text;
    }
};

let postObj2 = new Post2('Jack', 'text1', 1990);
console.log(postObj2.text);
postObj2.edit('edited text');
console.log(postObj2.text);


class AttachedPost2 extends Post2 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }
    makeTextHighlighted = function () {
        this.highlighted = true;
    }
};


let attachedpostObj2 = new AttachedPost2('John', 'some text', 2000);

console.log(attachedpostObj2.highlighted);
console.log(attachedpostObj2.text);
attachedpostObj2.makeTextHighlighted();
attachedpostObj2.edit('edited some text');
console.log(attachedpostObj2.text);
console.log(attachedpostObj2.highlighted);
