
# S.Leschev: React Custom Hooks
### Supercharge Your Projects with My Custom Hooks

In this repository, we dive into the world of custom React hooks and explore the incredible potential they hold for supercharging your work projects. With over 20 carefully crafted hooks at your disposal, I personally utilize these hooks in my own work projects, and now I'm excited to share them with you. From enhancing functionality to streamlining workflows, these custom hooks are designed to empower developers and deliver user-friendly experiences. Join us on this journey as we unleash the power of these 20+ hooks and unlock new levels of productivity and innovation in your React projects.

React Hooks are a feature introduced in React version 16.8 that revolutionized the way developers write and manage stateful logic in functional components. Previously, stateful logic could only be implemented in class components using lifecycle methods. However, with React Hooks, developers can now utilize state and other React features directly in functional components. Hooks provide a way to easily reuse stateful logic across multiple components, improving code reusability and reducing complexity. They enable developers to break down complex components into smaller, more manageable pieces, resulting in cleaner and more maintainable code. Hooks, such as useState and useEffect, allow developers to manage component state and handle side effects effortlessly. With their simplicity and flexibility, React Hooks have become an essential tool for building modern, efficient, and scalable React applications.

React custom hooks are reusable functions that allow developers to abstract and encapsulate complex logic in a reusable manner. Custom hooks are created by combining existing React hooks or other custom hooks. They enable developers to extract common logic from components and share it across different parts of an application. Custom hooks follow a naming convention of using the "use" prefix, which allows them to leverage the benefits of React's rules of hooks. By creating custom hooks, developers can modularize and organize their code, making it more readable, maintainable, and testable. These hooks can encapsulate any kind of logic, such as API calls, form handling, state management, or even abstracting external libraries. React custom hooks are a powerful tool that promotes code reusability and reduces duplication, making development more efficient and scalable.

React Custom Hooks @ 2023, S. Leschev. Google Engineering Level: L6+

- [`useArray`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useArray/useArray.js)
- [`useAsync`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useAsync/useAsync.js)
- [`useClickOutside`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useClickOutside/useClickOutside.js)
- [`useCookie`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useCookie/useCookie.js)
- [`useCopyToClipboard`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useCopyToClipboard/useCopyToClipboard.js)
- [`useDarkMode`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDarkMode/useDarkMode.js)
- [`useDebounce`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDebounce/useDebounce.js)
- [`useDebugInformation`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDebugInformation/useDebugInformation.js)
- [`useDeepCompareEffect`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDeepCompareEffect/useDeepCompareEffect.js)
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

<br />

## 1. [`useArray`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useArray/useArray.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useArray/useArray.js)

```javascript
import { useState } from "react"

export default function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue)

    function push(element) {
        setArray(a => [...a, element])
    }

    function filter(callback) {
        setArray(a => a.filter(callback))
    }

    function update(index, newElement) {
        setArray(a => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ])
    }

    function remove(index) {
        setArray(a => [...a.slice(0, index), ...a.slice(index + 1, a.length)])
    }

    function clear() {
        setArray([])
    }

    return { array, set: setArray, push, filter, update, remove, clear }
}
```

The useArray hook utilizes the useState hook from React to initialize and manage the array state. It returns an object with the following functions:

- push(element): Adds the specified element to the array.
- filter(callback): Filters the array based on the provided callback function, removing elements that don't satisfy the condition.
- update(index, newElement): Replaces the element at the specified index with the newElement.
- remove(index): Removes the element at the specified index from the array.
- clear(): Clears the array, setting it to an empty array.

The advantages of using this custom hook are twofold: it simplifies the management of array states and provides a cleaner and more readable code structure. With the useArray hook, you can easily add, update, remove, filter, and clear elements in an array without dealing with complex logic.

```javascript
import useArray from "./useArray"

export default function ArrayComponent() {
    const { array, set, push, remove, filter, update, clear } = useArray([
        1, 2, 3, 4, 5, 6,
    ])

    return (
        <div>
            <div>{array.join(", ")}</div>
            <button onClick={() => push(7)}>Add 7</button>
            <button onClick={() => update(1, 9)}>Change Second Element To 9</button>
            <button onClick={() => remove(1)}>Remove Second Element</button>
            <button onClick={() => filter(n => n < 3)}>
                Keep Numbers Less Than 4
            </button>
            <button onClick={() => set([1, 2])}>Set To 1, 2</button>
            <button onClick={clear}>Clear</button>
        </div>
    )
}
```

<br />

## 2. [`useAsync`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useAsync/useAsync.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useAsync/useAsync.js)

```javascript
import { useCallback, useEffect, useState } from "react"

export default function useAsync(callback, dependencies = []) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const callbackMemoized = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)
        callback()
            .then(setValue)
            .catch(setError)
            .finally(() => setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemoized()
    }, [callbackMemoized])

    return { loading, error, value }
}
```

The useAsync hook takes in a callback function that performs the asynchronous operation and an optional array of dependencies. It returns an object with three properties: loading, error, and value. The loading property indicates whether the operation is currently in progress, while the error property holds any error messages encountered during the process. Finally, the value property contains the resolved value of the asynchronous operation.

One of the significant advantages of useAsync is its ability to memoize the callback function using useCallback. This ensures that the callback is only recreated when the dependencies change, preventing unnecessary re-renders and optimizing performance. Additionally, the hook employs the useState and useEffect hooks to manage the loading state and invoke the memoized callback function when necessary.

UseAsync can be employed in a wide range of scenarios. Whether you're fetching data from an API, performing computations, or handling form submissions, this custom hook simplifies the management of asynchronous operations throughout your React components. Its flexibility and ease of use make it a valuable addition to any React project.

By utilizing useAsync, you can streamline your codebase, enhance reusability, and maintain a consistent and reliable user experience. Give it a try in your next React project and witness the power of simplified asynchronous operations.

```javascript
import useAsync from "./useAsync"

export default function AsyncComponent() {
    const { loading, error, value } = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = false
            setTimeout(() => {
                success ? resolve("Hi") : reject("Error")
            }, 1000)
        })
    })

    return (
        <div>
            <div>Loading: {loading.toString()}</div>
            <div>{error}</div>
            <div>{value}</div>
        </div>
    )
}
```
<br />

## 3. [`useClickOutside`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useClickOutside/useClickOutside.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useClickOutside/useClickOutside.js)

```javascript
import useEventListener from "../useEventListener/useEventListener"

export default function useClickOutside(ref, cb) {
    useEventListener("click", e => {
        if (ref.current == null || ref.current.contains(e.target)) return
        cb(e)
    }, document)
}
```

The useClickOutside hook is designed to simplify the process of detecting clicks outside a specified component. By utilizing the useEventListener hook, it listens for click events on the document level, allowing you to trigger a callback function when a click occurs outside the provided component's reference.

One of the main advantages of useClickOutside is its ease of use. Simply import the hook into your component and pass the desired component's reference and a callback function. The hook takes care of the event listener setup and cleanup, saving you time and effort. Plus, it works seamlessly with functional components using the useState and useRef hooks.

The potential applications for useClickOutside are endless. It is particularly useful when implementing modal windows, dropdown menus, or any element that should be closed when a user interacts with anything outside of it. By incorporating useClickOutside, you can enhance the user experience by providing intuitive and efficient interactions.

To see useClickOutside in action, take a look at the example above. In this case, the ClickOutsideComponent utilizes the hook to toggle the visibility of a modal window. When the user clicks outside the modal, the provided callback function sets the open state to false, closing the modal. This way, the component offers a sleek and user-friendly way to manage the modal's visibility.

```javascript
import { useRef, useState } from "react"
import useClickOutside from "./useClickOutside"

export default function ClickOutsideComponent() {
    const [open, setOpen] = useState(false)
    const modalRef = useRef()

    useClickOutside(modalRef, () => {
        if (open) setOpen(false)
    })

    return (
        <>
            <button onClick={() => setOpen(true)}>Open</button>
            <div
                ref={modalRef}
                style={{
                    display: open ? "block" : "none",
                    backgroundColor: "blue",
                    color: "white",
                    width: "100px",
                    height: "100px",
                    position: "absolute",
                    top: "calc(50% - 50px)",
                    left: "calc(50% - 50px)",
                }}
            >
                <span>Modal</span>
            </div>
        </>
    )
}
```

