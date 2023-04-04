import { UserSchema, User } from 'entities/User/model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';
import { getUserAuthData } from './model/selectors/getUserAuthData/getUserAuthData';

export {
    userReducer,
    userActions,
    User,
    UserSchema,
    getUserAuthData,
};
