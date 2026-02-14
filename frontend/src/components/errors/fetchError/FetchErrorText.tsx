import { errorMap } from './errorMap'

function FetchErrorText(errorCode: number | string) {
    const result: string | undefined = Object.keys(errorMap).find(key => key === String(errorCode));

    if (!result) {
        return;
    }

    return (
        <strong>
            {result}
        </strong>
    )
}

export default FetchErrorText
