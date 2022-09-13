export interface Question{
    question: string
    img: {fileType: string, file: string}
    answers: {text:string, right: boolean, selected: string}[]
}