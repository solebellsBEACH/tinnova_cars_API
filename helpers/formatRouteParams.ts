export const formatRouteParams = (url: string) => {
    let obj = {}
    let formattedUrl: string | string[] = url.split('?')[1]
    formattedUrl = formattedUrl.split('&')
    formattedUrl.map(e => {
        let props = e.split('=')
        obj[props[0]] = props[1]
    })

    return obj
}