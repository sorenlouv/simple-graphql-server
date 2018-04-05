const { makeExecutableSchema } = require('graphql-tools');
const { authors, posts } = require('./mockData');

const typeDefs = `
  type Query {
    posts: [Post]

    # Author of posts
    authors: [Author]
  }

  type Author {
    id: Int!

    # First name of the author
    firstName: String

    lastName: String
    posts: [Post]
  }

  type Post {
    id: Int!
    title: String
    author: Author
  }
`;

const resolvers = {
  Query: {
    posts: () => posts,
    authors: () => authors
  },
  Post: {
    author: post => authors.find(author => author.id === post.authorId)
  },
  Author: {
    posts: author => posts.filter(post => author.id === post.authorId)
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = schema;
