document.addEventListener('DOMContentLoaded', () => {
	const loginForm = document.querySelector('#login');

	const handleRedirect = (event: Event) => {
		event.preventDefault();

		window.location.href = '/register.html';
	};

	loginForm.addEventListener('submit', handleRedirect);
})
