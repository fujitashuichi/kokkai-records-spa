export type ApiServiceResult =
    | { ok: true, value: unknown }
    | { ok: false, error: Error }