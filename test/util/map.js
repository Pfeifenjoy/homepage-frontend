//@flow
import { map } from "../../src/util"
import assert from "assert"

export default () => {
	describe("map", () => {
		const numbers = [1, 2, 3, 4, 5, 6, 7]
		const numbers_plus_1 = map(x => x + 1)(numbers)
		it("add one to all members", () => {
			assert.deepEqual(numbers_plus_1, [2, 3, 4, 5, 6, 7, 8])
		})
	})
}
