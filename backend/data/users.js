import bcrypt from 'bcryptjs'


export const users = [
 {   
     name: 'yaakov',
    email: 'yaakovhasapar@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
 {   
     name: 'yosef',
    email: 'yosef604@gmail.com',
    password: bcrypt.hashSync('123', 10),
    isAdmin: true
},

]