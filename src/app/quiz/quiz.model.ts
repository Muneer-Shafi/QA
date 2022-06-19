
export interface QuestionType {
    id: number;
    question: string;
    ans: string;
    options: {
      one: string;
      two: string;
      three: string;
      four: string;
    };
  }

  export interface AnsType{
    id: number;
    question: string;
    ans: string;
  }
  