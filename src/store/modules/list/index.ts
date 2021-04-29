import { list } from "./store";
import mutations from './mutation';
import getter from './getter'
import actions from './action'

const state = list()

export default {
    namespace: true,
    state,
    getter,
    mutations,
    actions,
}