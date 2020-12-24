import type {TypeAppState} from 'state/reducers/app/types';
import type {TypeUserState} from 'state/reducers/user/types';

export type TypeStore = {
    app: TypeAppState;
    user: TypeUserState;
};
