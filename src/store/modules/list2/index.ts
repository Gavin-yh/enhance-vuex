import { list2 } from "./store";
import mutations from './mutation';
import getter from './getter'
import actions from './action'

const state = list2()

export default {
    namespace: true,
    state,
    getter,
    mutations,
    actions,
}