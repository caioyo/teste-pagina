function loadWorks() {
    const list = document.getElementById('work-list');
    list.innerHTML = '';
    const works = JSON.parse(localStorage.getItem('works') || '[]');
    works.forEach((work, index) => {
        const li = document.createElement('li');
        li.textContent = `${work.date} - ${work.title}: ${work.description}`;
        list.appendChild(li);
    });
}

document.getElementById('work-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const works = JSON.parse(localStorage.getItem('works') || '[]');
    works.push({ title, description, date });
    localStorage.setItem('works', JSON.stringify(works));
    this.reset();
    loadWorks();
});

window.addEventListener('load', loadWorks);
