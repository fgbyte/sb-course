import {
	getListTemplate,
	getOptionsArgTypes,
	getTemplate,
} from "../../../../helpers/templateHelpers";
import Avatar from "../../atoms/Avatar";
import styles from "./Avatar.module.css";
import { options } from "./constants";

const Template = getTemplate(Avatar, styles);
const ListTemplate = getListTemplate(Avatar, styles);

export default {
	title: "Atoms/Avatar",
	component: Avatar,
	tags: ["autodocs"],
	args: {
		src: "https://picsum.photos/id/1027/400/400",
	},
	argTypes: {
		size: getOptionsArgTypes(options.sizes),
	},
	parameters: {
		layout: "centered",
		__sb: { fd: "row", ai: "center" },
	},
};

//Story
export const Default = Template.bind({});

export const Sizes = ListTemplate.bind({});
Sizes.args = {
	items: options.sizes.map((size) => ({ size })),
};
