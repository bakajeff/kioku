import { beforeEach, describe, expect, it } from "vitest";

import { Card, CardProps } from "./card";

describe("Card", () => {
	let sut: Card;

	beforeEach(() => {
		sut = new Card({
			repetitions: [],
			easiness: 1,
			daysUntilNextReview: 2,
		});
	});

	it("should create a card with an id", () => {
		expect(sut.id).toBeTruthy();
	});

	it("should create a card with the same passed id", () => {
		const id = "valid id";

		const sut = new Card(
			{
				repetitions: [],
				easiness: 1,
				daysUntilNextReview: 2,
			},
			id,
		);

		expect(sut.id).toEqual(id);
	});

	it("should return zero if there are no repetitions", () => {
		expect(sut.repetitions).toBe(0);
	});
});