<br />

## 4. [`useCookie`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useCookie/useCookie.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useCookie/useCookie.js) 

```javascript
import { useState, useCallback } from "react"
import Cookies from "js-cookie"

export default function useCookie(name, defaultValue) {
    const [value, setValue] = useState(() => {
        const cookie = Cookies.get(name)
        if (cookie) return cookie
        Cookies.set(name, defaultValue)
        return defaultValue
    })

    const updateCookie = useCallback(
        (newValue, options) => {
            Cookies.set(name, newValue, options)
            setValue(newValue)
        },
        [name]
    )

    const deleteCookie = useCallback(() => {
        Cookies.remove(name)
        setValue(null)
    }, [name])

    return [value, updateCookie, deleteCookie]
}
```

The useCookie hook allows you to effortlessly handle cookies by providing a concise interface. Upon initialization, useCookie retrieves the cookie value with the specified name. If the cookie exists, it returns its value; otherwise, it sets the cookie to the default value provided. This ensures a seamless experience for your users, as the desired data is readily available.

One of the key advantages of this custom hook is the ability to update the cookie value. The updateCookie function, returned by useCookie, enables you to modify the value of the cookie. By invoking this function with a new value and optional options, such as expiration or path, you can instantly update the cookie. Additionally, the hook conveniently updates the state, keeping your application in sync with the modified cookie.

In scenarios where you need to remove a cookie, the deleteCookie function comes to the rescue. Simply call this function, and it will remove the specified cookie from the browser. The hook takes care of updating the state, ensuring that your application reflects the removal of the cookie.

The useCookie custom hook is highly versatile and can be utilized in various contexts. It is particularly beneficial when working with user preferences, authentication tokens, or any data that needs to persist across different sessions. Whether you are building a simple login form, a shopping cart, or a feature-rich application, useCookie simplifies cookie management, saving you valuable development time.

```javascript
import useCookie from "./useCookie"

export default function CookieComponent() {
    const [value, update, remove] = useCookie("name", "John")

    return (
        <>
            <div>{value}</div>
            <button onClick={() => update("Sally")}>Change Name To Sally</button>
            <button onClick={remove}>Delete Name</button>
        </>
    )
}
```

<br />

## 5. [`useCopyToClipboard`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useCopyToClipboard/useCopyToClipboard.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useCopyToClipboard/useCopyToClipboard.js)

```javascript
import { useState } from "react"
import copy from "copy-to-clipboard"

export default function useCopyToClipboard() {
    const [value, setValue] = useState()
    const [success, setSuccess] = useState()

    const copyToClipboard = (text, options) => {
        const result = copy(text, options)
        if (result) setValue(text)
        setSuccess(result)
    }

    return [copyToClipboard, { value, success }]
}
```

Copying text to the clipboard in a React application can be a tedious task. To simplify this process, I've created a powerful custom hook called useCopyToClipboard. With just a few lines of code, this hook streamlines the copy-to-clipboard functionality, providing developers with a hassle-free solution.

The useCopyToClipboard hook utilizes the useState hook from React, along with the copy-to-clipboard library, to achieve its functionality. By invoking this custom hook, you gain access to two essential features: copyToClipboard and its accompanying state variables.

The copyToClipboard function takes in two parameters: the text to be copied and optional configuration options. It handles the copying process and updates the state accordingly. When successful, the provided text is set as the current value, and the success state is set to true. Conversely, if the copying fails, the success state remains false.

To demonstrate the power of useCopyToClipboard, let's consider a practical implementation. Suppose you have a component called CopyToClipboardComponent. By utilizing this custom hook, you can effortlessly copy text by invoking the copyToClipboard function, which accepts the desired text as an argument. The success state variable provides immediate feedback, allowing you to display appropriate messages or UI elements based on the copying outcome.

The useCopyToClipboard hook is incredibly versatile and can be employed in various scenarios. It is particularly useful in situations where copying text, such as URLs, shareable content, or user-generated data, is required. Whether you're building a blogging platform, a social media application, or any other React-based project, useCopyToClipboard simplifies the process of copying text, enhancing user experience and productivity.

```javascript
import useCopyToClipboard from "./useCopyToClipboard"

export default function CopyToClipboardComponent() {
    const [copyToClipboard, { success }] = useCopyToClipboard()

    return (
        <>
            <button onClick={() => copyToClipboard("This was copied")}>
                {success ? "Copied" : "Copy Text"}
            </button>
            <input type="text" />
        </>
    )
}
```

<br />

## 6. [`useDarkMode`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDarkMode/useDarkMode.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDarkMode/useDarkMode.js)

```javascript
import { useEffect } from "react"
import useMediaQuery from "../useMediaQuery/useMediaQuery"
import { useLocalStorage } from "../useStorage/useStorage"

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("useDarkMode")
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
    const enabled = darkMode ?? prefersDarkMode

    useEffect(() => {
        document.body.classList.toggle("dark-mode", enabled)
    }, [enabled])

    return [enabled, setDarkMode]
}
```

This custom hook combines two other handy hooks, [`useMediaQuery`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useMediaQuery/useMediaQuery.js) and [`useStorage`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStorage/useStorage.js), to provide a seamless dark mode experience. It automatically detects the user's preferred color scheme and persists the dark mode state in the browser's local storage.

One of the main advantages of "useDarkMode" is its simplicity. With just a few lines of code, you can enable dark mode in your React application. By invoking this hook, you'll receive the current dark mode state and a function to toggle it.

The "useDarkMode" hook dynamically updates the HTML body class to apply the "dark-mode" styling whenever dark mode is enabled. This approach ensures consistency across all components without the need for manual class manipulation.

```css
body.dark-mode {
    background-color: #333;
}
```

You can use the "useDarkMode" hook in various scenarios. Whether you're building a blog, e-commerce platform, or a content-heavy application, dark mode can enhance the user experience, reduce eye strain, and conserve device battery life. The possibilities are endless, and this custom hook makes it a breeze to implement.

To make it even easier, I've included a simple example component, "DarkModeComponent," that showcases how to use the "useDarkMode" hook. By clicking the "Toggle Dark Mode" button, you can instantly switch between light and dark themes. The button's appearance changes dynamically, reflecting the current mode.

```javascript
import useDarkMode from "./useDarkMode"
import "./body.css"

export default function DarkModeComponent() {
    const [darkMode, setDarkMode] = useDarkMode()

    return (
        <button
            onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
            style={{
                border: `1px solid ${darkMode ? "white" : "black"}`,
                background: "none",
                color: darkMode ? "white" : "black",
            }}
        >
            Toggle Dark Mode
        </button>
    )
}
```

<br />

## 7. [`useDebounce`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDebounce/useDebounce.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDebounce/useDebounce.js)

```javascript
import { useEffect } from "react"
import useTimeout from "../useTimeout/useTimeout"

export default function useDebounce(callback, delay, dependencies) {
    const { reset, clear } = useTimeout(callback, delay)
    useEffect(reset, [...dependencies, reset])
    useEffect(clear, [])
}
```

The useDebounce hook leverages the useTimeout hook internally to delay the execution of a callback function until a specified delay has passed. By doing so, it prevents frequent updates caused by rapid input changes or repeated events, allowing for smoother interactions and reduced resource consumption.

One of the main advantages of useDebounce is its simplicity and flexibility. By wrapping your callback function, delay duration, and any dependencies in this custom hook, you can effortlessly implement debouncing functionality without cluttering your component code. The hook takes care of managing the timeout and clears it when necessary, ensuring that the callback is only triggered after the specified delay and with the latest dependencies.

Where can you use useDebounce? The possibilities are endless! This custom hook is particularly beneficial in scenarios where you need to handle user input, such as search bars or form fields, where you want to delay the execution of an action until the user has finished typing or interacting. It's also useful for optimizing network requests, ensuring that requests are sent only after the user has stopped typing or selecting options.

In the example above, we showcase the power of useDebounce by implementing a simple counter component called DebounceComponent. Each time the user clicks the "Increment" button, the count state updates. However, instead of immediately alerting the count value, we debounce the alert function using useDebounce. The count value will only be alerted after a 1-second delay, effectively preventing excessive alerts when the button is clicked rapidly.

