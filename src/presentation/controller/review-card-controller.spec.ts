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

		await sut.handle();

		expect(reviewCardUseCaseSpy).toHaveBeenCalled();
	});
});
