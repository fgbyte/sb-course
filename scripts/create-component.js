import fs from "bun:fs/promises";
import path from "bun:path";
import enquirer from "enquirer";
import toCapitalize from "../utils/toCapitalize";
import toKebabCase from "../utils/toKebabCase";
import toPascalCase from "../utils/toPascalCase";

const ATOMIC_DESIGN_TYPES = {
	atom: "atoms",
	molecule: "molecules",
	layout: "layout",
};
const COMPONENT_TEMPLATE_PATH = "templates/component";

//Cambiar según el framework 👇
const MY_PATH = "src/components";

function createComponentFolder(componentPath) {
	return fs.mkdir(componentPath, { recursive: true });
}

function readComponentFile(componentTemplate) {
	return fs.readFile(
		path.join(__dirname, `../${COMPONENT_TEMPLATE_PATH}/${componentTemplate}`),
		"utf8",
	);
}

function replaceComponentFile(
	componentIsStory,
	componentFile,
	componentName,
	mappedType,
) {
	if (!componentIsStory) {
		return componentFile
			.replace(/component/g, toKebabCase(componentName))
			.replace(/Component/g, componentName);
	}
	return componentFile
		.replace(/Component/g, componentName)
		.replace(/atomic/g, mappedType)
		.replace(/Atomic/g, toCapitalize(mappedType));
}

function createComponentFile(componentPath, replacedComponentFile) {
	return fs.writeFile(componentPath, replacedComponentFile, "utf8");
}

async function createComponent(componentTemplates, type, componentName) {
	const mappedType = ATOMIC_DESIGN_TYPES[type];
	const atomicComponentPath = path.join(
		__dirname,
		`../${MY_PATH}/${mappedType}/${componentName}`,
	);

	try {
		await createComponentFolder(atomicComponentPath);
		console.log("🔧 component folder created!");

		for (const componentTemplate of componentTemplates) {
			const componentTemplateRenamed = componentTemplate.replace(
				/Component/g,
				toPascalCase(componentName),
			);
			const componentIsStory = componentTemplate.search("stories") !== -1;

			const componentFile = await readComponentFile(componentTemplate);
			const replacedComponentFile = await replaceComponentFile(
				componentIsStory,
				componentFile,
				componentName,
				mappedType,
			);
			await createComponentFile(
				path.join(atomicComponentPath, componentTemplateRenamed),
				replacedComponentFile,
			);
			console.log(`🔧 component file ${componentTemplateRenamed} created!`);
		}
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

async function getPromptParams() {
	const { type } = await enquirer.prompt({
		type: "select",
		name: "type",
		message: "What kind of component would you like to create?",
		choices: ["atom", "molecule", "layout"],
		initial: "atom",
	});

	const { componentName } = await enquirer.prompt({
		type: "input",
		name: "componentName",
		message: "What is the name of the new component?",
		validate(input) {
			if (!this.skipped && input.trim().length === 0 && input.trim() !== ",") {
				return "Please, tell us what is the name of the new component. Try again!";
			}
			return true;
		},
	});

	try {
		const componentTemplates = await fs.readdir(
			path.join(__dirname, `../${COMPONENT_TEMPLATE_PATH}`),
		);

		if (componentTemplates.length !== 0) {
			createComponent(componentTemplates, type, toPascalCase(componentName));
		} else {
			throw new Error(
				`There are not template files to create the component: ${toPascalCase(
					componentName,
				)}`,
			);
		}
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
}

getPromptParams();
