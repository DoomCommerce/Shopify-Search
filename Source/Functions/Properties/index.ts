
export type { Properties }

export * from './Include'
export * from './Exclude'


interface Properties {

    channels ?: Array<string>
    tags ?: Array<string>

    orders ?: {
        from : number
        to : number
    }
}
