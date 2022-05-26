document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('#change-password-form');

	const handleSave = (event: Event) => {
		event.preventDefault();

		console.log('==========>сохранить');
	};

	form.addEventListener('submit', handleSave)
});
