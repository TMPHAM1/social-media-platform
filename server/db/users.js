import {prisma} from ".";
import bcrypt from 'bcrypt'
export const createUser = (userData) => {
    const finalUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
    };
    console.log('THIS IS PRISMA', prisma);
    return prisma.user.create({
        data: finalUserData
    })
}

