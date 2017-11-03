# Frontend
Now we have a functioning API. Let's build a frontend that can communicate with that API to show us data, but how? The answer is AngluarJS.

**Note**: *AngularJS refers to version 1.x of Angular, if you talk about Angular you are referring to Angular 2+.*

## AngularJS
AngularJS is a framework built on Javascript by Google that runs on the client side. This means that Angular does not run on the server, it runs on the web browser of the people visiting the website. It's objective is to make websites more interactive.

### How to start
First we will need a normal HTML file, and there we will add AngularJS as a script and also an Angular directive to tell our HTML that it is an Angular app.

```HTML
<!DOCTYPE html>
<html lang="en" ng-app="quotesApp">
<head>
    <meta charset="UTF-8">
    <title>QuotesApp</title>
</head>
<body>

<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>

</body>
</html>
```

### Expresions
AngularJS expressions are written inside double braces: {{ expression }}.
AngularJS will "output" data exactly where the expression is written. They can contain literals, operators, and variables.
You can write expressions wherever you like, AngularJS will simply resolve the expression and return the result.
For example this could be an expression:
```HTML
<h1>The sky is {{ 2>1 }}ly blue</h1>
```
If angular is working correctly you should be seeing **The sky is truely blue**.

### Directives

### Modules
Modules are simply an elegant way to separate your code so it can be more readable and easier to debug. To declare a module simply make a .js file

### Router

### Controllers

### Services
$http
