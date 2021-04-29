import { ActionContext } from 'vuex'
import { GET_LIST } from './com'
import { listType } from './store';

export default {
    [GET_LIST]({commit}: ActionContext<listType, unknown>): void {
        console.log('执行了')
        commit(GET_LIST, 'gavin1')
    },
}