import { listType } from './store';

const listGet2 = {
    logName2: (state: listType): string => {
        return `${state.name}, getter`
    }
}

export default listGet2