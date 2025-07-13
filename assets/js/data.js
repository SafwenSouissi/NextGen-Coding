// Quiz data for the app
const quizzes = [
  {
    id: 'html',
    title: 'HTML Basics',
    questions: [
      {
        question: 'What does HTML stand for?',
        choices: [
          'Hyper Text Markup Language',
          'Home Tool Markup Language',
          'Hyperlinks and Text Markup Language',
          'Hyper Tool Multi Language'
        ],
        answer: 0
      },
      {
        question: 'Which tag is used to create a hyperlink?',
        choices: ['<a>', '<link>', '<href>', '<url>'],
        answer: 0
      },
      {
        question: 'What is the correct HTML element for inserting a line break?',
        choices: ['<break>', '<br>', '<lb>', '<line>'],
        answer: 1
      },
      {
        question: 'Which tag is used for the largest heading?',
        choices: ['<heading>', '<h6>', '<h1>', '<head>'],
        answer: 2
      },
      {
        question: 'What is the correct HTML for adding a background color?',
        choices: [
          '<body style="background-color:yellow;">',
          '<background>yellow</background>',
          '<body bg="yellow">',
          '<body color="yellow">'
        ],
        answer: 0
      },
      {
        question: 'Which attribute is used to provide an alternate text for an image?',
        choices: ['alt', 'title', 'src', 'longdesc'],
        answer: 0
      },
      {
        question: 'Which HTML element is used to define important text?',
        choices: ['<important>', '<b>', '<strong>', '<em>'],
        answer: 2
      }
    ]
  },
  {
    id: 'css',
    title: 'CSS Selectors',
    questions: [
      {
        question: 'Which selector selects all elements with class="example"?',
        choices: ['.example', '#example', '*example', 'example'],
        answer: 0
      },
      {
        question: 'How do you select an element with id="header"?',
        choices: ['#header', '.header', 'header', '*header'],
        answer: 0
      },
      {
        question: 'Which selector selects all <p> elements inside <div>?',
        choices: ['div p', 'div.p', 'div+p', 'div > p'],
        answer: 0
      },
      {
        question: 'How do you select only direct child <li> of <ul>?',
        choices: ['ul > li', 'ul li', 'ul + li', 'ul.li'],
        answer: 0
      },
      {
        question: 'Which property is used to change the text color of an element?',
        choices: ['color', 'font-color', 'text-color', 'background-color'],
        answer: 0
      },
      {
        question: 'How do you select all <a> elements with a target attribute?',
        choices: ['a[target]', 'a.target', 'a#target', 'a::target'],
        answer: 0
      },
      {
        question: 'Which selector selects the last <p> in a <div>?',
        choices: ['div p:last-child', 'div:last-child p', 'div p:last', 'div > p:last'],
        answer: 0
      }
    ]
  },
  {
    id: 'js',
    title: 'JavaScript Logic',
    questions: [
      {
        question: 'Which keyword declares a variable in JavaScript?',
        choices: ['var', 'let', 'const', 'All of the above'],
        answer: 3
      },
      {
        question: 'What is the result of 2 + "2" in JavaScript?',
        choices: ['4', '22', 'NaN', 'undefined'],
        answer: 1
      },
      {
        question: 'Which method is used to output data to the console?',
        choices: ['console.log()', 'print()', 'log()', 'output()'],
        answer: 0
      },
      {
        question: 'How do you write a single-line comment in JavaScript?',
        choices: ['// comment', '<!-- comment -->', '# comment', '/* comment */'],
        answer: 0
      },
      {
        question: 'Which operator is used to compare both value and type?',
        choices: ['==', '===', '=', '!='],
        answer: 1
      },
      {
        question: 'How do you define a function in JavaScript?',
        choices: ['function myFunc() {}', 'def myFunc() {}', 'func myFunc() {}', 'function:myFunc() {}'],
        answer: 0
      },
      {
        question: 'What is the correct way to write an array?',
        choices: ['var arr = [1,2,3];', 'var arr = (1,2,3);', 'var arr = {1,2,3};', 'var arr = <1,2,3>;'],
        answer: 0
      }
    ]
  }
];
