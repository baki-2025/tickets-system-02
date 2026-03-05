## 1. What is JSX, and why is it used?
Answer:-
JSX (JavaScript XML) is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.  
It makes the code more readable and declarative, as UI structures look similar to HTML.
- Example:
  ```jsx
  const element = <h1>Hello, World!</h1>;
  It is used for
  -Improves readability and maintainability.
  -Makes it easier to write UI elements directly with logic.
  -Helps detect errors during compilation.
2. What is the difference between State and Props?
Answer:-
Definition- State is a	Internal data of a component. On the other hand, Props is a	External data passed to a component
Mutability-State Mutable (can change using setState or hooks) 	 and
 Props Immutable (read-only)
Ownership-State is 	Owned and managed by the component itself and Props is
Owned by the parent and passed to child
Usage-State	To handle dynamic data that changes over time	and Props
To configure child components or pass data down

3. What is the useState hook, and how does it work?
Answer:-
The useState hook is a React Hook that lets you add state to functional components.
Syntax:
const [count, setCount] = useState(0);
count → the current state value.
setCount → a function to update the state.
useState(0) → initializes the state with value 0.
*Every time setCount is called, React re-renders the component with the updated state.

4. How can you share state between components in React?
Answer:-
There are multiple ways to share state:
Props Drilling → Pass state down from parent to child components using props.
Lifting State Up → Move the shared state to the nearest common ancestor and pass it down.
React Context API → Provides a way to share values globally without prop drilling.
State Management Libraries → Like Redux, Zustand, or Recoil for complex applications.

5. How is event handling done in React?
Answer:-
React uses camelCase event handlers and passes functions instead of strings (unlike HTML).
Example:
function Button() {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return <button onClick={handleClick}>Click Me</button>;
}