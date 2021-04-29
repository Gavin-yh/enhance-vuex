import { modules } from './modules'

/**
 * 'list/logName': number
 * 
 * 1. 取到每一个namespance中的核心的getter
 * 2. list/logName  拼接对象， 拿namespance拼接上getter方法名
 * 3. user.logName的returnType去取来，  返回值取出来
 */

type GetGetter<Module> = Module extends {getter: infer G} ? G : unknown

type GetGetters<Modules> = {
    [K in keyof Modules]: GetGetter<Modules[K]>
}

type getters = GetGetters<typeof modules>

//  将要做的

type addPreFix<P, K> = `${P & string}/${K & string}`

type GetSpliceKey<P, Module> = addPreFix<P, keyof Module>

type GetSpliceKeys<Modules> = {
    [K in keyof Modules]:  GetSpliceKey<K, Modules[K]>
}[keyof Modules]


type xxx = GetSpliceKeys<getters>


type GetFunc<T, A, B> = T[A & keyof T][B & keyof T[A & keyof T]]

type GetSpliceObj<T> = {
    [K in GetSpliceKeys<T>]: K extends `${infer A}/${infer B}` ? GetFunc<T, A, B> : unknown
}

type moduleGetter = GetSpliceObj<getters>


type getter = {
    [K in keyof moduleGetter]: ReturnType<moduleGetter[K]>
}

export { getter }