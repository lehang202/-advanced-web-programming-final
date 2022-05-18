//cài đặt module như express, body-parser(để xử lý form) và nodemon (để restart lại sever mỗi khi save code)
//sử dụng lệnh 'npm start' có tác dụng chạy chương trình bằng nodemon, và từ sau không cần phải khởi động lại server thu công mỗi khi lưu code 
const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.set("views", "./views");

app.get('/', (req, res) => {

    res.render('homePage');
})

app.get('/login', (req, res) => {
    return res.render('login');
})

app.get('/user-profile', (req, res) => {
    return res.render('user-profile');
})

app.listen(8080, () => console.log('http://localhost:8080'))