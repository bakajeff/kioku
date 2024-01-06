import { ReviewCardUseCase } from "../../domain/interfaces/use-cases/review-card-use-case";
import { ok } from "../helpers/http-helper";
import { Controller } from "../interfaces/controller";
import { HttpResponse } from "../interfaces/http-response";

export class ReviewCardController implements Controller {
	constructor(private readonly reviewCardUseCase: ReviewCardUseCase) {}

	async handle({
		cardId,
		answer,
	}: ReviewCardController.Request): Promise<HttpResponse> {
		await this.reviewCardUseCase.execute({
			cardId,
			answer,
		});

		return ok({});
	}
}

export namespace ReviewCardController {
	export type Request = {
		cardId: string;
		answer: number;
	};
}
