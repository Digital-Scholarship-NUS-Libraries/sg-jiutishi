const Poem = require("./src/data/Poem.json")
const Topic = require("./src/data/Topic.json")
const Paper = require("./src/data/Paper.json")

exports.createPages = async ({ actions: { createPage } }) => {
  const allPoem = Poem
  allPoem.forEach(poem => {
    createPage({
      path: `/poem/${poem.id}`,
      component: require.resolve("./src/templates/poemTemplate.js"),
      context: { poem },
    })
  })

  const allPaper = Paper
  allPaper.forEach(paper => {
    createPage({
      path: `/paper/${paper.id}`,
      component: require.resolve("./src/templates/paperTemplate.js"),
      context: { paper },
    })
  })

  const allTopic = Topic
  allTopic.forEach(topic => {
    if (topic !== undefined) {
      createPage({
        path: `/${topic.name}`,
        component: require.resolve("./src/templates/topicTemplate.js"),
        context: { topic },
      })
    }
  })

  const allChars = [
    "All",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]
  allChars.forEach(char => {
    createPage({
      path: `/poet/${char}`,
      component: require.resolve("./src/templates/poetTemplate.js"),
      context: { char },
    })
  })
}

exports.onCreateWebpackConfig = helper => {
  const { stage, actions, getConfig } = helper
  if (stage === "develop" || stage === "build-javascript") {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}
