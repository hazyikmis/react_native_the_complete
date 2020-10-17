# The Complete React Native + Hooks Course [2020 Edition]

https://www.udemy.com/course/the-complete-react-native-and-redux-course/

This folder contains all apps' source code

```
npm cache clear -f
npm install
```

# Installation of the project "02-rn-food":

```
$ npx expo-cli init 02-rn-food --npm
```

React Navigation v.4 Installation:

```
$ npm install react-navigation

$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

$ npm install react-navigation-stack @react-native-community/masked-view

//to clear the cache
$ expo r -c
```

vector-icons: https://github.com/expo/vector-icons

# Context in React

https://www.udemy.com/course/the-complete-react-native-and-redux-course/learn/lecture/15707656

Whenever people say to you hey let's manage our state with context or
something like that it's not quite a statement that makes a lot of sense,
again context is just about moving information, and it doesn't necessarily
entirely replace a library like say redux or something like that.

The problem is: Whenever you want to define new context (new data to keep
in Context and share it with children) you need to follow same process done in here in the file /src/context/BlockContext.js:

- create context
- create provider
- define actions/dispatching
- return/export context provider

So, we can use a generic structure (as defined in createDataContext.js) to make it all

# 03-rn-blog: To run this app, you need to run json-server & ngrok, under the jsonserver folder

> Furthermore, you need to change the baseURL defined in the api/jsonServer.js according to ngrok tunnel http address

```
//under "jsonserver", in one terminal
$ npm run db
//under "jsonserver", in another terminal
$ npm run tunnel
//under "03-rn-blog", in 3rd terminal
$ npm start
```

# 04-rn-tracking

test5@test.com / test
Object {
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZjhhZjdmYWQ2ZTZkOTExNTg3Y2YwOGIiLCJpYXQiOjE2MDI5NDI5NzB9.S2vR23JhtMLBaYoGZFDF9gZJfYv5a1kCds2R-IPpVQ8",
}

VERY STRANGE AND UNIQUE DESIGN FOR ability to navigate outside from react navigator.
For example, from your reducers or actions or any other files/components -for example in your from utility files- you can navigate a screen!
CHECK THE STRUCTURE DESIGNED IN "navigationRef.js" & "App.js"

# component ref

A functional component isn't backed by an "instance" of anything, so it can't handle ref's passed to it automatically.

BUT, if you wrap your functional component in forwardRef, then you get the ref and can do whatever you want with it. As a matter of fact, the FancyButton example in react's documentation does exactly this:

```
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// You can now get a ref directly to the DOM button:
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

To just make it crystal clear, you don't have to take the ref and pass it to a DOM node, you can capture it and do whatever you like. I typically do something like this:

```
// this component gets a second argument which is the ref ONLY if it's wrapped in React.forwardRef
const MyFunctionalComponent = React.forwardRef((props,ref) => {

   const someInternalRef = useRef('someValue').current;

   useEffect(() => {
      if(!ref) return;
     // expect that if a ref has been given to this component, it is either a function or an object created by React.createRef();
     typeof ref === 'function' ? ref(someInternalRef) : (ref.current = someInternalRef);

     //  clean up (hint: 99.999% of the time the only time the clean up function will be called is when this component unmounts)
     return () => typeof ref === 'function' ? ref(null) : (ref.current = null);

    // this is to satisfy the exhaustive dependency eslint rule of hooks. In practice, it's **likely** this hook will only ever get fired twice - when the component mounts and when it unmounts as the `ref` and someInternalRef will (again, **likely**) never change.
   },[someInternalRef,ref])

  return (
    ...
  )

});
```
