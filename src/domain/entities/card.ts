import { randomUUID } from "node:crypto";

export interface CardProps {
	repetitions: Date[];
	easiness: number;
	daysUntilNextReview: number;
}

export class Card {
	private _id: string;
	private props: CardProps;

	constructor(props: CardProps, id?: string) {
		this._id = id ?? randomUUID();
		this.props = props;
	}

	public get id(): string {
		return this._id;
	}

	public get repetitions() {
		return this.props.repetitions.length;
	}

	public get easiness(): number {
		return this.props.easiness;
	}
	public set easiness(value: number) {
		this.props.easiness = value;
	}

	public get daysUntilNextReview(): number {
		return this.props.daysUntilNextReview;
	}

	public set daysUntilNextReview(interval: number) {
		this.props.daysUntilNextReview = interval;
	}
}
