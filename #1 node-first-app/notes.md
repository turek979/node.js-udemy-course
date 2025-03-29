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

# Node.js Basics


