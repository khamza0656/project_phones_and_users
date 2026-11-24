import User from "../models/User.js";
import router from "../routes/userRoutes.js";
import tokenService from "../services/tokenService.js";

class Auth{
    async authUser(req , res){

        try{
            //достаем токен из заголовка а именно из headers => authorezation
                const token = tokenService.extractToken(req)

                if(!token){
                    return res.status(401).json({message: "Нет токена"})
                }
                //Проверим подпись и срок (далее расшиф)
                const payload = tokenService.verifyToken(token)

                //3 ищем пользователя по id

                const user = await User.findById(payload._id)
                if(!user){
                    return res.status(401).json({message: "пользователь не найден"})
                    
                }
                // Кладем в req.user нашего пользователя и идем дальше
                req.user = user
                next()

        }catch(err){
            res.status(401).json({message: "Невалидный токен"})
        }
    }
}

export default new Auth()