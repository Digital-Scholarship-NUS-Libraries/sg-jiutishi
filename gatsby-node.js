const Poem = require("./src/data/Poem.json")

exports.createPages = async ({ actions: { createPage } }) => {
  const allPoem = Poem
  allPoem.forEach(poem => {
    createPage({
      path: `/poem/${poem.author_name}/${poem.title}/`,
      component: require.resolve("./src/pages/poemTemplate.js"),
      context: { poem },
    })
  })

  const allTopic = ["南洋風土", "名勝古跡"]
  allTopic.forEach(topic => {
    createPage({
      path: `/${topic}`,
      component: require.resolve("./src/pages/topicTemplate.js"),
      context: { topic },
    })
  })
}
