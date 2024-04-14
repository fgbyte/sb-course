import { getTemplate } from "../../../../helpers/templateHelpers";
import Component from "../../atomic/Component";
import styles from "./Component.module.css";

const Template = getTemplate(Component, styles);

export default {
	title: "Atomic/Component",
	component: Component,
	tags: ["autodocs"],
};

//Story
export const Default = Template.bind({});
