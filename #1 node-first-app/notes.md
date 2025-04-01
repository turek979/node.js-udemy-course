# What is node.js?

Node.js is a Javascript runtime. A runtime is a tool that allows this language to run on a server instead of a browser. It has some new features and can't use some features from base javascript.

# Node.js' role 

Unlike PHP, with node.js you don't just write code that runs on a server. You also write the server yourself.

    1. Run Server
    Create Server & Listen to Incoming Requests
    2. Buisness Logic
    Handle Requests, Validate Input, Connect to Database
    3. Responses
    Return Responses (Rendered HTML, JSON, ...)

# Alternatives

Python (Django, Flask), PHP (Laravel, vanilla), ASP.NET, Ruby on Rails

# The REPL

It is a way to execute node code. You can use it by typing "node" into terminal. It is good for playing around and execute code as you write it.

REPL Stands for:
Read -> Read user input
Eval -> Evaluate user input
Print -> Print output (Result)
Loop -> Wait for new input

Alternative way is to execute files.

# Javascript refresher

JavaScript is a Weakly Typed and Object Oriented Programming language.
Weakly typed means there is no explicit type assignment. Data types can be switched dynamically.
Object oriented meands data can be organized in logical objects.

Primitive vs Reference types!!!

In JavaScript, primitive types (such as `string`, `number`, `boolean`, `null`, `undefined`, `Symbol`, and `BigInt`) are stored directly in memory and are immutable, meaning their values cannot be changed once assigned. When assigned to a new variable, a copy of the value is made. In contrast, reference types (such as `Object`, `Array`, and `Function`) are stored by reference, meaning the variable holds a reference to the memory location where the object is stored. Modifying a reference type affects all variables pointing to the same object. Primitive types are compared by value, while reference types are compared by their memory reference, making their behavior fundamentally different when copying or modifying data.

# The Event Loop Explained

1. Timers
At first Event loop looks for Timers and executes setTimeout()/setInterval() Callbacks.
2. Pending Callbacks
Then it executes pending callbacks like I/O or deferred callbacks. If there are to many callbacks it sends them (deffers) to the next iteration to not block the event loop.
3. Poll
After that it enteres the poll phase where it looks for new I/O events and execute their callbacks if possible or deffers them.
4. Check
Next is the check phase where it executes setImmediate() callbacks. setImmediate() executes after the current cycle but faster than lets say setTimeout with 1ms of open duration.
5. Close Callbacks
Another one are the Close Callbacks that executes any close events(?).
6. Exit or repeat
After all of these callbacks we might exit the loop using process.exit when there are no remaining event handlers which are registered (refs == 0). In a server enviorment we create server and its listener is never resolved by default hence the refs are always >=1 and the server keeps running the loop.
While not using web server functionality for example when using fs, this would end the program.

# Module Summary

How the Web Works
Client => Request => Server => Response => Client

Program Lifecycle & Event Loop
Node.js runs non-blocking JS code and uses an event- driven code ("Event Loop") for running your logic
A Node program exits as soon as there is no more work to do
Note: The createServer() event never finishes by default

Asynchronous Code
JS code is non-blocking 
Use callbacks and events => Order changes!

Requests & Responses
Parse request data in chunks (Streams & Buffers) 
Avoid "double responses"

Node.js & Core Modules
Node.js ships with multiple core modules (http, fs, path, ...) 
Core modules can be imported into any file to be used there 
Import via require('module')

The Node Module System
Import via require('./path- to-file') for custom files or require('module') for core & third-party modules 
Export via module.exports or just exports (for multiple exports)