```javascript
import { useState } from "react"
import useDebounce from "./useDebounce"

export default function DebounceComponent() {
    const [count, setCount] = useState(10)
    useDebounce(() => alert(count), 1000, [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}
```

<br />

## 8. [`useDebugInformation`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDebugInformation/useDebugInformation.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDebugInformation/useDebugInformation.js)

```javascript
import { useEffect, useRef } from "react"
import useRenderCount from "../useRenderCount/useRenderCount"

export default function useDebugInformation(componentName, props) {
    const count = useRenderCount()
    const changedProps = useRef({})
    const previousProps = useRef(props)
    const lastRenderTimestamp = useRef(Date.now())

    const propKeys = Object.keys({ ...props, ...previousProps })
    changedProps.current = propKeys.reduce((obj, key) => {
        if (props[key] === previousProps.current[key]) return obj
        return {
            ...obj,
            [key]: { previous: previousProps.current[key], current: props[key] },
        }
    }, {})
    const info = {
        count,
        changedProps: changedProps.current,
        timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
        lastRenderTimestamp: lastRenderTimestamp.current,
    }

    useEffect(() => {
        previousProps.current = props
        lastRenderTimestamp.current = Date.now()
        console.log("[debug-info]", componentName, info)
    })

    return info
}
```

When it comes to debugging React components, having access to detailed information about renders and prop changes can be incredibly useful. That's where the useDebugInformation custom hook comes in. Created by [Your Name], this advanced hook provides developers with valuable insights into their components' behavior and helps identify performance bottlenecks or unexpected rendering patterns.

One of the main advantages of useDebugInformation is its simplicity. By integrating just a few lines of code into your component, you gain access to a wealth of debugging data. The hook tracks the number of renders, changed props, time since the last render, and the timestamp of the last render. This comprehensive information empowers you to analyze component behavior more effectively and make informed decisions when optimizing your application.

The useDebugInformation hook can be applied in various scenarios. For instance, imagine you're working on a complex form component where certain props trigger updates or affect rendering. By utilizing useDebugInformation, you can easily monitor how these props impact your component's performance and whether unnecessary re-renders are occurring. Additionally, the hook can be invaluable when investigating why a specific component is not updating as expected or when fine-tuning optimizations in a performance-critical application.

To implement useDebugInformation, simply import it into your React component, along with any other necessary hooks. In the example provided, the DebugInformationComponent utilizes the useDebugInformation hook within the ChildComponent. By passing the component name and props to the hook, you gain access to an info object containing all the relevant debugging data. This object can then be displayed or logged for further analysis.

```javascript
import useDebugInformation from "./useDebugInformation"
import useToggle from "../useToggle/useToggle"
import { useState } from "react"

export default function DebugInformationComponent() {
    const [boolean, toggle] = useToggle(false)
    const [count, setCount] = useState(0)

    return (
        <>
            <ChildComponent boolean={boolean} count={count} />
            <button onClick={toggle}>Toggle</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>
                Increment
            </button>
        </>
    )
}

function ChildComponent(props) {
    const info = useDebugInformation("ChildComponent", props)

    return (
        <>
            <div>{props.boolean.toString()}</div>
            <div>{props.count}</div>
            <div>{JSON.stringify(info, null, 2)}</div>
        </>
    )
}
```

<br />

## 9. [`useDeepCompareEffect`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDeepCompareEffect/useDeepCompareEffect.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useDeepCompareEffect/useDeepCompareEffect.js)

```javascript
import { useEffect, useRef } from "react"
import isEqual from "lodash/fp/isEqual"

export default function useDeepCompareEffect(callback, dependencies) {
    const currentDependenciesRef = useRef()

    if (!isEqual(currentDependenciesRef.current, dependencies)) {
        currentDependenciesRef.current = dependencies
    }

    useEffect(callback, [currentDependenciesRef.current])
}
```

Managing dependencies in React can be a challenge, especially when dealing with complex data structures or nested objects. That's where the useDeepCompareEffect custom hook comes in handy. Created to tackle the limitations of the default useEffect hook, useDeepCompareEffect ensures that the effect callback is only triggered when the dependencies have deeply changed, using lodash's isEqual function for accurate comparison.

One of the key advantages of useDeepCompareEffect is its ability to prevent unnecessary re-renders. By performing a deep comparison between the current and previous dependencies, the hook intelligently determines if the effect should be triggered, leading to optimized performance in scenarios where shallow comparisons fall short.

This custom hook can be especially useful when dealing with complex state objects, such as when you have deeply nested data structures or multiple interconnected states that need to be tracked. It enables you to define dependencies that accurately reflect the specific changes you want to track, ensuring that the effect is executed only when it is absolutely necessary.

You can easily incorporate useDeepCompareEffect into your React components by importing it and utilizing it in place of the traditional useEffect hook. By passing the effect callback and an array of dependencies, you can ensure that your effect runs efficiently and effectively.

```javascript
import { useEffect, useState, useRef } from "react"
import useDeepCompareEffect from "./useDeepCompareEffect"

export default function DeepCompareEffectComponent() {
    const [age, setAge] = useState(0)
    const [otherCount, setOtherCount] = useState(0)
    const useEffectCountRef = useRef()
    const useDeepCompareEffectCountRef = useRef()

    const person = { age: age, name: "Sergey" }

    useEffect(() => {
        useEffectCountRef.current.textContent =
            parseInt(useEffectCountRef.current.textContent) + 1
    }, [person])

    useDeepCompareEffect(() => {
        useDeepCompareEffectCountRef.current.textContent =
            parseInt(useDeepCompareEffectCountRef.current.textContent) + 1
    }, [person])

    return (
        <div>
            <div>
                useEffect: <span ref={useEffectCountRef}>0</span>
            </div>
            <div>
                useDeepCompareEffect: <span ref={useDeepCompareEffectCountRef}>0</span>
            </div>
            <div>Other Count: {otherCount}</div>
            <div>{JSON.stringify(person)}</div>
            <button onClick={() => setAge(currentAge => currentAge + 1)}>
                Increment Age
            </button>
            <button onClick={() => setOtherCount(count => count + 1)}>
                Increment Other Count
            </button>
        </div>
    )
}
```

<br />

## 10. [`useEffectOnce`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useEffectOnce/useEffectOnce.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useEffectOnce/useEffectOnce.js)

```javascript
import { useEffect } from "react"

export default function useEffectOnce(cb) {
    useEffect(cb, [])
}
```

The useEffectOnce hook is designed to streamline the process of running effects only once when a component mounts. With just a few lines of code, you can eliminate the need to manually specify an empty dependency array ([]). Here's how it works:

By encapsulating the repetitive useEffect pattern, useEffectOnce allows you to focus on the logic within the effect function itself. This elegant solution saves you from writing boilerplate code repeatedly and helps keep your component files clean and concise.

To showcase the power of useEffectOnce, let's consider a practical example:

```javascript
import { useState } from "react"
import useEffectOnce from "./useEffectOnce"

export default function EffectOnceComponent() {
    const [count, setCount] = useState(0)

    useEffectOnce(() => alert("Hi"))

    return (
        <>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </>
    )
}
```

In this case, when EffectOnceComponent mounts, the useEffectOnce hook triggers the alert "Hi" exactly once. It frees you from manually managing the effect dependencies and ensures your effect runs efficiently.

This custom hook is incredibly versatile and can be utilized in various scenarios. Whether you need to fetch initial data, set up event listeners, or initialize third-party libraries, useEffectOnce simplifies the process and promotes cleaner code organization.

<br />

## 11. [`useEventListener`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useEventListener/useEventListener.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useEventListener/useEventListener.js)

```javascript
import { useEffect, useRef } from "react"

export default function useEventListener(
    eventType,
    callback,
    element = window
) {
    const callbackRef = useRef(callback)

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    useEffect(() => {
        if (element == null) return
        const handler = e => callbackRef.current(e)
        element.addEventListener(eventType, handler)

        return () => element.removeEventListener(eventType, handler)
    }, [eventType, element])
}
```

One of the major advantages of useEventListener is its flexibility. You can specify the event type, callback function, and even the element where the event listener should be attached. This flexibility allows you to tailor event handling to your specific needs, enhancing the reusability of your code.

