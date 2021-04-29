import { GET_LIST } from "./com"
import { listType } from './store';

const mutations = {
   [GET_LIST](state: listType, payload: string): void {
       console.log('mutation执行')
       state.name = payload
   }
}

export default mutations