# Exercise Week 10: Array Method and Javascript ES6

- Tạo folder gồm 2 file .js ứng với 6 bài
- Nộp link Github của folder trên

#### 1. Trung bình cộng

Cho một mảng số nguyên dương bao gồm tuổi của mèo. Dùng các array method để:

- Tìm một mảng mới bao gồm tuổi của chủ nhân của các con mèo trên biết:
  - Nếu tuổi của mèo <= 2 thì tuổi của người = tuổi của mèo \* 2
  - Nếu tuổi của mèo > 2 thì tuổi của người = tuổi của mèo \* 4 + 16
- Tìm một mảng mới chứa tuổi của người lớn (>= 18 tuổi)
- Tính trung bình cộng tuổi của người lớn

#### 2. Nhà huấn luyện chó tài ba

Cho một mảng chứa thông tin của những chú chó như sau:

```js
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];
```

K và T đang huấn luyện những chú chó, và lần này phải huấn luyện những chú chó béo (ăn quá nhiều) và những chú chó gầy (ăn quá ít)

Những chú chó ăn quá nhiều là những chú chó ăn nhiều hơn lượng thức ăn được recommended, những chú chó ăn quá ít thì ngược lại
Những chú chó ăn đủ lượng thức ăn được recommended là những chú chó ăn không dưới 10% và không quá 10% lượng thức ăn được recommended

- Hãy tính lượng thức ăn recommended và lưu thành 1 thuộc tính (recFood) cho từng chú chó.
  Biết `recommended food = weight ** 0.75 * 28`
- Tìm chú chó của Sarah và in ra console nếu nó ăn quá nhiều hoặc quá ít
- Tạo một mảng chứa tất cả chủ nhân của những chú chó ăn quá nhiều (ownersEatTooMuch) và một mảng chứa tất cả chủ nhân của những chú chó ăn quá ít (ownersEatTooLittle)
- Từ 2 mảng trên hãy in ra `A and B and C's dogs eat too much!` và `D and E and F's dogs eat too little!`
- In ra consle xem có chú chó nào ăn CHÍNH XÁC lượng thức ăn được recommended hay không (chỉ in true hoặc false)
- In ra consle xem có chú chó nào ăn ĐỦ lượng thức ăn hay không (chỉ in true hoặc false)
- Tạo một mảng chứa những chú chó ăn đủ lượng thức ăn
- Tạo một mảng shallow copy từ mảng đã cho và sắp xếp tăng dần theo lượng thức ăn recommended
