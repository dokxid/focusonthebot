/**
 * Share command metadata from a common spot to be used for both runtime
 * and registration.
 */

export const ENABLE_CHANNEL_COMMAND = {
  name: 'enablechannel',
  description: 'Enables the current channel for reading messages',
};

export const MESSAGES_COMMAND = {
  name: 'messages',
  description: 'blub',
  options: [
    {
      name: 'count',
      description: 'count_desc',
      type: 1,
      options: [
        {
          name: 'channel',
          description: 'channel to fetch from',
          type: 7,
          required: false,
        },
        {
          name: 'user',
          description: 'users messages to count',
          type: 6,
          required: false,
        },
      ],
    },
  ],
};
