// for
// let arr = [1,2,3,4,5,6,7];
// console.log(arr[2]);
// console.log(arr[3]);
// let arrl = arr.length - 1;
// for(let i = 0;i<= arrl;i++){
//     console.log(arr[i]);
// }
// // for of
// for(let arr1 of arr){
//     console.log(arr1);
// }
// khai báo 1 mảng số nguyên có 10pt 
// dùng for và for of để lấy tất cả gt trong mảng
// tính tổng pt trong mảng
//khai báo mảng
let arr = [1,2,3,4,5,6,7,8,9,10];
// duyệt phần tử bằng for
let arrl = arr.length -1;
let tongArr= 0;
for(let i = 0; i<= arrl; i++){
    console.log(arr[i]);
    tongArr = tongArr + arr[i];
}
console.log(tongArr);
// for of
for(let arr1 of arr){
    console.log(arr1);
    tongArr = tongArr + arr1;
}
console.log(tongArr);
// khai 1 mảng có ít nhất 10 pt (mảng chứa tên của nyc, cr, trong sáng ngoài tối, ....)
// cho nhập vào 1 tên bất kỳ
// kiểm tra xem nếu có trong mảng có tên đó r thì ghi K nên đâu
// kiểm tra xem nếu k thì thêm vào đầu mảng và thông báo "Đã thêm nyc thành công. Chúc mừng bạn"
