export interface ReviewCard {
	execute(review: ReviewCard.Params): Promise<void>;
}

export namespace ReviewCard {
	export type Params = {
		cardId: string;
		answer: number;
	};
}
