export default interface QuestionInterface {
    question: string;
    img: {file: string, fileType: string};
    answers: Array<{text:string, right: boolean, selected: string}>;
}