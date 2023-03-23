import { UserSchema, User } from 'entities/User/model/types/user';
import { userActions, userReducer } from './model/slice/userSlice';

export {
    userReducer,
    userActions,
    User,
    UserSchema,
};
