const btn = document.getElementById('enter');   
const btnlabel = document.getElementsByClassName('label-enter')[0];
const textAdd = document.getElementById('comment-write');
const commentList = document.getElementsByClassName('comments')[0]; 


btn.addEventListener("click", getText);
function getText(e) {    
    const commentAdd = document.createElement('div');
    const commentId = document.createElement('a');
    const commentText = document.createElement('span');
    let text = textAdd.value;
    commentId.innerHTML = 'danbiicho';

    commentText.append(' ' + text);
    textAdd.append(commentText);
    commentAdd.append(commentId);
    commentAdd.append(commentText);   
    commentList.append(commentAdd);  
    
    textAdd.value = "";
  
}   

document.addEventListener('keydown', function (e) { 

    if(e.keyCode === 13) {
        const commentAdd = document.createElement('div');
        const commentId = document.createElement('a');
        const commentText = document.createElement('span');
        const text = textAdd.value;
        commentId.innerHTML = 'danbiicho ';

        commentText.append(' ' + text);
        textAdd.append(commentText);
        commentAdd.append(commentId);
        commentAdd.append(commentText);   
        commentList.append(commentAdd);

        textAdd.value = "";
    }
    
    if(textAdd.value !== "") {        
        document.getElementsByClassName('label-enter')[0].style.color = "#0095F6";        
    } else {
        document.getElementsByClassName('label-enter')[0].style.color = "#C8E0FA";
    }
});

                