import Block from './block';

const renderDom = (block: Block, id: string) => {
  const root = document.getElementById(id);

	root!.innerHTML = '';
	root!.appendChild(block.getContent());
};

export default renderDom;
