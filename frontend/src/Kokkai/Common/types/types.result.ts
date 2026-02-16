export type ApiResult<T> =
    | { ok: true, value: T }
    | { ok: false, error: Error }

export type ApiResultWithStatus<T> =
    | { status: "error", error: Error }
    | { status: "success", value: T }