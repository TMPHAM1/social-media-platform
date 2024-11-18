import { getUserByUsername } from "~/server/db/users";
import bcrypt from 'bcrypt'
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshTokens";
import { sendError } from "h3";


export default defineEventHandler( async(event)=>{
    const body = await readBody(event);
    const {username, password} = body

    if (!username || !password) {
        return sendError(event, createError( {
            statusCode: 400,
            statusMessage: 'Invalid params',
        }))
    }

    // Check if user is registered
    const user = await getUserByUsername(username); 

    if(!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or Password is invalid'
        }))
    }

    // Compare passwords
    const doThePasswordsMatch = await bcrypt.compare(password, user.password);

    if (!doThePasswordsMatch){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or Password is invalid'
        }))
    }
    //Generate Tokens
        //Access Token
        // Refresh Token
        const {accessToken, refreshToken} = generateTokens(user);

        // Save it inside the DB
        await createRefreshToken({
            token: refreshToken,
            userId: user.id
        })

        // Add HTTP Only Cookie
        sendRefreshToken(event, refreshToken)

    return {   
        access_token: accessToken,
        user: userTransformer(user),
    }
})