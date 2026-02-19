export type ApiResult<T> =
    | { ok: true, value: T }
    | { ok: false, error: Error }

export type ApiResultWithStatus<T> =
    | { status: "noResult" }
    | { status: "error", error: Error }
    | { status: "success", value: T }