// yarn add --dev babel-jest @babel/core @babel/preset-env
// yarn add --dev @babel/preset-typescript
// yarn add --dev @types/jest
//
// https://jestjs.io/docs/en/getting-started#using-typescript
// prettier-ignore
module.exports = {
	presets: [
		["@babel/preset-env", { targets: { node: "current" } }],
		"@babel/preset-typescript",
	],
}
