# Week 13: Javascript OOP

### References

[I. Constructor Functions](#i-constructor-functions)
[II. Prototypes](#ii-prototypes)
[III. Classes (ES6)](#iii-classes-es6)

#### I. Constructor Functions

1.  New {} is created
2.  function is called, this = {}
3.  {} linked to prototype
4.  function automatically return {}

```js
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

// Inheritance
const Student = function (name, birthYear, school) {
  Person.call(this, name, birthYear);
  this.school = school;
};
```

#### II. Prototypes

#### III. Classes (ES6)

1. Class declaration
2. Property, method
3. Getter, Setter
4. Inheritance
5. static method
