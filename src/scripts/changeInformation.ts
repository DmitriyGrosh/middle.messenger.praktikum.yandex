document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('#change-information-form');
	const avatar = document.querySelector('.avatar-hover');

	const handleSave = (event: Event) => {
		event.preventDefault();

		console.log('==========>сохранить');
	};

	avatar.addEventListener('click', () => console.log('==========>111', 111));
	form.addEventListener('submit', handleSave)
});
