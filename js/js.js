const username = 'Francisquinho01';
const apiUrl = `https://api.github.com/users/${username}`;

async function fetchGitHubData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

    
        document.getElementById('profile-avatar').src = data.avatar_url;
        document.getElementById('profile-name').textContent = data.name || 'Nome';
        document.getElementById('profile-username').textContent = `@${data.login}`;
        document.getElementById('repo-count').textContent = data.public_repos;
        document.getElementById('followers-count').textContent = data.followers;
        document.getElementById('following-count').textContent = data.following;
        document.getElementById('profile-link').href = data.html_url;
    } catch (error) {
        console.error('Erro ao carregar os dados do GitHub:', error);
     
        document.getElementById('profile-name').textContent = 'Poxa Vida Não conseguimos carregar esses dados';
        document.getElementById('profile-username').textContent = '';
    }
}

fetchGitHubData();
