
export type Image = {
    image: string,
    alt: string
}

export type DatabaseSettings = {
    databaseURL: string,
    val?: Function
}

export type DataSnapshot = {
    val: () => {},
    exists: () => {},
}