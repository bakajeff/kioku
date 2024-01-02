import { describe, expect, it } from "vitest";

import { Card } from "./card";

describe("Card", () => {
	it("should create a card with an id", () => {
		const sut = new Card();

		expect(sut.id).toBeTruthy();
	});

	it("should create a card with the same passed id", () => {
		const id = "valid id";

		const sut = new Card(id);

		expect(sut.id).toEqual(id);
	});
});
