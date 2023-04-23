import express from 'express'
import mongoose from 'mongoose'
const app = express()

mongoose.connect('mongodb://localhost:27017/news', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.once('open', function () {
  console.log('数据库连接成功')
})

db.on('error', function (error) {
  console.error('Error in MongoDb connection: ' + error)
  mongoose.disconnect()
})

app.listen(5000, () => {
  console.log('Server is running on port 3000')
})
