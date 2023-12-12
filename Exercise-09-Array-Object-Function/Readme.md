# Exercise Week 09: Array, Object and Function

- Tạo folder gồm 5 file .js ứng với 6 bài
- Nộp link Github của folder trên

#### 1. BMI

Tạo 2 object gồm: fullName, height, weight và calcBMI biết:
`BMI = mass / height ** 2 = mass / (height * height)`
So sánh chỉ số BMI của 2 đối tượng trên và in ra console

#### 2. Cộng 1

Cho 1 số nguyên lớn. Hãy viết hàm trả về mảng các chữ số của số nguyên lớn đã cho sau khi tăng thêm 1

Ví dụ:

| Input         | Return          |
| ------------- | --------------- |
| digits = 1234 | [1, 2, 3, 5]    |
| digits = 9999 | [1, 0, 0, 0, 0] |

#### 3. Tổng 2 số

Cho 1 mảng số nguyên và 1 số nguyên target. Viết hàm trả về mảng lưu trữ vị trí của 2 số trong mảng đã cho sao cho tổng của 2 số đó bằng target. (Giả sử input chắc chắn có giải pháp và không được sử dụng 1 phần tử 2 lần)

Ví dụ:

| Input                             | Return | Explanation           |
| --------------------------------- | ------ | --------------------- |
| nums = [2, 7, 11, 15], target = 9 | [0, 1] | nums[0] + nums[1] = 9 |
| nums = [3, 2, 4], target = 6      | [1, 2] | nums[1] + nums[2] = 6 |

#### 4. Tam giác Pascal

Cho một số nguyên dương n, viết hàm trả về n đầu tiên của tam giác Pascal.
Trong tam giác Pascal, mỗi số bằng tổng của hai số ngay phía trên nó như hình vẽ

![](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)

| Input | Return                                     |
| ----- | ------------------------------------------ |
| n = 5 | \[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]] |
| n = 1 | \[[1]]                                     |

#### 5. Di chuyển số 0

Cho 1 mảng số nguyên, viết hàm di chuyển tất cả phần tử 0 xuống cuối mảng sao cho vẫn duy trì thứ tự tương đối của các phần tử khác

| Input         | Return        |
| ------------- | ------------- |
| \[0,1,0,3,12] | \[1,3,12,0,0] |
| \[0]          | \[0]          |
