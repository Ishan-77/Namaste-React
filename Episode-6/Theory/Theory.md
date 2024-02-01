# _Chapter 06 - Exploring the world_

## Q: What is a Microservice?

A: Microservices is a architectural approach to software development,where the software is subdivided into different components,each component is independant of each other,they interact with other componennts via well defined API's

## Q: What is Monolith architecture?

A: Monolith architecture is also an architectural approach to software development,here a single main components,(tightly coupled),not distributed to different components.

## Q: Why do we need a useEffect Hook?

A: useEffect hook lets you synchonise component with external system.it expects 2 parameters.A callback function and a depenedency array,The callback functions gets called when the component in which the useEffect() hook is written in rernders.A example for this is API call,the page loads then API is called,the other parameter is a dependency array,if array is empty then callback will only be called once.

## Q: What is Optional Chaining?

A:The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

## Q: What is Shimmer UI?

A: It is a representation of a fake page with shimmer effect,It is a visual effect used to improve UI experience of the user,earlier,we used to display a loader while we fetch data from API,shimmer UI helps to improve user experience by making the end user anticipate for in our case cards to load.

## Q: What is the difference between JS expression and JS statement

A: JS statement-> code that performs a action,standalone,does not return any value

JS Expression-> code that returns a value that is used in tha application

JS expression in JSX-> {expression slot}
JS statement in JSX-> {{statement-slot}}

## Q: What is Conditional Rendering, explain with a code example

A: Rendering based on a condition is called conditional rendering Ex: see ShimmerUI render in code
