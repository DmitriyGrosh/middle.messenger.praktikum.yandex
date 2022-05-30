document.addEventListener('DOMContentLoaded', () => {
	const loginForm = document.querySelector('#register');

	const handleRedirect = (event: Event) => {
		event.preventDefault();

		window.location.href = '/chat.html';
	};

	loginForm.addEventListener('submit', handleRedirect);
})

