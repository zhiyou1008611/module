import Mock from 'mockjs'
Mock.mock('/api/user/login', {
    "status": 0,
    "data": {
        "id|0-99": 0,
        "username": "@cname",
        "email": "10086@163.com",
        "phone|1-9": 10086,
        "role": 0,
        "createTime": 12790348512000,
        "ypdateTime": 12790348512000
    }
})