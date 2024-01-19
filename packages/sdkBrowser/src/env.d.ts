interface Navigator {
    connection: {

        saveData: boolean
        effectiveType: string
        rtt: number
        downlink: number
    }
}


interface Performance {
    memory: {
        /** JavaScript 堆内存大小的限制。
         *
         * @public
         *  */
        jsHeapSizeLimit: number

        /** JavaScript 堆的总大小。
         *
         * @public
         *  */
        totalJSHeapSize: number

        /** JavaScript 堆的已使用大小。
         *
         * @public
         * */
        usedJSHeapSize: number
    },
}