The hook also takes advantage of the useRef hook to maintain a stable reference to the callback function. This ensures that the most up-to-date version of the callback is used, even if it changes during the component's lifecycle. This dynamic behavior enables you to handle events with precision and respond to changes in your application's state.

The useEventListener hook is a versatile tool that can be used in a wide range of scenarios. Whether you need to capture keyboard events, listen for scroll events, or interact with user input, this hook has got you covered. Its simplicity and elegance make it an ideal choice for any React project, from small-scale applications to large-scale enterprise solutions.

To demonstrate the power of useEventListener, consider the EventListenerComponent provided. It utilizes the hook to track the last key pressed by the user. With just a few lines of code, you can effortlessly handle keydown events and update the component's state accordingly. This example highlights the ease and effectiveness of useEventListener, showcasing its ability to simplify event-driven interactions in React applications.

```javascript
import { useState } from "react"
import useEventListener from "./useEventListener"

export default function EventListenerComponent() {
    const [key, setKey] = useState("")
    useEventListener("keydown", e => {
        setKey(e.key)
    })

    return <div>Last Key: {key}</div>
}
```

<br />

## 12. [`useFetch`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useFetch/useFetch.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useFetch/useFetch.js)

```javascript
import useAsync from "../useAsync/useAsync"

const DEFAULT_OPTIONS = {
    headers: { "Content-Type": "application/json" },
}

export default function useFetch(url, options = {}, dependencies = []) {
    return useAsync(() => {
        return fetch(url, { ...DEFAULT_OPTIONS, ...options }).then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })
    }, dependencies)
}
```

One of the key advantages of useFetch is its simplicity. By abstracting away the fetch logic into a reusable hook, developers can quickly and effortlessly make HTTP requests and handle responses without repetitive boilerplate code. With just a few lines, useFetch handles the network request, parses the JSON response, and provides the resulting data.

The useFetch hook also offers flexibility through its customizable options parameter. Developers can pass additional headers, query parameters, or request options as needed, ensuring compatibility with various APIs. The hook follows best practices by providing default options for setting the Content-Type header as application/json, promoting clean and consistent code.

Another noteworthy feature of useFetch is its support for dependency tracking. By specifying an array of dependencies, developers can control when the hook triggers a new request. This feature enhances performance optimization, allowing for selective data updates based on changes in the dependency array.

This versatile hook can be utilized in numerous scenarios. For example, in a React component that needs to fetch and display dynamic data, useFetch simplifies the process. It takes care of handling loading and error states, keeping the component clean and focused on rendering the received data. Additionally, useFetch is particularly useful in scenarios where the fetched data is based on dynamic variables or user interactions, as demonstrated in the FetchComponent example.

```javascript
import { useState } from "react"
import useFetch from "./useFetch"

export default function FetchComponent() {
    const [id, setId] = useState(1)
    const { loading, error, value } = useFetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {},
        [id]
    )

    return (
        <div>
            <div>{id}</div>
            <button onClick={() => setId(currentId => currentId + 1)}>
                Increment ID
            </button>
            <div>Loading: {loading.toString()}</div>
            <div>{JSON.stringify(error, null, 2)}</div>
            <div>{JSON.stringify(value, null, 2)}</div>
        </div>
    )
}
```

<br />

## 13. [`useGeolocation`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useGeolocation/useGeolocation.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useGeolocation/useGeolocation.js)

```javascript
import { useState, useEffect } from "react"

export default function useGeolocation(options) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [data, setData] = useState({})

    useEffect(() => {
        const successHandler = e => {
            setLoading(false)
            setError(null)
            setData(e.coords)
        }
        const errorHandler = e => {
            setError(e)
            setLoading(false)
        }
        navigator.geolocation.getCurrentPosition(
            successHandler,
            errorHandler,
            options
        )
        const id = navigator.geolocation.watchPosition(
            successHandler,
            errorHandler,
            options
        )
        return () => navigator.geolocation.clearWatch(id)
    }, [options])

    return { loading, error, data }
}
```

The useGeolocation hook utilizes React's useState and useEffect hooks to manage the state of loading, errors, and geolocation data. It takes an optional "options" parameter to customize the geolocation behavior, allowing you to fine-tune the accuracy and other settings based on your specific needs.

One of the key advantages of useGeolocation is its simplicity. By encapsulating the complex logic required for geolocation access and handling, this hook provides a clean and reusable solution. The hook automatically handles the loading state, updating it when geolocation data is being fetched, and sets the error state if any issues arise during the process.

The useGeolocation hook also incorporates the watchPosition method from the Geolocation API, which enables continuous monitoring of the user's position. This can be useful in scenarios where real-time updates of the user's location are required, such as in tracking applications or interactive maps.

To use this hook, simply import useGeolocation into your component and destructure the loading, error, and data variables. The data object contains the latitude and longitude values, allowing you to display the user's location on your UI effortlessly. The loading variable informs you of the current state of geolocation retrieval, and the error variable provides any error messages, if applicable.

The GeolocationComponent showcased above demonstrates a basic implementation of useGeolocation. It renders the loading state, error message (if any), and the user's latitude and longitude values. With just a few lines of code, you can seamlessly integrate geolocation functionality into your React applications.

```javascript
import useGeolocation from "./useGeolocation"

export default function GeolocationComponent() {
    const {
        loading,
        error,
        data: { latitude, longitude },
    } = useGeolocation()

    return (
        <>
            <div>Loading: {loading.toString()}</div>
            <div>Error: {error?.message}</div>
            <div>
                {latitude} x {longitude}
            </div>
        </>
    )
}
```

<br />

## 14. [`useHover`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useHover/useHover.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useHover/useHover.js)

```javascript
import { useState } from "react"
import useEventListener from "../useEventListener/useEventListener"

export default function useHover(ref) {
    const [hovered, setHovered] = useState(false)

    useEventListener("mouseover", () => setHovered(true), ref.current)
    useEventListener("mouseout", () => setHovered(false), ref.current)

    return hovered
}
```

This lightweight hook leverages the useState and [useEventListener](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useEventListener/useEventListener.js) hooks from React to keep track of the hover state. By simply passing a ref to the useHover hook, you can start receiving accurate hover events. The hook listens for "mouseover" and "mouseout" events, updating the hovered state accordingly.

One of the key advantages of useHover is its simplicity and reusability. By encapsulating the hover logic within the hook, you can easily use it across multiple components without duplicating code. This promotes clean and maintainable code, saving you time and effort in the long run.

UseHover can be used in a variety of scenarios. Whether you need to highlight an element on hover, trigger additional actions, or dynamically change styles, this custom hook has got you covered. It provides a seamless way to enhance the interactivity and user experience of your React components.

To demonstrate its power, consider the HoverComponent example above. By applying the useHover hook to the elementRef, the background color of the div dynamically changes between blue and red depending on the hover state. This simple yet effective implementation showcases the potential of useHover in creating interactive and engaging UI components.

```javascript
import { useRef } from "react"
import useHover from "./useHover"

export default function HoverComponent() {
    const elementRef = useRef()
    const hovered = useHover(elementRef)

    return (
        <div
            ref={elementRef}
            style={{
                backgroundColor: hovered ? "blue" : "red",
                width: "100px",
                height: "100px",
                position: "absolute",
                top: "calc(50% - 50px)",
                left: "calc(50% - 50px)",
            }}
        />
    )
}
```

<br />

## 15. [`useLongPress`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useLongPress.js/useLongPress.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useLongPress.js/useLongPress.js)

```javascript
import useEventListener from "../useEventListener/useEventListener"
import useTimeout from "../useTimeout/useTimeout"
import useEffectOnce from "../useEffectOnce/useEffectOnce"

export default function useLongPress(ref, cb, { delay = 250 } = {}) {
    const { reset, clear } = useTimeout(cb, delay)
    useEffectOnce(clear)

    useEventListener("mousedown", reset, ref.current)
    useEventListener("touchstart", reset, ref.current)

    useEventListener("mouseup", clear, ref.current)
    useEventListener("mouseleave", clear, ref.current)
    useEventListener("touchend", clear, ref.current)
}
```

