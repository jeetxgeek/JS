# Javascript and classes

Yes, JavaScript (JS) really does have classes, but there's an important distinction:

JavaScript classes are syntactic sugar over its prototype-based inheritance system.

## So what does that mean?
🔹 Before ES6 (2015):
JavaScript didn’t have class syntax.

Objects were created using constructor functions and inheritance was done via prototypes.

```javascript
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
};

const p1 = new Person('Jeetesh');
p1.sayHello();  // Hello, I'm Jeetesh
```

### After ES6 (2015):
JavaScript introduced the class keyword for a cleaner, more familiar syntax (like Java/C++).

Internally, it still uses prototypes.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

const p1 = new Person('Jeetesh');
p1.sayHello();  // Hello, I'm Jeetesh
```
✅ Same behavior as the previous example, just easier to write and understand.

# Example: Inheritance in JS classes

```javascript
class Animal {
    speak() {
        console.log('Animal speaks');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}

const d = new Dog();
d.speak();  // Dog barks
```
## 🔍 But Remember:
```
=> Even with class syntax, JS is still not class-based internally like Java or C++ — it's prototype-based, and classes are just a nice way to define behavior.

=> The class syntax (introduced in ES6) provides a more familiar interface for developers coming from class-based languages, but under the hood, JavaScript still uses prototypal inheritance. Objects are linked to other objects through the prototype chain, not through class hierarchies.


=> So while JavaScript "has" classes in terms of syntax, it doesn't have classes in the traditional object-oriented sense. 

=> It's a prototype-based language that borrowed class syntax for convenience and familiarity. This is why you can still do things like modify prototypes at runtime, which isn't possible with true classes in most other languages.
```


## OOP

## Object
- collection of properties and methods
- toLowerCase

## why use OOP

## Parts of OOP
Object literal 

- Constructor function
- Prototypes
- Classes
- Instances (new, this)


## 4 pillars
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
