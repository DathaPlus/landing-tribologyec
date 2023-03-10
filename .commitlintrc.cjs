module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      headerPattern: /^[[A-Z]+\-[0-9]{1,4}]\/(\w*)(\@[a-zA-Z]+[0-9]*)?: (.*)$/,
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'rel', 'style', 'docs', 'test', 'break']],
    'header-max-length': [2, 'always', 150],
    'body-max-line-length': [2, 'always', 200],
  },
};