One of the key advantages of useLongPress is its simplicity. By utilizing this hook, developers can easily define a long-press action on any element in their React application. With just a few lines of code, the hook takes care of handling the intricacies of tracking the long-press duration and triggering the associated callback function.

The useLongPress hook offers flexibility through customizable options. Developers can specify the desired delay for a long press, allowing them to fine-tune the duration required for an action to be triggered. Additionally, the hook intelligently integrates with other custom hooks like useTimeout, useEventListener, and useEffectOnce, enhancing code reusability and maintainability.

The applications for useLongPress are wide-ranging. Whether you're developing a touch-sensitive UI, implementing context menus, or creating custom gestures, this hook proves to be a valuable tool. From mobile applications to complex web interfaces, useLongPress provides an elegant solution for incorporating long-press interactions that elevate user engagement and improve overall usability.

```javascript
import { useRef } from "react"
import useLongPress from "./useLongPress"

export default function LongPressComponent() {
    const elementRef = useRef()
    useLongPress(elementRef, () => alert("Long Press"))

    return (
        <div
            ref={elementRef}
            style={{
                backgroundColor: "red",
                width: "100px",
                height: "100px",
                position: "absolute",
                top: "calc(50% - 50px)",
                left: "calc(50% - 50px)",
            }}
        />
    )
}
```

<br />

## 16. [`useMediaQuery`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useMediaQuery/useMediaQuery.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useMediaQuery/useMediaQuery.js)

```javascript
import { useState, useEffect } from "react"
import useEventListener from "../useEventListener/useEventListener"

export default function useMediaQuery(mediaQuery) {
    const [isMatch, setIsMatch] = useState(false)
    const [mediaQueryList, setMediaQueryList] = useState(null)

    useEffect(() => {
        const list = window.matchMedia(mediaQuery)
        setMediaQueryList(list)
        setIsMatch(list.matches)
    }, [mediaQuery])

    useEventListener("change", e => setIsMatch(e.matches), mediaQueryList)

    return isMatch
}
```

The useMediaQuery hook allows you to dynamically update your UI based on a given media query. Simply pass in the desired media query as a parameter, and the hook will return a boolean value indicating whether the media query matches the current viewport size.

One of the key advantages of this custom hook is its simplicity and reusability. With just a few lines of code, you can effortlessly implement responsive behavior throughout your application. Whether you need to conditionally render components, apply specific styles, or trigger different functionality based on screen size, useMediaQuery has got you covered.

This hook is not limited to specific use cases; it can be utilized in a variety of scenarios. For instance, you can use it to dynamically adjust the layout of a navigation menu, hide or show certain elements based on screen size, or even optimize the loading of data based on the available space. The possibilities are endless, and the useMediaQuery hook empowers you to deliver a seamless user experience across different devices and screen sizes.

```javascript
import useMediaQuery from "./useMediaQuery"

export default function MediaQueryComponent() {
    const isLarge = useMediaQuery("(min-width: 200px)")

    return <div>Large: {isLarge.toString()}</div>
}
```

<br />

## 17. [`useOnlineStatus`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useOnlineStatus/useOnlineStatus.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useOnlineStatus/useOnlineStatus.js)

```javascript
import { useState } from "react"
import useEventListener from "../useEventListener/useEventListener"

export default function useOnlineStatus() {
    const [online, setOnline] = useState(navigator.onLine)

    useEventListener("online", () => setOnline(navigator.onLine))
    useEventListener("offline", () => setOnline(navigator.onLine))

    return online
}
```

One of the main advantages of "useOnlineStatus" is its simplicity. By importing and using this hook in your component, you can effortlessly access the online status of the user. The hook internally uses the "navigator.onLine" property to determine the initial online status and dynamically updates it whenever the user's connectivity changes.

To use this hook, all you need to do is call it within your functional component, just like the "OnlineStatusComponent" example demonstrates. It returns a boolean value indicating whether the user is currently online or offline. You can then utilize this information to provide real-time feedback to your users or make decisions based on their online status.

The "useOnlineStatus" hook can find applications in a wide range of scenarios. For instance, you can enhance user experience by displaying a visual indicator when the user loses their internet connection, allowing them to take appropriate actions. Additionally, you can conditionally render certain components or trigger specific behaviors based on the user's online status. The possibilities are endless, and this hook opens up new opportunities for building robust and responsive React applications.

```javascript
import useOnlineStatus from "./useOnlineStatus"

export default function OnlineStatusComponent() {
    const online = useOnlineStatus()

    return <div>{online.toString()}</div>
}
```

<br />

## 18. [`useOnScreen`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useOnScreen/useOnScreen.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useOnScreen/useOnScreen.js)

```javascript
import { useEffect, useState } from "react"

export default function useOnScreen(ref, rootMargin = "0px") {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        if (ref.current == null) return
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { rootMargin }
        )
        observer.observe(ref.current)
        return () => {
            if (ref.current == null) return
            observer.unobserve(ref.current)
        }
    }, [ref.current, rootMargin])

    return isVisible
}
```

The useOnScreen hook leverages the power of the Intersection Observer API, making it efficient and reliable. By simply providing a ref to the element you want to monitor, useOnScreen will notify you when it enters or exits the viewport.

One of the key advantages of useOnScreen is its simplicity. With just a few lines of code, you can detect if an element is visible and respond accordingly. This can be immensely useful in scenarios where you want to trigger animations, lazy load images, or load additional content as the user scrolls.

To use this hook, first import it into your component file. Then, create a ref using the useRef hook to target the desired element. Pass the ref as the first argument to the useOnScreen hook, and you're all set! You can also provide an optional rootMargin value to adjust the visible threshold.

In our example code, the OnScreenComponentComponent demonstrates how to use the useOnScreen hook. By attaching the ref to the second header element, we can display a "(Visible)" text when it enters the viewport. Feel free to customize the logic within your component to suit your specific needs.

```javascript
import { useRef } from "react"
import useOnScreen from "./useOnScreen"

export default function OnScreenComponentComponent() {
    const headerTwoRef = useRef()
    const visible = useOnScreen(headerTwoRef, "-100px")

    return (
        <div>
            <h1>Header</h1>
            <div>
              ...
            </div>
            <h1 ref={headerTwoRef}>Header 2 {visible && "(Visible)"}</h1>
            <div>
              ...
            </div>
        </div>
    )
}
```

<br />

## 19. [`usePrevious`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/usePrevious/usePrevious.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/usePrevious/usePrevious.js)

```javascript
import { useRef } from "react"

export default function usePrevious(value) {
    const currentRef = useRef(value)
    const previousRef = useRef()

    if (currentRef.current !== value) {
        previousRef.current = currentRef.current
        currentRef.current = value
    }

    return previousRef.current
}
```

The advantages of using usePrevious are remarkable. By using useRef, this hook efficiently stores the current and previous values, updating them whenever the value changes. By comparing the current and previous values, you can easily detect and respond to changes in your component's data.

This custom hook can be a game-changer in various scenarios. For instance, you can utilize usePrevious to compare and visualize changes in data, track state transitions, or implement undo/redo functionality. Additionally, it can be valuable in form handling, animations, and any situation where having access to the previous value is crucial for your application's logic.

Let's take a glance at how usePrevious can be used in practice. Consider a React component called PreviousComponent, where we have a count state, a name state, and a button to increment the count and change the name. By incorporating usePrevious, we can effortlessly display the current count alongside its previous value, enabling users to visualize the count's changes at a glance.

```javascript
import { useState } from "react"
import usePrevious from "./usePrevious"

export default function PreviousComponent() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Sergey")
    const previousCount = usePrevious(count)

    return (
        <div>
            <div>
                {count} - {previousCount}
            </div>
            <div>{name}</div>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>
                Increment
            </button>
            <button onClick={() => setName("John")}>Change Name</button>
        </div>
    )
}
```

<br />

## 20. [`useRenderCount`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useRenderCount/useRenderCount.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useRenderCount/useRenderCount.js)

```javascript
import { useEffect, useRef } from "react"

export default function useRenderCount() {
    const count = useRef(1)
    useEffect(() => count.current++)
    return count.current
}
```

The useRenderCount hook utilizes React's useEffect and useRef hooks to keep a count of renders. With each render, the count is incremented, providing you with real-time feedback on the component's render frequency.

