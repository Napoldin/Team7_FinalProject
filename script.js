const clientId = ''; // Replace this
const redirectUri = 'http://localhost/Team7_FinalProject/homepage.html'; // Or your hosted callback
const scopes = ['identify'];

const loginButton = document.getElementById('login-btn');

loginButton.addEventListener('click', () => {
  const discordUrl = `https://discord.com/api/oauth2/authorize` +
    `?client_id=${clientId}` +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    `&response_type=code` +
    `&scope=${scopes.join('%20')}`;

  window.location.href = discordUrl;f
});
