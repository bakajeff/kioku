import { ReviewCardUseCase } from "../../domain/interfaces/use-cases/review-card-use-case";

export class ReviewCardController {
	constructor(private readonly reviewCardUseCase: ReviewCardUseCase) {}

	async handle() {
		await this.reviewCardUseCase.execute("", 0);
	}
}