One of the major advantages of using useRenderCount is its simplicity. By abstracting the logic into a reusable hook, you can easily integrate it into any component without cluttering your codebase. Additionally, it provides a clear and concise way to monitor render behavior, which can be crucial for performance optimization and debugging.

This versatile hook can be applied in various scenarios. For instance, when you're developing a complex component that exhibits unexpected rendering patterns, useRenderCount helps you pinpoint the problem by showing the exact number of renders. It is also handy for measuring the impact of certain optimizations or refactoring techniques, allowing you to assess their effectiveness.

To get started, simply import the useRenderCount hook and call it within your component. You can see its power in action by checking out the RenderCountComponent example above. By combining useRenderCount with other custom hooks like useToggle, you can build interactive components while keeping an eye on render counts.

```javascript
import useRenderCount from "./useRenderCount"
import useToggle from "../useToggle/useToggle"

export default function RenderCountComponent() {
    const [boolean, toggle] = useToggle(false)

    const renderCount = useRenderCount()

    return (
        <>
            <div>{boolean.toString()}</div>
            <div>{renderCount}</div>
            <button onClick={toggle}>Toggle</button>
        </>
    )
}
```

<br />

## 21. [`useScript`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useScript/useScript.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useScript/useScript.js)

```javascript
import useAsync from "../useAsync/useAsync"

export default function useScript(url) {
    return useAsync(() => {
        const script = document.createElement("script")
        script.src = url
        script.async = true

        return new Promise((resolve, reject) => {
            script.addEventListener("load", resolve)
            script.addEventListener("error", reject)
            document.body.appendChild(script)
        })
    }, [url])
}
```

One of the significant advantages of useScript is its ability to handle script loading asynchronously. By setting the script's async attribute to true, you ensure that it won't block the rendering of your application. This improves the performance and overall user experience, especially when dealing with larger scripts or slow network connections.

UseScript can be used in various scenarios. For instance, you can load external libraries like jQuery, enabling you to harness its powerful functionalities without adding bulk to your bundle. Additionally, you can load analytics scripts, social media widgets, or any other script necessary for your application's dynamic behavior.

In the example above, we see how useScript is utilized in a ScriptComponent. The useScript hook is called with the URL of the jQuery library as an argument. The hook returns the loading and error states, which can be used to display a loading spinner or an error message accordingly. Once the script is successfully loaded, the component displays the current window width using jQuery.

```javascript
import useScript from "./useScript"

export default function ScriptComponent() {
    const { loading, error } = useScript(
        "https://code.jquery.com/jquery-3.6.0.min.js"
    )

    if (loading) return <div>Loading</div>
    if (error) return <div>Error</div>
    return <div>{window.$(window).width()}</div>
}
```

<br />

## 22. [`useStateWithHistory`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStateWithHistory/useStateWithHistory.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStateWithHistory/useStateWithHistory.js)

```javascript
import { useCallback, useRef, useState } from "react"

export default function useStateWithHistory(
    defaultValue,
    { capacity = 10 } = {}
) {
    const [value, setValue] = useState(defaultValue)
    const historyRef = useRef([value])
    const pointerRef = useRef(0)

    const set = useCallback(
        v => {
            const resolvedValue = typeof v === "function" ? v(value) : v
            if (historyRef.current[pointerRef.current] !== resolvedValue) {
                if (pointerRef.current < historyRef.current.length - 1) {
                    historyRef.current.splice(pointerRef.current + 1)
                }
                historyRef.current.push(resolvedValue)

                while (historyRef.current.length > capacity) {
                    historyRef.current.shift()
                }
                pointerRef.current = historyRef.current.length - 1
            }
            setValue(resolvedValue)
        },
        [capacity, value]
    )

    const back = useCallback(() => {
        if (pointerRef.current <= 0) return
        pointerRef.current--
        setValue(historyRef.current[pointerRef.current])
    }, [])

    const forward = useCallback(() => {
        if (pointerRef.current >= historyRef.current.length - 1) return
        pointerRef.current++
        setValue(historyRef.current[pointerRef.current])
    }, [])

    const go = useCallback(index => {
        if (index < 0 || index > historyRef.current.length - 1) return
        pointerRef.current = index
        setValue(historyRef.current[pointerRef.current])
    }, [])

    return [
        value,
        set,
        {
            history: historyRef.current,
            pointer: pointerRef.current,
            back,
            forward,
            go,
        },
    ]
}
```

Advantages of useStateWithHistory:

1. Automatic history tracking: useStateWithHistory automatically keeps track of the values you set, allowing you to access the complete history whenever you need it.
2. Efficient memory usage: The hook utilizes a capacity parameter, ensuring that the history doesn't grow indefinitely. You can define the maximum number of historical values to keep, preventing excessive memory consumption.
3. Time-travel functionality: With back(), forward(), and go() functions, you can seamlessly navigate through the recorded history. Travel back and forth between previous states or jump directly to a specific index, enabling powerful undo/redo or step-by-step functionality.

Where to use useStateWithHistory:

1. Form management: Simplify the process of handling form inputs by providing an easy way to track changes, revert to previous values, or redo modifications.
2. Undo/Redo functionality: Implement undo/redo functionality in your application with ease. Track state changes and allow users to navigate back and forth through their actions effortlessly.
3. Step-by-step navigation: Use useStateWithHistory to build interactive guides or tutorials where users can navigate between different steps while preserving their progress.

```javascript
import { useState } from "react"
import useStateWithHistory from "./useStateWithHistory"

export default function StateWithHistoryComponent() {
    const [count, setCount, { history, pointer, back, forward, go }] =
        useStateWithHistory(1)
    const [name, setName] = useState("Sergey")

    return (
        <div>
            <div>{count}</div>
            <div>{history.join(", ")}</div>
            <div>Pointer - {pointer}</div>
            <div>{name}</div>
            <button onClick={() => setCount(currentCount => currentCount * 2)}>
                Double
            </button>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>
                Increment
            </button>
            <button onClick={back}>Back</button>
            <button onClick={forward}>Forward</button>
            <button onClick={() => go(2)}>Go To Index 2</button>
            <button onClick={() => setName("John")}>Change Name</button>
        </div>
    )
}
```

<br />

## 23. [`useStateWithValidation`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStateWithValidation/useStateWithValidation.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStateWithValidation/useStateWithValidation.js)

```javascript
import { useState, useCallback } from "react"

export default function useStateWithValidation(validationFunc, initialValue) {
    const [state, setState] = useState(initialValue)
    const [isValid, setIsValid] = useState(() => validationFunc(state))

    const onChange = useCallback(
        nextState => {
            const value =
                typeof nextState === "function" ? nextState(state) : nextState
            setState(value)
            setIsValid(validationFunc(value))
        },
        [validationFunc]
    )

    return [state, onChange, isValid]
}
```

The useStateWithValidation hook combines the useState and useCallback hooks from React to provide an elegant solution. It takes two parameters: a validation function and an initial value. The validation function determines whether the current state is considered valid or not.

One of the key advantages of this custom hook is its flexibility. You can pass any validation function that suits your specific requirements. Whether it's checking the length of a string, ensuring a numeric value falls within a certain range, or performing more complex validations, useStateWithValidation has got you covered.

```javascript
import useStateWithValidation from "./useStateWithValidation"

export default function StateWithValidationComponent() {
    const [username, setUsername, isValid] = useStateWithValidation(
        name => name.length > 5,
        ""
    )

    return (
        <>
            <div>Valid: {isValid.toString()}</div>
            <input
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
        </>
    )
}
```

In this example, the StateWithValidationComponent uses the useStateWithValidation hook to manage the username state. The validation function checks if the length of the username is greater than 5 characters, and the isValid variable reflects the validity of the current input.

<br />

## 24. [`useStorage`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStorage/useStorage.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useStorage/useStorage.js)

