const allRoles = {
  user: [
    'createMessage',
    'userTopics',
    'createTopic',
    'deleteTopic',
    'updateTopic',
    'createThread',
    'userThreads',
    'ping',
    'followThread',
    'getThread',
    'allTopics',
    'publicThreads',
    'topicThreads',
    'deleteThread',
    'upVote',
    'downVote',
    'managePseudonym',
    'manageAccount',
  ],
  admin: ['getUsers', 'manageUsers'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
