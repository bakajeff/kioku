import { describe, expect, it, vi } from "vitest";
import { ReviewCardUseCase } from "../../domain/interfaces/use-cases/review-card-use-case";
import { ReviewCardController } from "./review-card-controller";

class ReviewCardUseCaseSpy implements ReviewCardUseCase {
	async execute() {}
}

describe("Review Card Controller", () => {
	it("should call ReviewCardUseCase", async () => {
		const reviewCardUseCase = new ReviewCardUseCaseSpy();
		const reviewCardUseCaseSpy = vi.spyOn(reviewCardUseCase, "execute");
		const sut = new ReviewCardController(reviewCardUseCase);

		await sut.handle({
			cardId: "valid id",
			answer: 0,
		});

		expect(reviewCardUseCaseSpy).toHaveBeenCalled();
	});

	it("should call ReviewCardUseCase with correct values", async () => {
		const reviewCardUseCase = new ReviewCardUseCaseSpy();
		const reviewCardUseCaseSpy = vi.spyOn(reviewCardUseCase, "execute");
		const sut = new ReviewCardController(reviewCardUseCase);

		await sut.handle({
			cardId: "valid id",
			answer: 0,
		});

		expect(reviewCardUseCaseSpy).toHaveBeenCalledWith({
			cardId: "valid id",
			answer: 0,
		});
	});

	it("should return 400 if no cardId is provided", async () => {
		const reviewCardUseCase = new ReviewCardUseCaseSpy();
		const sut = new ReviewCardController(reviewCardUseCase);

		const response = await sut.handle({
			cardId: "",
			answer: 0,
		});

		expect(response.statusCode).toBe(400);
	});

	it("should return 500 if ReviewCardUseCase throws", async () => {
		const reviewCardUseCase = new ReviewCardUseCaseSpy();
		vi.spyOn(reviewCardUseCase, "execute").mockRejectedValue(Error());
		const sut = new ReviewCardController(reviewCardUseCase);

		const response = await sut.handle({
			cardId: "any id",
			answer: 0,
		});

		expect(response.statusCode).toBe(500);
	});
});
