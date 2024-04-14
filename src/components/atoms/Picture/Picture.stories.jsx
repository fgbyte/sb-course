import { getTemplate } from "../../../../helpers/templateHelpers";
import Picture from "../../atoms/Picture";
import styles from "./Picture.module.css";

const Template = getTemplate(Picture, styles);

export default {
	title: "Atoms/Picture",
	component: Picture,
	tags: ["autodocs"],
	args: {
		src: "https://picsum.photos/id/1033/400/400",
		width: 200,
	},
	argTypes: {
		width: { control: "number " },
		height: { control: "number " },
	},
};

//Story
export const Default = Template.bind({});

export const Rounded = Template.bind({});
Rounded.args = {
	isRounded: true,
};