```javascript
import { useCallback, useState, useEffect } from "react"

export function useLocalStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.localStorage)
}

export function useSessionStorage(key, defaultValue) {
    return useStorage(key, defaultValue, window.sessionStorage)
}

function useStorage(key, defaultValue, storageObject) {
    const [value, setValue] = useState(() => {
        const jsonValue = storageObject.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof defaultValue === "function") {
            return defaultValue()
        } else {
            return defaultValue
        }
    })

    useEffect(() => {
        if (value === undefined) return storageObject.removeItem(key)
        storageObject.setItem(key, JSON.stringify(value))
    }, [key, value, storageObject])

    const remove = useCallback(() => {
        setValue(undefined)
    }, [])

    return [value, setValue, remove]
}
```

The useStorage hook provides two convenient functions: useLocalStorage and useSessionStorage. With useLocalStorage, you can effortlessly store and retrieve data in the browser's local storage, while useSessionStorage offers the same functionality but with the session storage instead.

One of the key advantages of this custom hook is its simplicity. You can use it to store any type of data, such as strings, numbers, or even complex objects, with just a few lines of code. Additionally, useStorage handles the serialization and deserialization of data for you, so you don't have to worry about converting values to and from JSON.

Another advantage is the automatic synchronization between the stored data and the component's state. Whenever the stored data changes, the hook updates the component's state accordingly. Similarly, when the component's state changes, the hook automatically persists the new value to the storage. This bidirectional synchronization ensures that your application always reflects the latest data, making it ideal for scenarios where real-time updates are crucial.

The useStorage hook also provides a remove function, allowing you to easily delete stored values when they are no longer needed. This functionality comes in handy when implementing features like logout buttons or clearing user-specific data.

You can use the useStorage hook in a variety of scenarios. For example, imagine you have a settings panel where users can customize their preferences. By using useLocalStorage, you can easily store and retrieve these settings, ensuring that they persist across page reloads or even if the user closes and reopens the browser.

```javascript
import { useSessionStorage, useLocalStorage } from "./useStorage"

export default function StorageComponent() {
    const [name, setName, removeName] = useSessionStorage("name", "Sergey")
    const [age, setAge, removeAge] = useLocalStorage("age", 26)

    return (
        <div>
            <div>
                {name} - {age}
            </div>
            <button onClick={() => setName("John")}>Set Name</button>
            <button onClick={() => setAge(40)}>Set Age</button>
            <button onClick={removeName}>Remove Name</button>
            <button onClick={removeAge}>Remove Age</button>
        </div>
    )
}
```

<br />

## 25. [`useTimeout`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useTimeout/useTimeout.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useTimeout/useTimeout.js)

```javascript
import { useCallback, useEffect, useRef } from "react"

export default function useTimeout(callback, delay) {
    const callbackRef = useRef(callback)
    const timeoutRef = useRef()

    useEffect(() => {
        callbackRef.current = callback
    }, [callback])

    const set = useCallback(() => {
        timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
    }, [delay])

    const clear = useCallback(() => {
        timeoutRef.current && clearTimeout(timeoutRef.current)
    }, [])

    useEffect(() => {
        set()
        return clear
    }, [delay, set, clear])

    const reset = useCallback(() => {
        clear()
        set()
    }, [clear, set])

    return { reset, clear }
}
```

The "useTimeout" hook encapsulates the logic for setting, clearing, and resetting timeouts within a React component. It takes two parameters: a callback function and a delay duration in milliseconds. Whenever the specified delay elapses, the provided callback function is executed.

One of the significant advantages of this custom hook is that it ensures the callback function remains up to date even if it changes during component re-renders. By using a useRef to store the callback reference, the hook guarantees that the latest version of the function is always called.

Moreover, the "useTimeout" hook optimizes performance by utilizing useCallback to memoize the "set" and "clear" functions. This means that the functions are only recreated when their dependencies change, preventing unnecessary renders and enhancing efficiency.

The "useTimeout" hook can be utilized in various scenarios where timed actions are required. For example, in a countdown component like the "TimeoutComponent" showcased above, you can easily implement a timer that resets after a specific duration. By using the "useTimeout" hook, you can effortlessly update the countdown value and manage the timeout without worrying about complex timeout management code.

```javascript
import { useState } from "react"
import useTimeout from "./useTimeout"

export default function TimeoutComponent() {
    const [count, setCount] = useState(10)
    const { clear, reset } = useTimeout(() => setCount(0), 1000)

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
            <button onClick={clear}>Clear Timeout</button>
            <button onClick={reset}>Reset Timeout</button>
        </div>
    )
}
```

<br />

## 26. [`useToggle`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useToggle/useToggle.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useToggle/useToggle.js)

```javascript
import { useState } from "react"

export default function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue)

    function toggleValue(value) {
        setValue(currentValue =>
            typeof value === "boolean" ? value : !currentValue
        )
    }

    return [value, toggleValue]
}
```

One of the main advantages of useToggle is its flexibility. With a single line of code, you can initialize the state with a default value. The toggleValue function allows you to easily toggle the state between true and false, or you can pass a boolean value directly to set the state to your desired value. This versatility makes useToggle ideal for a wide range of scenarios where toggling or switching state is required.

UseToggle can be seamlessly integrated into various React components. For instance, in the provided ToggleComponent, the useToggle hook is used to manage the state of a toggle button. With a simple click, the button's state is toggled between true and false. Additionally, the hook provides buttons to directly set the value to true or false, catering to specific use cases. The resulting state is displayed dynamically, allowing for instant feedback.

```javascript
import useToggle from "./useToggle"

export default function ToggleComponent() {
    const [value, toggleValue] = useToggle(false)

    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </div>
    )
}
```

<br />

## 27. [`useTranslation`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useTranslation/useTranslation.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useTranslation/useTranslation.js)

```javascript
import { useLocalStorage } from "../useStorage/useStorage"
import * as translations from "./translations"

export default function useTranslation() {
    const [language, setLanguage] = useLocalStorage("language", "en")
    const [fallbackLanguage, setFallbackLanguage] = useLocalStorage(
        "fallbackLanguage",
        "en"
    )

    const translate = key => {
        const keys = key.split(".")

        return (
            getNestedTranslation(language, keys) ??
            getNestedTranslation(fallbackLanguage, keys) ??
            key
        )
    }

    return {
        language,
        setLanguage,
        fallbackLanguage,
        setFallbackLanguage,
        t: translate,
    }
}

function getNestedTranslation(language, keys) {
    return keys.reduce((obj, key) => {
        return obj?.[key]
    }, translations[language])
}
```

One of the key advantages of useTranslation is its seamless integration with the browser's localStorage. It automatically saves the selected language and fallback language preferences, so your users will see the content in their preferred language every time they visit your app.

The hook utilizes the useLocalStorage hook from the useStorage library to persist the language settings. This ensures that even if the user refreshes the page or navigates away and comes back, their language preference will be preserved.

Using useTranslation is incredibly straightforward. Simply import the hook and initialize it in your component. You'll have access to the current language, the ability to set the language, the fallback language, and the option to set the fallback language. Additionally, the hook provides a convenient translation function, t, which takes a key as input and returns the corresponding translated value.

You can use the useTranslation hook in various scenarios. Whether you're building a multi-language website, an internationalized application, or simply need to support translations in your UI components, this hook will simplify the process and make your codebase more maintainable.

```javascript
import useTranslation from "./useTranslation"

export default function TranslationComponent() {
    const { language, setLanguage, setFallbackLanguage, t } = useTranslation()

    return (
        <>
            <div>{language}</div>
            <div>{t("hi")}</div>
            <div>{t("bye")}</div>
            <div>{t("nested.value")}</div>
            <button onClick={() => setLanguage("sp")}>Change To Spanish</button>
            <button onClick={() => setLanguage("en")}>Change To English</button>
            <button onClick={() => setFallbackLanguage("sp")}>Change FB Lang</button>
        </>
    )
}
```

<br />

## 28. [`useUpdateEffect`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useUpdateEffect/useUpdateEffect.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useUpdateEffect/useUpdateEffect.js)

```javascript
import { useEffect, useRef } from "react"

export default function useUpdateEffect(callback, dependencies) {
    const firstRenderRef = useRef(true)

    useEffect(() => {
        if (firstRenderRef.current) {
            firstRenderRef.current = false
            return
        }
        return callback()
    }, dependencies)
}
```

The useUpdateEffect hook is designed to execute a callback function only after the initial render. This behavior is particularly useful when you want to perform actions based on state changes while skipping the initial execution. By leveraging the useRef hook, useUpdateEffect tracks the first render and skips the callback during that phase.

