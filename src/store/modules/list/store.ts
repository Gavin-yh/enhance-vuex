// 接口不是乱用的，不要为了interface，而interface

// 比如固定的值，用type获取类型

export const list = () => {
    return {
        name: "gavin"
    }
}

export type listType = ReturnType<typeof list>  //类型推导
