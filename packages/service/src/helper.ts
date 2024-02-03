export function isAxiosError(error: any) {
    return error?.code === 'ERR_NETWORK'
}
