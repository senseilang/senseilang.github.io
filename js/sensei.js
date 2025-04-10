hljs.registerLanguage('mylanguage', function(hljs) {
  return {
    keywords: 'def print', // Replace with your language’s keywords
    contains: [
      hljs.COMMENT('#', '$'), // Example comment rule
      {
        className: 'function',
        beginKeywords: 'def',
        end: ':',
        contains: [hljs.TITLE_MODE]
      },
    ]
  };
});
