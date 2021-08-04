module.exports = {
  relation: 'foo',
  attributes: [
    {
      name: 'date',
      type: 'date'
    },
    {
      name: 'dateWithFormat',
      type: 'date',
      format: 'MM/DD/YY'
    },
    {
      name: 'numeric',
      type: 'numeric'
    },
    {
      name: 'string',
      type: 'string'
    },
    {
      name: 'enumerate',
      type: 'enum',
      values: [
        'foo',
        'bar',
        'baz'
      ]
    },
    {
      name: 'enumerate_int',
      type: 'enum',
      values: [
        42,
        13,
        1
      ]
    },
    {
      name: 'rawStringAtTheEndOfEnumerate',
      type: 'enum',
      values: [
        'rawString'
      ]
    }
  ],
  data: [
    {
      date: new Date(Date.UTC(2014, 11, 16, 19, 42, 1)),
      dateWithFormat: new Date(Date.UTC(2015, 5, 23)),
      numeric: 3.259,
      string: 'can have spaces',
      enumerate: 'bar',
      enumerate_int: 42
    },
    {
      date: new Date(Date.UTC(2014, 11, 16, 19, 42, 1)),
      numeric: 42
    }
  ]
}
