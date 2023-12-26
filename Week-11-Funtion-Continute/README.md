# Week 11: Function (Continute)

## References

[I. Callback](#i-callback)
[II. Closures](#ii-closures)
[II. This keyword](#iii-this-keyword)
[II. Call, Apply, Bind](#iv-call-apply-bind)

#### I. Callback

#### II. Closures

- Là một hàm:
  - có thể ghi nhớ nơi nó tạo ra
  - biến trong closure sẽ là tham chiếu (không được xóa mặc dù đã trả về)

#### III. This keyword

This trong Javascript là đối tượng mà nó thuộc về

- Trong 1 hàm thì this trỏ đến đối tượng gọi cái hàm đó
- Không trong hàm thì this trỏ đến đối tượng window

#### IV. Call, Apply, Bind

Call, Apply, Bind là các phương thức làm this trỏ đến đối tượng khác
