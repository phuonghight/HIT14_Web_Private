# Week 12: Number, Date, Time and DOM

### References

[I. Number, Date, Time](#i-number-date-time)
[II. DOM](#ii-dom)

#### I. Number, Date, Time

1. Number: parseInt, parseFloat, isNaN, isFinite, isInteger
2. Math: min, max, sqrt, PI, random, round, ceil, floor, trunc
3. Date

```js
const today = new Date();
const day1 = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
const day2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
const day3 = new Date(1995, 11, 17); // the month is 0-indexed
const day4 = new Date(1995, 11, 17, 3, 24, 0);
const day5 = new Date(628021800000); // passing epoch timestamp
```

```js
const today = new Date();
console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.toISOString());
console.log(today.getTime());
```

4. Timer

- setTimeout, clearTimeout
- setTimeInterval

#### II. DOM

DOM là viết tắt của Document Object Model, là một giao diện lập trình ứng dụng (API) cho JavaScript, cho phép JavaScript truy cập và thao tác các phần tử HTML trong một trang web. JS DOM đại diện cho một trang web dưới dạng một cây đối tượng, trong đó mỗi phần tử HTML được biểu thị bởi một đối tượng.
![DOM tree](https://topdev.vn/blog/wp-content/uploads/2021/01/dom-la-gi.gif)

Các thành phần chính của DOM bao gồm:

- Document là đối tượng đại diện cho toàn bộ tài liệu HTML.
- Element là đối tượng đại diện cho một phần tử HTML.
- Attribute là đối tượng đại diện cho một thuộc tính HTML.
- Event là đối tượng đại diện cho một sự kiện HTML.

**1. Selecting Elements:**

- querySelector
- querySelectorAll
- getElementById
- getElementsByTagName
- getElementsByClassName

**2. Creating Elements:**

- createElement
- innerHTML, textContent, append, insertAdjacentHTML

**3. Delete elements: remove, removeChild**

**4. Styles, Attributes and Classes**

- Styles: style
- Attributes: getAttribute, setAttribute, dataset
- Classes: add, remove, toggle, contains

**5. Types of Events and Event Handlers**

- [Type of Events](https://www.w3schools.com/jsref/dom_obj_event.asp)
- Event Handlers: addEventListener, removeEventListener
- Event Propagation
