import { randomUUID } from "node:crypto";

export interface CardProps {
	repetitions: Date[];
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
}
