# Material UI makeStyles issue demonstration

This project demonstrates a bug that could be introduced to your code when you migrate from Material UI v4 to Material UI v5

## Article explaining this issue

(coming soon)

## How to reproduce

This pesky bug appeares **only on optimized production builds** because it's caused by code-splitting, css class names minification, and an issue introduced by the developer when using both v4 and v5 of MUI while migrating.

To reproduce, build the project using

```
yarn build
```

After that run

```
serve -s build
```

You can install serve using `npm install -g serve`. For more information see `serve` [documentation](https://www.npmjs.com/package/serve).

After that

1. open `http://localhost:5000` in a browser and navigate to the Profile page.

2. Hit Refresh (browser refresh)

3. See that the styles change in a weird way. CSS class names clash.

4. Navigate away and see styles changing again.

5. Navigate back to Profile page and see styles being properly applied.

6. Refresh again and see them broken again. CSS class names clash

## Fix for the bug:

The bug has been fixed in [this PR](https://github.com/kdkocev/mui-makestyles-issue-demo/pull/1)

---

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
