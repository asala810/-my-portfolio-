let themeToggler = document.getElementById('theme-toggler');

themeToggler.onclick = () => {
    themeToggler.classList.toggle('fa-moon');
    if(themeToggler.classList.contains('fa-moon')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
};