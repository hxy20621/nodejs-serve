type TupleSplit<T extends any[], L extends number, F = (...a: T) => void> = [
    { init: [], rest: T },
    F extends ((a: infer A, ...z: infer Z) => void) ?
        { init: [A], rest: Z } : never,
    F extends ((a: infer A, b: infer B, ...z: infer Z) => void) ?
        { init: [A, B], rest: Z } : never,
    F extends ((a: infer A, b: infer B, c: infer C, ...z: infer Z) => void) ?
        { init: [A, B, C], rest: Z } : never,
    // etc etc for tuples of length 4 and greater
    ...{ init: T, rest: [] }[]
][L];

type Curried<A extends any[], R> =
    <L extends TupleSplit<A, number>['init']>(...args: L) =>
        0 extends L['length'] ? never :
            0 extends TupleSplit<A, L['length']>['rest']['length'] ? R :
                Curried<TupleSplit<A,L['length']>['rest'], R>;

declare function curry<A extends any[], R>(f: (...args: A)=>R): Curried<A, R>;

export default curry