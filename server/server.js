import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = 3000;

// เปิดใช้งาน CORS เพื่ออนุญาตการเข้าถึงจาก frontend
app.use(cors({
  origin: 'http://localhost:5173', // หรือใช้ "*" ในกรณีทดสอบเฉพาะ
  credentials: true
}));

// แปลง JSON body
app.use(bodyParser.json());

const users = []; // จำลองฐานข้อมูล

// ตัวอย่าง GET
app.get('/users', (req, res) => {
  res.json(users);
});

// ตัวอย่าง POST สำหรับ signup
app.post('/signup', (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newUser = { username, password, email };
  users.push(newUser); // เก็บข้อมูลไว้ใน memory

  console.log('Current users:', users);

  res.status(200).json({ message: 'User registered successfully!' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
