<h1>
photo-website
</h1>

## **利用網頁前端框架React製作的一個搜尋照片的網頁小專案**

### index.js

```jsx
import { BrowserRouter } from "react-router-dom";
```

```jsx
<BrowserRouter>
    <App />
 </BrowserRouter>
```

### app.js

```jsx
import {Switch , Route} from "react-router-dom";
```

```jsx
<Switch>
        <Route path = "/" exact>
          <Homepage />
        </Route>
        <Route path = "/about" exact>
          <About />
        </Route>
</Switch>
```


```jsx
*import* { Link } *from* "react-router-dom";

<nav>
            <ul>
                <li><Link to="/">Home</Link></li>
            </ul>
            <ul>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
```


## **Homepage.js**

使用 https://www.pexels.com/zh-tw/ 
內的API 來達成取得相片和搜尋相片的功能。

 const search = async (url) `// fetch data from pexei API`
 
 const morepicture = async ()  `// load more picture`

 useEffect((),[]) `// fetch data when the page Loads up`


### 透過Pexels網站 API 取得資料

```jsx
consts[(input , setInput)] = useState("");
```

```jsx
const intialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
```

```jsx
const searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
```


<br>

![](https://i.imgur.com/yHd5vEC.jpg)

<br>

![](https://i.imgur.com/YxquTDd.jpg)

<br>





## **About.js**


![](https://i.imgur.com/ZzwMkSf.png)


## **CSS**
**style/**
style.css 
footer.css 
nav.css 
picture.css


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

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

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


## **Reference**

https://www.udemy.com/course/html5-css3-z/learn/lecture/24587898#questions

https://www.pexels.com/zh-tw/api/documentation/#photos-show

https://www.npmjs.com/

https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi