

### Form Tab

1. We have provided a starting `FormType` containing just a first and last name. Please add the following fields to this type:

	- Email: string
	- Phone Number: string
	- Developer Type: Web, iOS, Android, Backend, Other
	- Education Level: High School, Some College, Bachelor's, Master's, Doctorate, Other
	- Able to Relocate: boolean
	- Where do you see yourselve in 5 years: long string
	- Resumé: File

	All fields are required when filling in the form except the `Phone Number` or `Email` fields. For the `Phone Number` or `Email` fields, make sure at least one of these is provided when filling out the form.

2. Create a form that accepts the values from a `FormType` as input. Use proper components for each of the values in the `FormType` (ex: Textfield for `Email`, Checkbox for `Able to Relocate`). Use `material-ui` components and Material Design principles to build the form.

3. At the bottom of the form, add a `Submit` button and a `Clear` button.

	- The `Clear` button should ask the user if they are sure they want to clear their entries, then clear the form if they say yes.
	- The `Submit` button should validate all entries. If some fields are not valid, inform the user of that. If all fields are valid, dispatch the entry to the `redux` store. A basic reducer has been provided in which you can store the entries.

### Results Tab

1. Build a table using `react-virtualized` to show all of the results in the `redux` store. Lay out the table cell however you see fit, as long as the data is well organized.

2. When changing tabs from the form to the results tab, check to see if there are values in the form. If there are, warn the user before leaving the form. 

4. Allow for the Developer Type field to be able to accept multiple values.

5. Implement column sorting for various columns in the results table.

6. Store the entries in the browser so they can survive a refresh of the page.



## Available Scripts

In the project directory, you can run:

### `yarn analyze`

Analyzes your build with source-map-explorer.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Good Luck!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

