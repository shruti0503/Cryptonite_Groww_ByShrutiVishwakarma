// Types.ts
export interface Review {
    index: number;
    desc: string;
    company: string;
    title: string;
    description: string;
    image: string;
    isPublished: boolean;
  }

  export interface subLinks {
    text:string;
    linkTo:string;
  }

  export interface Links{
    mainLinkHead:string;
    subLinks: subLinks[]

  }

