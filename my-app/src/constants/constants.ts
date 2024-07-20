
import { Review } from "@/Types.ts";
import { Links } from "@/Types.ts";
import { subLinks } from "@/Types.ts";

export const Reviews: Review[] = [
  {
    index: 1,
    desc: 'Currently using the free tier, and it is superb! Great way to keep track of multiple exchange transactions in one place. Will make my tax returns a piece of cake! Loving the new dark theme too - way better. Overall the best crypto asset tracker damn,',
    company: '',
    title: '',
    description: '',
    image: '',
    isPublished: false,
  },
  {
    index: 2,
    desc: 'Big fan of Cryptonite. Been using a few years now. Easy to connect wallets. Simple dashboard. Tax summaries. Real time prices. Essentially its my go to one stop shop.',
    company: '',
    title: '',
    description: '',
    image: '',
    isPublished: false,
  },
  {
    index: 3,
    desc: 'Great tax service for those with multiple crypto accounts. Saves a lot of time and provides populated tax forms for easy submission to the IRS.',
    company: '',
    title: '',
    description: '',
    image: '',
    isPublished: false,
  },
  {
    index: 4,
    desc: 'So far the best crypto tracking app I have used with many automated imports and nice clean UI. Everyone can give it a try on free plan, which is quite handy on its own and decide for advanced features like tax reporting later / when needed.',
    company: '',
    title: '',
    description: '',
    image: '',
    isPublished: false,
  },
  {
    index: 5,
    desc: 'It is the best solution in the world for paying your crypto taxes, bar none. The integrations are simple and precise, and they have thought through all the edge cases. It is the best.',
    company: '',
    title: '',
    description: '',
    image: '',
    isPublished: false,
  },
  {
    index: 6,
    desc: 'So far the best crypto tracking app I have used with many automated imports and nice clean UI. Everyone can give it a try on free plan, which is quite handy on its own and decide for advanced features like tax reporting later / when needed.',
    company: '',
    title: '',
    description: '',
    image: '',
    isPublished: false,
  },
  {
    index: 7,
    desc: 'It was a life saver when filing my taxes. I felt confident that it captured all of my Coinbase transactions and that my tax liability was calculated correctly. It imported into my tax software easily as well.',
    company: '',
    title: '',
    description: '',
    image: '',
    isPublished: false,
  },
 
];

export const FooterLinks: Links[]=[
  {
    mainLinkHead:'Company',
    subLinks:[{text:"About", linkTo:"#"},
      {text:"Careers", linkTo:"#"},
      {text:"Tax Professionls", linkTo:"#"},
      {text:"Terms", linkTo:"#"},
      {text:"Privacy", linkTo:"#"},
      {text:"Disclaimer", linkTo:"#"}
    ]
  },
  {
    mainLinkHead:'Platform',
    subLinks:[{text:"Pricing", linkTo:"#"},
      {text:"Crypto prices", linkTo:"#"},
      {text:"Integrations", linkTo:"#"},
      {text:"Security", linkTo:"#"},
      {text:"Status", linkTo:"#"},
    ]
  },
  {
    mainLinkHead:'Resources',
    subLinks:[{text:"Crypto tax guide", linkTo:"#"},
      {text:"Blogs", linkTo:"#"},
      {text:"Support", linkTo:"#"},
    ]
  }

]