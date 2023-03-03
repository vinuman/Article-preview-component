const shareButton = document.querySelector('.material-symbols-outlined');
console.log(shareButton);
const share = document.querySelector('.share');
console.log(share);

shareButton.addEventListener('mouseover', showShareOptions);

function showShareOptions(){
   share.classList.toggle('show');
}

shareButton.addEventListener('click', showShareOptions);

function showShareOptions(){
   share.classList.toggle('show');
}

function hideShareOptions(){
    share.classList.remove('show');
}

window.addEventListener('click', hideShareOptions);

