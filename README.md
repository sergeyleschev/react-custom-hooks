
# React Custom Hooks

React Hooks are a feature introduced in React version 16.8 that revolutionized the way developers write and manage stateful logic in functional components. Previously, stateful logic could only be implemented in class components using lifecycle methods. However, with React Hooks, developers can now utilize state and other React features directly in functional components. Hooks provide a way to easily reuse stateful logic across multiple components, improving code reusability and reducing complexity. They enable developers to break down complex components into smaller, more manageable pieces, resulting in cleaner and more maintainable code. Hooks, such as useState and useEffect, allow developers to manage component state and handle side effects effortlessly. With their simplicity and flexibility, React Hooks have become an essential tool for building modern, efficient, and scalable React applications.

React custom hooks are reusable functions that allow developers to abstract and encapsulate complex logic in a reusable manner. Custom hooks are created by combining existing React hooks or other custom hooks. They enable developers to extract common logic from components and share it across different parts of an application. Custom hooks follow a naming convention of using the "use" prefix, which allows them to leverage the benefits of React's rules of hooks. By creating custom hooks, developers can modularize and organize their code, making it more readable, maintainable, and testable. These hooks can encapsulate any kind of logic, such as API calls, form handling, state management, or even abstracting external libraries. React custom hooks are a powerful tool that promotes code reusability and reduces duplication, making development more efficient and scalable.

React Custom Hooks @ S. Leschev. Google Engineering Level: L6+

- [`useArray`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useArray/useArray.js)
- [`useAsync`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useAsync/useAsync.js)
- [`useClickOutside`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useClickOutside/useClickOutside.js)
- [`useCookie`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useCookie/useCookie.js)
- [`useCopyToClipboard`](https://github.com/sergeyleschev/react-custom-hooks/tree/main/src/hooks/useCopyToClipboard)
- [`useDarkMode`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDarkMode/useDarkMode.js)
- [`useDebounce`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDebounce/useDebounce.js)
- [`useDebugInformation`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDebugInformation/useDebugInformation.js)
- [`useDeepCompareEffect`](https://github.com/sergeyleschev/react-custom-hooks/tree/main/src/hooks/useDeepCompareEffect)
- [`useEffectOnce`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useEffectOnce/useEffectOnce.js)
- [`useEventListener`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useEventListener/useEventListener.js)
- [`useFetch`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useFetch/useFetch.js)
- [`useGeolocation`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useGeolocation/useGeolocation.js)
- [`useHover`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useHover/useHover.js)
- [`useLongPress`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useLongPress.js/useLongPress.js)
- [`useMediaQuery`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useMediaQuery/useMediaQuery.js)
- [`useOnlineStatus`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useOnlineStatus/useOnlineStatus.js)
- [`useOnScreen`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useOnScreen/useOnScreen.js)
- [`usePrevious`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/usePrevious/usePrevious.js)
- [`useRenderCount`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useRenderCount/useRenderCount.js)
- [`useScript`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useScript/useScript.js)
- [`useStateWithHistory`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStateWithHistory/useStateWithHistory.js)
- [`useStateWithValidation`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStateWithValidation/useStateWithValidation.js)
- [`useStorage`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStorage/useStorage.js)
- [`useTimeout`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useTimeout/useTimeout.js)
- [`useToggle`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useToggle/useToggle.js)
- [`useTranslation`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useTranslation/useTranslation.js)
- [`useUpdateEffect`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useUpdateEffect/useUpdateEffect.js)
- [`useWindowSize`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useWindowSize/useWindowSize.js)


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# 🏆 Awards
### Ranking #Dev: Global TOP 200 ([Certificate](https://leetcode.com/sergeyleschev/))
<a href="https://leetcode.com/sergeyleschev/"><img src="https://github.com/sergeyleschev/sergeyleschev/blob/main/leetcode-ranking.png?raw=true" alt="drawing" width="410"/></a>

<a href="https://leetcode.com/sergeyleschev/"><img src="https://github.com/sergeyleschev/sergeyleschev/blob/main/leetcode-medals.png?raw=true" alt="drawing" width="410"/></a>
