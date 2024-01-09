# Week 12: Asynchronous

### References

[I. Synchronous and Asynchronous](#i-synchronous-and-asynchronous)
[II. Callback Hell](#ii-callback-hell)
[III. Promises](#iii-promises)
[IV. Promises with Async/Await](#iv-promises-with-asyncawait)

#### I. Synchronous and Asynchronous

**1. Synchronous: các câu lệnh chạy tuần tự nhau, lệnh trước chạy xong thì lệnh sau mới có thể chạy.**

```
Task A > Task B > Task C
Task X > Task Y so slowwwwwwwwww > Task Z
```

**2. Asynchronous: các câu lệnh chạy có thể không theo thứ tự, lệnh chạy trước có thể kết thúc sau câu lệnh chạy sau.**

Bất đồng bộ có hai dạng:

- Asynchronous trong đơn luồng (single-threaded)
- Asynchronous trong đa luồng (multi-threaded)

**3. Javascript asynchronous: Code JS là đơn luồng và hoàn toàn đồng bộ. Chỉ có những tác vụ sử dụng WebAPIs (do browser) như AJAX, timeout,... thì JS mới thực thi chúng dạng bất đồng bộ.**

#### II. Callback Hell

![](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VH2f5KmjKwlBaEYyOmSE2g.png)

#### III. Promises

**1. Promise là đối tượng đại diện cho kết quả của hành động nào đó sẽ hoàn thành trong tương lai, kết quả trả về sẽ là resolve nếu thành công và reject nếu thất bại.**

- Sinh ra để xử lý bất đồng bộ, trước khi có promise thì dùng callback, dễ bị callback held, khó nhìn

**2. Một promise từ khi tạo ra tới khi kết thúc sẽ có các trạng thái (state) sau**

- Pending: promise đang thực hiện chưa xong
- Full filled: trạng thái đã thực hiện xong, kết quả thành công
- Rejected: trạng thái đã thực hiện xong, kết quả thất bại

**3. Tạo một Promise: Truyền vào một excutor function**

```js
const promise = new Promise(function (resolve, reject) {
  // Thực hiện lệnh bất đồng bộ
  if (success) resolve();
  else reject();
});
```

- Thực hiện một số lệnh, thường có một lệnh bất đồng bộ
- Gọi resolve() để báo kết quả thành công, gọi reject để báo thất bại

**4. Promise methods: all, allSelected, race, resolve, reject**

#### IV. Promises with Async/Await

**Async/await được sinh ra để giúp code gọn gàng hơn.
Async/await làm cho code bất đồng bộ trở nên có vẻ giống đồng bộ, do đó dễ đọc hơn.**

```js
function asyncFunction() {
  return new Promise();
}

asyncFunction()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    // Thanh cong hay Loi deu chay
  });

async function someFunction() {
  try {
    const res = await asyncFunction();
    console.log(res);
  } catch (err) {
    console.log(err);
  } finally {
    // Thanh cong hay Loi deu chay
  }
}
someFunction();
```

`api = https://restcountries.com/v3.1/name/{name}`
