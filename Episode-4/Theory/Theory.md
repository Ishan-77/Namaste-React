# _Chapter 04 - Talk is cheap show me the code_

## Q: Is `JSX`` mandatory for React? ?

A: `JSX` is not mandatory for react.We can still write core react with it(React.createElement()) but JSX is more developer friendly and avoids extra work

## Q: Is ES6 mandatory for React?

A: No it is not mandatory but recommended as ES6 brings in a lot of new features like arrow functions which not only reduces lines of code,it enhances readbility as well,Classes also helps to make code reusable.

## Q:{TitleComponent} vs {<TitleComponent/>} vs

{<TitleComponent></TitleComponent>} in JSX

A: {TitleComponent} : {} allows any piece of JS to be written here

<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. If component is written inside the {< />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

## Q: How can I write comments in JSX?

A: {/\* \*/}

## Q: What is <React.Fragment></React.Fragment> and <></> ?

A: We use React.fragment to group multiple elements together EX: A component can return single element but if we use fragment we can group multiple elements togther then return them, <> </> is shorform for fragemnt
But if we wanna pass key to fragment we cannot use <> </>.We have to use fragment

## Q:What is Virtual DOM?

A:Virtual DOM is a concept in react in which react creates a copy of the actual DOM hence the name Virtual.It is important in React performance optimization.React uses a diffing algo to compare the updated virtual dom to determine which part of the actual DOM needs to be updated.it then updates that part in the most efficient way possible

## Q: What is Reconciliation in React ?

A: Reconciliation in React refers to the process of updating the DOM (Document Object Model) to match the most recent virtual representation of a component's UI. In simpler terms, it's React's way of ensuring that the user interface reflects the current application state accurately.The reconciliation algorithm, often referred to as the diffing algorithm, is responsible for comparing the previous virtual DOM with the new one and determining the most efficient way to update the actual DOM. React aims to make this process as optimized as possible to ensure that UI updates are fast and seamless.

## Q: What is React fiber

A: React Fiber is a concept of ReactJS that is used to render a system faster, smoother and smarter. The Fiber reconciler, which became the default reconciler for React 16 and above, is a complete rewrite of React’s reconciliation algorithm to solve some long-standing issues in React. Because Fiber is asynchronous, React can:

Pause, resume, and restart rendering work on components as new updates come in
Reuse previously completed work and even abort it if not needed
Split work into chunks and prioritize tasks based on importance

## Q: Why do we need keys in React,when do we need them?

A:
In React, keys are used to identify and keep track of individual components within a dynamically generated list. When rendering lists of components, React uses keys to optimize the process of updating the DOM efficiently. Here are some reasons why keys are important in React:

Avoiding Unnecessary Re-renders:

When a list is re-rendered, React tries to update only the elements that have changed. Keys help React distinguish between different elements, allowing it to re-render only the necessary components, thus avoiding unnecessary re-renders.

Optimizing Reconciliation:

When React updates the UI based on changes in the application state or props, it performs a process called reconciliation. During reconciliation, React compares the new virtual DOM tree with the previous one to determine the differences and updates. Keys help React identify which elements have changed, been added, or been removed in a list.

## Q: Can we use index as keys:

A: We can but it is not considered a good practice,because what if we change the ordering.This might cause issues

## Q: What are props in React

A: Prop basically means properties,It is something which we pass to components,Components are basically functions,so passing arguments to functions is almost same as passing props to components.They are useful to make components dynamic.Props are objects

## Q: What is config driven UI?

A: Config-driven UI refers to the approach of designing user interfaces (UIs) where the structure, behavior, and appearance of the UI components are primarily determined by configuration rather than hard-coded logic in the application code. In this approach, a configuration file or set of parameters is used to define how the UI should look and behave.
