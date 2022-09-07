export default interface QuestionInterface {
    question: string;
    img: {file: string, type: string};
    answers: Array<{text:string, right: boolean, selected: string}>;
}