import {
	getListTemplate,
	getOptionsArgTypes,
	getTemplate,
} from "../../../../helpers/templateHelpers";
import Card from "./Card";
import styles from "./Card.module.css";
import { options } from "./constants";

const Template = getTemplate(Card, styles);
const ListTemplate = getListTemplate(Card, styles);

export default {
	title: "Molecules/Card",
	component: Card,
	tags: ["autodocs"],
	args: {
		children: "Im a card",
	},
	//** Arg Types */
	argTypes: {
		color: getOptionsArgTypes(options.colors),
		size: getOptionsArgTypes(options.sizes),
	},
};

//** Stories
export const Primary = {
	args: {},
};

export const Secondary = {
	args: {
		color: "secondary",
	},
};

//**Templates using Helpers

//Pintan 1 por Story
export const Clickable = Template.bind({});
Clickable.args = {
	isClickable: true,
};

export const Dragable = Template.bind({});
Dragable.args = {
	isDragable: true,
};

//Pintan 2
export const Colors = ListTemplate.bind({});
Colors.args = {
	items: options.colors.map((color) => ({ color })),
};

export const Sizes = ListTemplate.bind({});
Sizes.args = {
	items: options.sizes.map((size) => ({ size })),
};
