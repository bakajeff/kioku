import { HttpResponse } from "./http-response";

export interface Controller<T = unknown> {
	handle(request: T): Promise<HttpResponse>;
}
