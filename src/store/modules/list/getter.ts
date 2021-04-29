import { listType } from './store';

const listGet = {
    logName: (state: listType): string => {
        return `${state.name}, getter`
    }
}

export default listGet