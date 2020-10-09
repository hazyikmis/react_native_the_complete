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
