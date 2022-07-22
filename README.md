# Countdown

## Improved countdown
The below component was designed to count down the days until our CTO's birthday, but it still needs some work. How can you make the implementation better?
**Answer: I will convert the class to functional component. Hooks make React so much better because you have simpler code that implements similar functionalities faster and more effectively. Also, it would be nice to make the countdown dynamic with the current date. JavaScript is not great enough to handle native date functionality, concerning our current needs. I have 2 options for libraries to do this: momentjs and date-fns. I use date-fns to avoid bloating up the application as it doesn't come with a huge library.

**Do a critique:** The current implementation isn't perfect. How could it be improved?
**Answer: React is an awesome technology that comes with modern packages which we should use for Dynamic birthday, Semantic html to make the HTML more comprehensible by better defining the different sections and layout of web pages, To improve the user experience I tried to make the an easy app that serves the purpose by not overloading with content, I deleted comma in the app jsx, deleted unused files.

* Pick an area of improvement to implement.
**Answer: Using latest and easier react functionalities with hooks.

* What would happen to the current code if the date were changed, the page layout was changed or the format was changed?
**Answer: If the format is changed (ex: dd/mm/yy) the countdown does not work. The layout has some level of adaptation, the header is always at least 100px high and can be taller depending on the size of the screen. The title 'Countdown' has relative size so it is dynamic. The text inside span is always the same size.

* Does the current implementation follow best practices for HTML, CSS, JS and React?
**Answer:  There could be some improvements: using semantic html, deleting unused / unnecessary files and classnames, deleting the comma in app component.
**Spice it up:** Let's be honest, this countdown could be a whole lot more exciting.

* What could you do to create a greater sense of urgency?
**Answer: I used a purple color to give a calm effect since the supposed birthday is far, A red color would be used when the date is closer. I also added some confetti to the page to indicate a celebration. Another good idea could be to send push notifications via email to the team members so that they remember this important event.

* How would you make this countdown more aesthetically pleasing?
**Answer:  I added some confetti to the page to indicate a celebration and beautify the page as well asmake it more interesting. I tried to connect with the user person, Mr Eric Lee on linkedin to get to know about him and create something that will be aesthetically pleasing to him. Knowing his real birthday would have been a plus. Generally, if I was given more time, I would use the landing page of LFL as inspiration. Use their colors, font size, font family, etc.

* Trust your design instincts, and explain how your design choices impact the user experience
**I connected and read up on Mr Lee. I added a popular saying of his and I believe the web app in general would make him feel special, considering he's the main user persona, he would feel the support from his team and be more hyped about his birthday!

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
