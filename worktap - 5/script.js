let currentWorksButton = document.querySelectorAll('.currentWorks button');

currentWorksButton.forEach(el => {
    el.onmouseover = () => {
        el.style.background = '#1DBF73';
        el.style.color = '#F6FAFD';
        el.parentElement.style.boxShadow = '0px 16px 16px 0px rgba(34, 34, 34, 0.04)';
    }
    el.onmouseout = () => {
        el.style.background = 'none';
        el.style.color = '#1DBF73';
        el.parentElement.style.boxShadow = 'none';
    }
})