One of the key advantages of useUpdateEffect is its simplicity. With just a few lines of code, you can enhance your React components by efficiently handling state updates. By specifying the dependencies for the hook, you can control precisely when the callback should be triggered, preventing unnecessary rendering cycles.

This custom hook can be used in various scenarios. For example, imagine you have a counter component that needs to display an alert every time the count changes, excluding the initial render. By using useUpdateEffect, you can easily achieve this behavior, improving the user experience and reducing unnecessary alerts.

To implement useUpdateEffect, simply import it into your React component and define the callback function and dependencies. The hook will take care of the rest, ensuring that the callback is executed only when necessary. It's a powerful tool that simplifies state management and enhances the performance of your React applications.

```javascript
import { useState } from "react"
import useUpdateEffect from "./useUpdateEffect"

export default function UpdateEffectComponent() {
    const [count, setCount] = useState(10)
    useUpdateEffect(() => alert(count), [count])

    return (
        <div>
            <div>{count}</div>
            <button onClick={() => setCount(c => c + 1)}>Increment</button>
        </div>
    )
}
```

<br />

## 29. [`useWindowSize`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useWindowSize/useWindowSize.js) | [`sources`](https://github.com/sergeyleschev/react-custom-hooks/blob/main/src/hooks/useWindowSize/useWindowSize.js)

```javascript
import { useState } from "react"
import useEventListener from "../useEventListener/useEventListener"

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEventListener("resize", () => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    })

    return windowSize
}
```

One of the main advantages of useWindowSize is its ease of use. By simply importing the hook and invoking it within your functional component, you gain access to an object containing the current width and height of the window. This eliminates the need for boilerplate code and allows you to focus on building dynamic and responsive interfaces.

The useEventListener hook, also included in this package, intelligently listens for window resize events. Whenever the window size changes, useWindowSize updates the state with the latest dimensions, triggering a re-render of the consuming component. This guarantees that your UI remains in sync with the user's viewing environment, resulting in a more immersive and polished user experience.

The useWindowSize hook can be used in a variety of scenarios. It's particularly handy when building responsive layouts that adapt to different screen sizes. With this hook, you can effortlessly adjust the styling, layout, or content of your components based on the available window space. Furthermore, it enables you to dynamically render or hide elements, optimize image loading, or perform any other behavior that relies on the window dimensions.

```javascript
import useWindowSize from "./useWindowSize"

export default function WindowSizeComponent() {
    const { width, height } = useWindowSize()

    return (
        <div>
            {width} x {height}
        </div>
    )
}
```

<br />

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

<div style="page-break-after: always;"></div>

## Contacts

I have a clear focus on time-to-market and don't prioritize technical debt. And I took part in the Pre-Sale/RFX activity as a System Architect, assessment efforts for Frontend (React-TypeScript) and Backend (NodeJS-.NET-PHP-Kafka-SQL-NoSQL). And I also formed the work of Pre-Sale as a CTO from Opportunity to Proposal via knowledge transfer to Successful Delivery.

🛩️ #startups #management #cto #swift #typescript #database

📧 Email: [sergey.leschev@gmail.com](mailto:sergey.leschev@gmail.com)

👋 LinkedIn: [https://linkedin.com/in/sergeyleschev](https://www.linkedin.com/in/sergeyleschev/)

👋 Twitter: [https://twitter.com/sergeyleschev](https://twitter.com/sergeyleschev)

👋 Github: [https://github.com/sergeyleschev](https://github.com/sergeyleschev)

🌎 Website: [https://sergeyleschev.github.io](https://sergeyleschev.github.io)

🌎 DEV Community: [https://dev.to/sergeyleschev](https://dev.to/sergeyleschev)

🌎 Reddit: [https://reddit.com/user/sergeyleschev](https://reddit.com/user/sergeyleschev)

🌎 Quora: [https://quora.com/sergey-leschev](https://quora.com/sergey-leschev)

🌎 Medium: [https://medium.com/@sergeyleschev](https://medium.com/@sergeyleschev)

🖨️ PDF: [Download](https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.pdf)

ALT: SIARHEI LIASHCHOU

<footer>
  <p style="font-size: 10px">
  <a href="https://sergeyleschev.github.io">leader</a>, <a href="https://sergeyleschev.github.io">knowledge</a>, <a href="https://sergeyleschev.github.io">qualifications</a>, <a href="https://sergeyleschev.github.io">education</a>, <a href="https://sergeyleschev.github.io">tips</a>, <a href="https://sergeyleschev.github.io">skills</a>, <a href="https://sergeyleschev.github.io">multitasking</a>, <a href="https://sergeyleschev.github.io">references</a>, <a href="https://sergeyleschev.github.io">success</a>, <a href="https://sergeyleschev.github.io">work</a>, <a href="https://sergeyleschev.github.io">job</a>, <a href="https://sergeyleschev.github.io">tie</a>, <a href="https://sergeyleschev.github.io">challenges</a>, <a href="https://sergeyleschev.github.io">abilities</a>, <a href="https://sergeyleschev.github.io">impress</a>, <a href="https://sergeyleschev.github.io">responsibility</a>, <a href="https://sergeyleschev.github.io">future</a>, <a href="https://sergeyleschev.github.io">weeknesses</a>, <a href="https://sergeyleschev.github.io">benefits</a>, <a href="https://sergeyleschev.github.io">results</a>, <a href="https://sergeyleschev.github.io">team player</a>, <a href="https://sergeyleschev.github.io">strengths</a>, <a href="https://sergeyleschev.github.io">interview</a>, <a href="https://sergeyleschev.github.io">degress</a>, <a href="https://sergeyleschev.github.io">examples</a>, <a href="https://sergeyleschev.github.io">strengths</a>, <a href="https://sergeyleschev.github.io">experienced</a>, <a href="https://sergeyleschev.github.io">problem solver</a>, <a href="https://sergeyleschev.github.io">candidate</a>, <a href="https://sergeyleschev.github.io">agency</a>, <a href="https://sergeyleschev.github.io">objective</a>, <a href="https://sergeyleschev.github.io">initiative</a>, <a href="https://sergeyleschev.github.io">team</a>, <a href="https://sergeyleschev.github.io">dreams</a>, <a href="https://sergeyleschev.github.io">conflict</a>, <a href="https://sergeyleschev.github.io">can-do</a>, <a href="https://sergeyleschev.github.io">training</a>, <a href="https://sergeyleschev.github.io">questions</a>, <a href="https://sergeyleschev.github.io">job</a>, <a href="https://sergeyleschev.github.io">work</a>, <a href="https://sergeyleschev.github.io">career</a>, <a href="https://sergeyleschev.github.io">created</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">swift</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">typescript</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">javascript</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">sql</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">nosql</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">postgresql</a>, <a href="https://sergeyleschev.github.io">oracle</a>, <a href="https://sergeyleschev.github.io">sql server</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">react</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">redux</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">swiftui</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">objective-c</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">devops</a>, <a href="https://sergeyleschev.github.io">aws</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">mongodb</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">pl/sql</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">angular</a>, <a href="https://sergeyleschev.github.io">project management</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">nodejs</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">nextjs</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">nestjs</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">api</a>, <a href="https://sergeyleschev.github.io">agile</a>, <a href="https://sergeyleschev.github.io">amplitude</a>, <a href="https://sergeyleschev.github.io">analytics</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">appclip</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">appstore</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">bash</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">css</a>, <a href="https://sergeyleschev.github.io">jira</a>, <a href="https://sergeyleschev.github.io">confluence</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">git</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">graphql</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">html</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">html5</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">mvp</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">mvvm</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">nginx</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">ssh</a>, <a href="https://sergeyleschev.github.io">prime react</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">rest</a>, <a href="https://sergeyleschev.github.io">teamcity</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-fullstack-roadmap.html">typeorm</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">uikit</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">uml</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">viper</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">widgets</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">xcode</a>, <a href="https://sergeyleschev.github.io">json</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">linux</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">docker</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-system-architect-roadmap.html">mobx</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">tvOS</a>, <a href="https://sergeyleschev.github.io/sergeyleschev-ios-roadmap.html">watchOS</a>
  </p>
</footer>

