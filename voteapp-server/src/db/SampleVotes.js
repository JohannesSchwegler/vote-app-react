module.exports = [
  {
    id: "vote_1",
    user: "Peter",
    title: "How is your day?",
    description: "Tell me: how has your day been so far?",
    choices: [
      { id: "choice_1", title: "Good", count: 12 },
      {
        id: "choice_2",
        title: "Bad",
        count: 2
      },
      { id: "choice_3", title: "Not sure yet", count: 23 }
    ]
  },

  {
    id: "vote_2",
    user: "Johannes",
    title: "How did you find this web application?",
    description: "Tell me, how did you find this webapp?",
    choices: [
      { id: "choice_1", title: "through linkedin", count: 5 },

      { id: "choice_2", title: "through GitHub", count: 0 },

      { id: "choice_3", title: "found it on johannes website", count: 2 },

    ]
  },
  {
    id: "vote_3",
    user: "Joe",
    title: "Vote App",
    description: "Do you like this webapp?",
    choices: [
      { id: "choice_1", title: "Very nice", count: 2 },

      { id: "choice_2", title: "Good", count: 5 },

      { id: "choice_3", title: "Medium, room for improvement", count: 32 },

      {
        id: "choice_4",
        title: "Looks like you`re doing this for the first time",
        count: 12
      }
    ]
  },
  {
    id: "vote_3",
    user: "Gustav",
    title: "Favorite single-page application",
    description: "Whats your favorite single-page application",
    choices: [
      { id: "choice_1", title: "React", count: 531 },

      { id: "choice_2", title: "Vue", count: 212 },
      { id: "choice_3", title: "Angular", count: 302 },
      { id: "choice_4", title: "Ember", count: 67 }
    ]
  }
];
