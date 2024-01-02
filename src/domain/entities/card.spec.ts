import { beforeEach, describe, expect, it } from "vitest";

import { Card } from "./card";

describe("Card", () => {
	it("should create a card with an id", () => {
		const sut = new Card({
			repetitions: [],
		});

		expect(sut.id).toBeTruthy();
	});

	it("should create a card with the same passed id", () => {
		const id = "valid id";

		const sut = new Card(
			{
				repetitions: [],
			},
			id,
		);

		expect(sut.id).toEqual(id);
	});

	it("should return zero if there are no repetitions", () => {
		const sut = new Card({
			repetitions: [],
		});

		expect(sut.repetitions).toBe(0);
	});
});
