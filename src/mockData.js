const authors = [
  { id: 1, firstName: 'Archana', lastName: 'Doe' },
  { id: 2, firstName: 'Casper', lastName: 'Doe' },
  { id: 3, firstName: 'Charla', lastName: 'Doe' },
  { id: 4, firstName: 'Kim', lastName: 'Doe' },
  { id: 5, firstName: 'Nicolás', lastName: 'Doe' },
  { id: 6, firstName: 'Rory ', lastName: 'Doe' },
  { id: 7, firstName: 'Søren', lastName: 'Doe' },
  { id: 8, firstName: 'Thomas', lastName: 'Doe' }
];

const posts = [
  {
    id: 1,
    title: 'Introduction to GDPR with Elasticsearch',
    likes: 13,
    authorId: 1
  },
  {
    id: 2,
    title: 'Plugins Alongside the X-Pack Security Plugin for Elasticsearch',
    likes: 31,
    authorId: 3
  },
  {
    id: 3,
    title: 'How to enable SAML authentication in Kibana and Elasticsearch',
    likes: 133,
    authorId: 4
  },
  {
    id: 4,
    title: 'Resizing Elasticsearch shards for fun and profit',
    likes: 79,
    authorId: 4
  },
  {
    id: 5,
    title: 'Scheduled Events and the Amorous Anomaly',
    likes: 36,
    authorId: 5
  }
];

module.exports = {
  authors,
  posts
};
