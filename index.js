function addingEventListener() {
    let input = document.getElementById('input');
    input.addEventListener('click', function(event){
        alert('I was clicked!');
    });
}

let input = document.getElementById('input');

addingEventListener();