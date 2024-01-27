# _Chapter 05 - Lets get hooked_

## Q: What is the difference between Named Export, Default export and \* as export?

A: Named export is used when we want to export multiple components/modules from a single file,in named imports we need to use {},Default exports is used when a single module has to be exported,in one file only one default export is possible,we can also use a combination of both named and default exports.\* as Export syntax allows you to import all named exports from a module as properties of a single object.

## Q: What is the importance of config.js file

A:One purpose to add config.js file is to use static data which needs to be used all over the application.

## Q:What are React Hooks?

A: React hooks are basically functions,they are prebuilt functions given to us by react,they are utility functions

## Q: Why do we need a useState Hook?

A: We need useState hooks because,components need to change all the time due to the interaction,like clicking next on a image corosel,or adding things to a shopping cart,This component specific memory is called state,A component cannot just change itself because local variables dont persist between renders and changes to these local variables wont trigger a render on its own,To do all this useState() hook comes into the picture,useState() provides a powerful state variable, useState() hook returs an array,this array contains 2 fields ,the first one is the state variable and other is the setState function which updates the state variable,whenever a state is updated,react automatically re renders the component.
