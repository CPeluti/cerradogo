export interface Hunt{
    _id?: string
    id?: string
    img?: {fileType: string, file: string}
    name: string
    location: string
    latlong: number[]
    tips:string[]
    totalQuestions: number
}
