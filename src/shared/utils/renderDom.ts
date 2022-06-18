import Block from "./block";

const renderDom = (block: Block) => {
	const root = document.querySelector('#app');

	root!.innerHTML = '';
	root!.appendChild(block.getContent())
};

export default renderDom;
