
export type { OrderProps }


interface OrderProps {

    channels ?: Array<string>
    tags ?: Array<string>

    orders ?: {
        from : number
        to : number
    }
}

