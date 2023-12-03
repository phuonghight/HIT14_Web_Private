# Nội dung Buổi 3: CSS Selector

## **I. CSS Selector**

[CSS Selector Reference - w3school](https://www.w3schools.com/cssref/css_selectors.php)

Hiểu đơn giản **CSS Selector** là thứ cho phép chọn mục tiêu tới các phần tử HTML để áp dụng các thuộc tính CSS cho chúng.

![Some image for CSS Selector](https://res.cloudinary.com/practicaldev/image/fetch/s--AuDj3vTU--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/edojfcbz6sr7j0b2l6v1.jpg)

#### 1. Basic CSS Selector: element / class / id

```html
<div id="app">
  <div class="container">
    <p class="hello">Hello</p>
    <p class="hola">Hola</p>
  </div>
  <div class="other">I am left behind...</div>
</div>
```

- Element

```css
p {
  color: blue;
}
div {
  color: magenta;
}
```

- Class

```css
.hello {
  color: red;
}
```

- Id

```css
#app {
  color: red;
}
```

- Tất cả

```css
* {
  color: yellow;
}
```

#### 2. Descendant CSS Selector: Chọn element hậu duệ

```html
<div class="container">
  <div class="paragraph-container">
    <p id="hola-id" class="hola-class">Hola World</p>
    <p class="hello-class">Hello World</p>
    <p class="hello-class again-class asdasda">Hello Again World</p>
  </div>
</div>
```

- Chọn element con qua element cha

```css
.container .hello-class {
  color: red;
}
```

- Chọn trực tiếp element con

```css
.paragraph-container > .hello-class {
  color: blue;
}

/* Không hoạt động */
.container > .hello-class {
  color: blue;
}
```

#### 3. Multiple CSS Selector: Muốn nhiều element k liên quan nhưng có chung style nào đó

```html
<div class="container">
  <div class="paragraph-container">
    <p id="hola-id" class="hola-class">Hola World</p>
    <p class="hello-class">Hello World</p>
    <p class="hello-class again-class">Hello Again World</p>
  </div>
  <p class="outside-class">I'm outside</p>
</div>
```

- Dùng dấu , để ngăn cách giữa nhiều element / class / id

```css
.outside-class,
.again-class,
.hola-class {
  color: purple;
}
```

#### 4. Combination CSS Selector: Chọn element rất cụ thể

```css
.hello-class.again-class {
  color: yellow;
}
```

#### 5. Sibling CSS Selector: Chọn các element anh chị em thông qua element nào đó

- Dùng + để chọn element cùng cấp liền kề đầu tiên ngay sau nó

```css
#hola-id + .hello-class {
  color: blue;
}

/* Không hoạt động vì .again-class không liền kề ngay sau #hola-id  */
#hola-id + .again-class {
  color: blue;
}
```

- Dùng ~ để chọn tất cả element cùng cấp liền kề đằng sau

```css
#hola-id ~ .hello-class {
  color: purple;
}

/* Không hoạt động vì .again-class đứng sau #hola-id  */
.again-class ~ #hola-id {
  color: red;
}
```

#### 6. Pseudo CSS Selector

```html
<div class="container">
  <div class="paragraph-container">
    <p id="hola-id" class="hola-class">Hola world</p>
    <p class="hello-class">Hello world</p>
    <p class="hello-class again-class">Hello again world</p>
  </div>
  <p class="outside-class">I'm outside</p>
  <ul id="list-id" class="list-class">
    <li class="list-item-class">First</li>
    <li class="list-item-class">Second</li>
    <li class="list-item-class">Third</li>
    <li class="list-item-class">Fourth</li>
    <li class="list-item-class">Fifth</li>
  </ul>
  <div class="single-paragraph-container">
    <p>I'm the only child of this span</p>
  </div>
</div>
```

- Dùng `A:first-child` để chọn element A là con đầu tiên so với element cha của A

```css
li:first-child {
  color: blue;
}

/* Không hoạt động vì ul là con thứ 3 của .container  */
ul:first-child {
  color: red;
}
```

- Dùng `A:last-child` để chọn element A là con cuối cùng so với element cha của A

```css
li:last-child {
  color: purple;
}
```

- Dùng `A:nth-child(n)` để chọn element A là con thứ n so với element cha của A

```css
li:nth-child(2) {
  color: red;
}
p:nth-child(2) {
  color: red;
}
li:nth-last-child(2) {
  color: red;
}
```

_`A:nth-child(odd)` và `A:nth-child(even)` để chọn các phần tử con thứ lẻ hoặc chẵn_

- Dùng `A:not(B)` để chọn element A không phải là B (thường là class)

```css
p:not(.outside-class) {
  color: blue;
}
```

- Dùng `A:hover` để style cho A khi di chuột vào A

```css
p:hover {
  color: aqua;
}
```

- `::before` và `::after`
- `:checked`, `:focus`, `:active`, `:visited`

#### 7. Attribute CSS Selector

## **II. Thứ tự ưu tiên trong CSS**

Có 3 cách sử dụng css để style cho các thẻ trong HTLM

1.
2.
3.

| Cách dùng css | Thứ tự ưu tiên | Điểm số |
| ------------- | -------------- | ------- |
| !important    | 1              | +∞      |
| inline        | 2              | 1000    |
| id            | 3              | 100     |
| class         | 4              | 10      |
| tag           | 5              | 1       |

Tổng điểm sẽ quyết định style cho element

## **III. Quy tắc đặt tên BEM**

**1. Khái niệm**

- BEM là quy tắc đặt tên cho class trong HTML
- BEM là viết tắt của từ Block, Element, Modifier

![enter image description here](https://i.ytimg.com/vi/qDk4wfVxvIM/maxresdefault.jpg)

**2. Quy ước đặt tên**

```css
.block {
} /* Block */
.block__element {
} /* Block + Element */
.block--modifier {
} /* Block + Modifier */
.block__element--modifier {
} /* Block + Element + Modifier */
```

**3. Ví dụ**

```html
<div class="info">
  <div class="info__title">This is title</div>
  <div class="info__description">
    <div class="info__description--green">This is green description</div>
    <div class="info__description--red">This is red description</div>
  </div>
</div>
```

## **IV. Layout**

## **V. Flexbox**

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

**Cấu trúc của FlexBox**

![](https://images.viblo.asia/0c116fbb-972d-4162-8506-bac8605cd704.png)

1. `display`: đặt ở phần tử cha để áp dụng flexbox

```css
.container {
  display: flex;
}
```

2. `flex-direction`: chỉ định hướng hiển thị của các item

_Lưu ý: Chiều hiển thị mặc định sẽ là từ trái -> phải, từ trên -> dưới_

- row (default): left to right
- row-reverse: right to left
- column: same as row, but top to bottom
- column-reverse: same as row-reverse but bottom to top

3. `flex-wrap`:

Mặc định các flex-item sẽ cố gắng nằm vừa trên 1 dòng

- nowrap (default): tất cả phần tử đều nằm trên cùng 1 dòng
- wrap: các phần tử sẽ xuống dòng theo chiều (top -> bottom)
- wrap-reverse: các phần tử sẽ xuống dòng theo chiều (bottom -> top)

4. `flex-flow`: Cách viết tắt của `flex-direction` và `flex-wrap`:
   default: row nowrap

```css
.container {
  flex-flow: column wrap;
}
```

5. `justify-content`: tùy chỉnh linh hoạt khoảng trống theo trục main

- flex-start (default): các items sẽ được đồn về phía start của flex-direction.
- flex-end: các items sẽ được đồn về phía end của flex-direction.
- center: các items sẽ được căn giữa theo trục main
- space-between: Các items được phân bổ đều, bắt đầu ở đầu trục và kết thúc ở cuối trục
- space-around: Các items được phân bổ đều với khoảng cách xung quanh chúng bằng nhau
- space-evenly: Các items được phân bổ sao cho khoảng cách giữa nó đến các cạnh gần chúng bằng nhau

6. `align-items`:

- stretch (default): kéo dài để lấp đầy container
- flex-start:
- flex-end:
- center: icác items sẽ được căn giữa theo trục cross

7. `align-content`: tùy chỉnh linh hoạt khoảng trống theo trục cross

8. `gap`, `row-gap`, `column-gap`

```css
.container {
  display: flex;
  ...
  gap: 10px;
  gap: 10px 20px; /* row-gap column gap */
  row-gap: 10px;
  column-gap: 20px;
}
```

9. `align-self`:
10. `order`:
11. `flex-grow`:
12. `flex-shrink`:
13. `flex-basis`:
