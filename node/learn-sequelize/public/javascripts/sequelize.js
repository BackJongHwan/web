//when click name, loading comments
document.querySelectorAll('#user-list tr').forEach(function(el){
    el.addEventListener('click', function(){
        var id = el.querySelector('td').textContent;
        getComment(id);
    });
});

//user loading
function getUser(){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            var users = JSON.parse(xhr.responseText);
            console.log(users);
            var tbody = document.querySelector('#user-list tbody');
            tbody.innerHTML = '';
            users.map(function(user){
                var row = document.createElement('tr');
                row.addEventListener('click',function(){
                    getComment(user.id);
                });
                var td = document.createElement('td');
                td.textContent = user.id;
                row.appendChild(td);
                var td = document.createElement('td');
                td.textContent = user.name;
                row.appendChild(td);
                var td = document.createElement('td');
                td.textContent = user.age;
                row.appendChild(td);
                var td = document.createElement('td');
                td.textContent = user.married ? '기혼' : '미혼';
                row.appendChild(td);
                tbody.appendChild(row);
            });
        }else{
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/users');
    xhr.send();
}

//comment loading
function getComment(id){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            var comments = JSON.parse(xhr.responseText);
            var tbody = document.querySelector('#comment-list tbody');
            tbody.innerHTML = '';
            comments.map(function(comment){
                var row = document.createElement('tr');
                var td = document.createElement('td');
                td.textContent = comment.id;
                row.appendChild(td);
                var td = document.createElement('td');
                td.textContent = comment.user.name;
                row.appendChild(td);
                var td = document.createElement('td');
                td.textContent = comment.comment;
                row.appendChild(td);

                var eidt = document.createElement('button');
                eidt.textContent = 'update';
                eidt.addEventListener('click',  function(){
                    var newComment = prompt('바꿀 내용을 입력하세요');
                    if(!newComment){
                        return alert('내용을 반드시 입력하셔야 합니다');
                    }
                    var xhr = XMLHttpRequest();
                    xhr.onload = function(){
                        if(xhr.status === 200){
                            console.log(xhr.responseText);
                            getComment(id);
                        }else{
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('PATCH', '/comments/' + comment.id);
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify({comment: newComment}));
                });
                var remove = document.createElement('button');
                remove.textContent = 'delete';
                remove.addEventListener('click',function(){
                    var xhr = new XMLHttpRequest();
                    xhr.onload = function(){
                        if(xhr.status === 200){
                            console.log(xhr.responseText);
                            getComment(id);
                        }else{
                            console.error(xhr.responseText);
                        }
                    };
                    xhr.open('DELETE', '/comments/' + comment.id);
                    xhr.send();
                });
                td = document.createElement('td');
                td.appendChild(edit);
                row.appendChild(td);
                td = document.createElement('td');
                td.appendChild(remove);
                row.appendChild(td);
                tbody.appendChild(row);
            });
        }else{
            console.error(xhr.responseText);
        }
    };
    xhr.open('GET', '/comments/' + id);
    xhr.send();
}
//when user upload
document.getElementById('user-form').addEventListener('submit', function(e){
    e.preventDefault();
    var name = e.target.username.value;
    var age = e.target.age.value;
    var married = e.target.married.checked;
    if(!name){
        return alert('input name!');
    }
    if(!age){
        return alert('input age!');
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log(xhr.responseText);
            getUser();
        }
        else{
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/users');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({name: name, age: age, married: married}));
    e.target.user.value = '';
    e.target.age.value = '';
    e.target.married.checked = false;
});

//when comment uploading
document.getElementById('comment-form').addEventListener('submit', function(e){
    e.preventDefault();
    var id = e.target.userid.value;
    var comment = e.target.comment.vlaue;
    if(!id){
        return alert('input id!');
    }
    if(!comment){
        return alert('input comment!');
    }
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
        if(xhr.status === 200){
            console.log(xhr.responseText);
            getComment(id);
        }else{
            console.error(xhr.responseText);
        }
    };
    xhr.open('POST', '/comments');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({id: id, comment: comment}));
    e.target.userid.value = '';
    e.target.comment.value = '';
});