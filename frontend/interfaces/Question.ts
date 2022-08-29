export default interface QuestionInterface {
    question: string;
    image: string;
    answers: Array<{text:string, right: boolean, selected: string}>;
}