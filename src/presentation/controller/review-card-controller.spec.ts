import { describe, expect, it, vi } from "vitest";
import { ReviewCard } from "../../domain/use-cases/review-card-use-case";
import { ReviewCardController } from "./review-card-controller";

class ReviewCardSpy implements ReviewCard {
	async execute() {}
}

describe("Review Card Controller", () => {
	it("should call ReviewCardUseCase", async () => {
		const reviewCardUseCase = new ReviewCardSpy();
		const reviewCardUseCaseSpy = vi.spyOn(reviewCardUseCase, "execute");
		const sut = new ReviewCardController(reviewCardUseCase);

		await sut.handle({
			cardId: "valid id",
			answer: 0,
		});

		expect(reviewCardUseCaseSpy).toHaveBeenCalled();
	});

	it("should call ReviewCardUseCase with correct values", async () => {
		const reviewCardUseCase = new ReviewCardSpy();
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
		const reviewCardUseCase = new ReviewCardSpy();
		const sut = new ReviewCardController(reviewCardUseCase);

		const response = await sut.handle({
			cardId: "",
			answer: 0,
		});

		expect(response.statusCode).toBe(400);
	});

	it("should return 500 if ReviewCardUseCase throws", async () => {
		const reviewCardUseCase = new ReviewCardSpy();
		vi.spyOn(reviewCardUseCase, "execute").mockRejectedValue(Error());
		const sut = new ReviewCardController(reviewCardUseCase);

		const response = await sut.handle({
			cardId: "any id",
			answer: 0,
		});

		expect(response.statusCode).toBe(500);
	});

	it("should return 204 on success", async () => {
		const reviewCardUseCase = new ReviewCardSpy();
		const reviewCardUseCaseSpy = vi.spyOn(reviewCardUseCase, "execute");
		const sut = new ReviewCardController(reviewCardUseCase);

		const response = await sut.handle({
			cardId: "fc066086-069f-48cf-be1c-efd5ea8cfa3e",
			answer: 5,
		});

		expect(response.statusCode).toBe(204);
	});
});
