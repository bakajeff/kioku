import { ReviewCardUseCase } from "../../domain/interfaces/use-cases/review-card-use-case";
import { badRequest, noContent, serverError } from "../helpers/http-helper";
import { Controller } from "../interfaces/controller";
import { HttpResponse } from "../interfaces/http-response";

export class ReviewCardController implements Controller {
	constructor(private readonly reviewCardUseCase: ReviewCardUseCase) {}

	async handle({
		cardId,
		answer,
	}: ReviewCardController.Request): Promise<HttpResponse> {
		try {
			if (!cardId) {
				return badRequest(Error("cardId is a required field"));
			}

			await this.reviewCardUseCase.execute({
				cardId,
				answer,
			});

			return noContent();
		} catch (error) {
			return serverError(error);
		}
	}
}

export namespace ReviewCardController {
	export type Request = {
		cardId: string;
		answer: number;
	};
}
