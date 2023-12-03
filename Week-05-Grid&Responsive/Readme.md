# Week 5: CSS GRID & Responsive

## I. CSS Grid

👉Ứng dụng web ngày nay giao diện ngày càng phức tạp nên việc chỉ sử dụng flexbox thực sự vẫn chưa tối ưu. Vì thế mà CSS Grid được sinh ra để giải quyết vấn đề này!!
Tuy nhiên grid chưa được nhiều trình duyệt hỗ trợ như flexbox nên việc sử dụng vẫn còn chưa rộng rãi.

### Tổng quan

![css grid overview](https://images.viblo.asia/c13230f9-c794-4bb6-a5c6-cc94a869a270.png)

### 1. Grid container

### 2. Grid items

### 3. Grid Columns

![Grid Columns](https://www.w3schools.com/css/grid_columns.png)

### 2. Grid Rows

![Grid Rows](https://www.w3schools.com/css/grid_rows.png)

### 3. Grid Gaps

![Grid Gaps](https://www.w3schools.com/css/grid_gaps.png)

### 4. Grid Lines

![Grid Lines](https://www.w3schools.com/css/grid_lines.png)

### 5. Grid Tracks

![Grid Tracks](https://evondev.com/wp-content/uploads/2018/08/grid-tracks.png)

Mở F12 (Inspect Code) để nhìn thấy grid tracks một cách rõ ràng

### 6. Grid Cells

### 7. Grid Area

Tổng không gian , có thể gồm nhiều cells

## Sử dụng CSS GRID

### 1. Định nghĩa một grid(lưới):

Vidu: Biến một div thành một grid container

```css
.grid-container {
  display: grid;
}
```

### 2. Tạo các cột và dòng

Có thể chia số cột và hàng tùy ý (thường dựa vào design thiết kế là 12 cột bằng nhau, đôi khi 8…)

Syntax:
`grid-template-columns`: [cột_1] [cột_2] [cột_3]... [cột_n];
`grid-template-rows`: [hàng_1] [hàng_2] [hàng_3]... [hàng_n];

```css
.grid-container {
  grid-template-columns: 100px 200px 150px;
  grid-template-rows: 100px 200px 100px;
}
```

Đơn vị ở đây có thể dùng px, %, rem, em, vw, vh, auto,
_Ngoài ra: Grid có hỗ trợ thêm đơn vị fr (để phân bổ các items có tỷ lệ với nhau)_

### fraction-unit - fr

```css
.grid-container {
  grid-template-columns: 1fr 2fr 1fr 3fr;
}
```

_Shorthand: repeat()_

```css
grid-template-columns: 10% repeat(4, 20%) 10%;
```

### 3. Grid-gap

- Tạo khoảng cách giữa các phần tử với nhau theo cột và hàng.
- Gồm 2 thuộc tính: `grid-row-gap` va `grid-column-gap`

```css
.grid-container {
  gap: 20px 50px;
}
```

### 4. Grid column, Grid row

Đặt vị trí cho các items

`grid-column-start`, `grid-column-end`, `grid-row-start`,`grid-row-end`

```css
.grid-item {
  grid-column: <start-line> / <end-line>
  grid-row: <start-line> / <end-line>
}
```

### 5. Grid areas:

```css
.grid-container {
  grid-template-areas:
    "h1 h1 h1"
    "h1 h1";
}

.grid-item {
  grid-area: h1;
}
```

### 6. Span

```css
.item {
  grid-column: <start-line> / span <value>;
  grid-row: <start-line> / span <value>;
}
```

### 7. grid-auto-flow

### Khác

Ngoài ra còn có thể sử dụng: `align-items`, `align-self`, `justify-content`, `justify-items`, `place-items`, `justify-self`, `place-self`,...

_👉Tìm hiểu thêm tại: https://css-tricks.com/snippets/css/complete-guide-grid/_

_Example:_

https://gridbyexample.com/examples/

## II. Responsive

Responsive là một tính từ dùng để chỉ một website có khả năng hiển thị độ tương thích trên mọi kích thước của trình duyệt.

![Alt text](image.png)

- **Sử dụng Media Query**

```css
/* Media Query Syntax */
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```

| Value  | Description                                                        |
| ------ | ------------------------------------------------------------------ |
| all    | Được sử dụng cho tất cả các loại thiết bị                          |
| print  | Được sử dụng cho máy in                                            |
| screen | Được sử dụng cho màn hình máy tính, máy tính bảng, điện thoại v.v. |
| speech | Được sử dụng cho trình đọc màn hình "đọc" trang thành tiếng        |

Ví dụ:

```css
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

- **Breakpoint**

```scss
/* Tablet */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  @content;
}

/* Small tablet */
@media screen and (min-width: 480px) and (max-width: 768px) {
  @content;
}

/* Mobile  */
@media screen and (min-width: 320px) and (max-width: 480px) {
  @content;
}
```
