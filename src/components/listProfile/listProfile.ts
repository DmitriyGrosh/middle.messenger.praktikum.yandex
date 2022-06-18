import { Block } from "../../shared/utils";

import "./listProfile.scss";

interface IListProfile {}

class ListProfile extends Block<ListProfile> {

	protected render(): string {
		// language=hbs
		return `
		<div class="list-profile">
        <div class="screen__header">
            <div class="screen__title">
                {{title}}
            </div>
        </div>
        <div class="screen__content" data-layout=1></div>
		</div>
		`;
	};
}

export default ListProfile;
