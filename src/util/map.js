//@flow

export default <A, B>(f: (A, number) => B) => (elements: Array<A>) => elements.map(f)

