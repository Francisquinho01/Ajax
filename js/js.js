
const username = 'Francisquinho01';
const apiUrl = `https://api.github.com/users/${username}`;

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        document.getElementById('profile-avatar').src = data.avatar_url;
        document.getElementById('profile-name').textContent = data.name || 'Nome';
        document.getElementById('profile-username').textContent = `@${data.login}`;
        document.getElementById('repo-count').textContent = data.public_repos;
        document.getElementById('followers-count').textContent = data.followers;
        document.getElementById('following-count').textContent = data.following;
        document.getElementById('profile-link').href = data.html_url;
    })
    .catch(error => console.error('Erro ao carregar os dados do GitHub:', error));
