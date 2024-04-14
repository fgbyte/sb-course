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
		width: { control: "number" },
		height: { control: "number" },
	},
};

//Story
export const Default = Template.bind({});

export const Rounded = Template.bind({});
Rounded.args = {
	isRounded: true,
};

export const Height = Template.bind({});
Height.args = {
	height: 400,
	//add another args to change the story
	src: "https://picsum.photos/id/1035/400/400",
};

export const Width = Template.bind({});
Width.args = {
	width: 500,
	src: "https://picsum.photos/id/1036/400/400",
};
