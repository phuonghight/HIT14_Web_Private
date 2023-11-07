# Nội dung Buổi 5: CSS Position & Animation

### I. CSS Position

1. [Các loại position](https://www.w3schools.com/cssref/pr_class_position.php)

- **static**: là giá trị mặc định của position, các phần tử hiển thị theo thứ tự khi chúng xuất hiện trong bố cục trang web.
- **absolute**: phần tử được định vị tuyệt đối hoặc cố định phụ thuộc vào phần tử cha(không phải static) của nó
- **relative**: phần tử được định vị vị trí tương đối so với vị trí mặc định ban đầu của nó thông qua các thuộc tính phụ như top,right,bottom, left…
- **fixed**: phần tử được định vị vị trí tương đối so với cửa sổ trình duyệt.

2. Các thuộc tính đi kèm: top, right, bottom, left
   ![enter image description here](https://drive.google.com/uc?id=1i01jOFuwtkXBnAIdW1vyszX3-uaJGYvd)
3. Menu đa cấp (drop-down menu)

### II. Animation

1. **Animation** sử dụng để tạo hiệu ứng di chuyển cho các phần tử
2. Để tạo một chuyển động **Animation** cần phải có các **keyframe**. Mỗi **keyframe** sẽ được chạy ở một thời điểm xác định và trong **keyframe** đó nó quy định việc phần tử sẽ di chuyển ra sao.

```css
@keyframes example {
  from {
    background-color: pink;
  }
  to {
    background-color: purple;
  }
}
@keyframes example {
  0% {
    background-color: crimson;
  }
  25% {
    background-color: lightsalmon;
  }
  50% {
    background-color: pink;
  }
  100% {
    background-color: indigo;
  }
}
```

3. Các thuộc tính:
   - animation-name: Tên animation
   - animation-duration: thời gian của animation 1 chu kỳ
   - animation-timing-function: tốc độ animation
   - animation-delay: thời gian delay của animation
   - animation-iteration-count: số lần thực hiện animation
   - aniamtion-direction: hướng của animation
   - animation-fill-mode: thay đổi trạng thái của phần tử trước khi bắt đầu sau khi kết thúc Animation.
