1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Map, filter and assign. 

Object.assign does the latter. 

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Store  - The store is a single JavaScript Object that maintains the state of the entire application in a Redux based application. Store is known for the above question because we use a Provider component from react-redux to make the react application aware of Redux. The store gets passed to the Provider as a prop. 

Actions - Actions are what we use to make it possible to change the application state around when using redux, since store is ready only. Actions are objects that take in two properties and they can be  passed to reducers. 

Reducers - Reducers receive actions. Reducers are able to return a new object and works with the current state from the Redux and the action object. Reducers create the new state based off the actions received and the current state. 



1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is immutable, versus component state is mutable. 

1.  What is middleware?

Middleware is an extension of Redux and can be used to have new functionalities that the application wasn't capable of before. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a part of redux. It allows an asyncronous action to work with data from APIs. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

Connect. 