import { REST, RequestData, RawFile } from '@discordjs/rest';
import * as discord_api_types_v10 from 'discord-api-types/v10';
import { Snowflake, RESTGetAPIApplicationCommandsQuery, RESTGetAPIApplicationCommandsResult, RESTPostAPIApplicationCommandsJSONBody, RESTPatchAPIApplicationCommandJSONBody, RESTPutAPIApplicationCommandsJSONBody, RESTPutAPIApplicationCommandsResult, RESTGetAPIApplicationGuildCommandsQuery, RESTGetAPIApplicationGuildCommandsResult, RESTPostAPIApplicationGuildCommandsJSONBody, RESTPostAPIApplicationGuildCommandsResult, RESTGetAPIApplicationGuildCommandResult, RESTPatchAPIApplicationGuildCommandJSONBody, RESTPatchAPIApplicationGuildCommandResult, RESTPutAPIApplicationGuildCommandsJSONBody, RESTPutAPIApplicationGuildCommandsResult, RESTGetAPIGuildApplicationCommandsPermissionsResult, RESTPutAPIApplicationCommandPermissionsJSONBody, RESTPatchCurrentApplicationJSONBody, RESTPostAPIGuildForumThreadsJSONBody, RESTPostAPIChannelMessageJSONBody, RESTPatchAPIChannelMessageJSONBody, RESTGetAPIChannelMessageReactionUsersQuery, RESTGetAPIChannelMessageReactionUsersResult, RESTPatchAPIChannelJSONBody, RESTGetAPIChannelMessagesQuery, RESTGetAPIChannelMessagesResult, RESTGetAPIChannelPinsResult, RESTPostAPIChannelInviteJSONBody, RESTGetAPIChannelInvitesResult, RESTPostAPIChannelThreadsJSONBody, APIThreadChannel, RESTGetAPIChannelThreadsArchivedQuery, RESTGetAPIChannelUsersThreadsArchivedResult, RESTPostAPIChannelWebhookJSONBody, RESTGetAPIChannelWebhooksResult, RESTPutAPIChannelPermissionJSONBody, RESTPostAPIGuildsJSONBody, RESTPatchAPIGuildJSONBody, RESTPutAPIGuildMemberJSONBody, RESTPutAPIGuildMemberResult, RESTGetAPIGuildMembersQuery, RESTGetAPIGuildMembersResult, RESTGetAPIGuildChannelsResult, RESTPostAPIGuildChannelJSONBody, RESTPatchAPIGuildChannelPositionsJSONBody, RESTGetAPIGuildBansQuery, RESTGetAPIGuildBansResult, RESTPutAPIGuildBanJSONBody, RESTGetAPIGuildRolesResult, RESTPostAPIGuildRoleJSONBody, RESTPatchAPIGuildRolePositionsJSONBody, RESTPatchAPIGuildRolePositionsResult, RESTPatchAPIGuildRoleJSONBody, GuildMFALevel, RESTGetAPIGuildPruneCountQuery, RESTGetAPIGuildPruneCountResult, RESTPostAPIGuildPruneJSONBody, RESTPostAPIGuildPruneResult, RESTGetAPIGuildVoiceRegionsResult, RESTGetAPIGuildInvitesResult, RESTGetAPIGuildIntegrationsResult, RESTPatchAPIGuildWidgetSettingsJSONBody, RESTGetAPIGuildVanityUrlResult, GuildWidgetStyle, RESTPatchAPIGuildWelcomeScreenJSONBody, RESTPatchAPIGuildVoiceStateUserJSONBody, RESTGetAPIGuildEmojisResult, RESTPostAPIGuildEmojiJSONBody, RESTPatchAPIGuildEmojiJSONBody, RESTGetAPIGuildScheduledEventsQuery, RESTGetAPIGuildScheduledEventsResult, RESTPostAPIGuildScheduledEventJSONBody, RESTGetAPIGuildScheduledEventQuery, RESTPatchAPIGuildScheduledEventJSONBody, RESTGetAPIGuildScheduledEventUsersQuery, RESTGetAPIGuildScheduledEventUsersResult, RESTGetAPIGuildTemplatesResult, RESTPatchAPIGuildTemplateJSONBody, RESTGetAPIGuildStickersResult, RESTPostAPIGuildStickerFormDataBody, RESTPatchAPIGuildStickerJSONBody, RESTGetAPIAuditLogQuery, RESTGetAPIAutoModerationRulesResult, RESTPostAPIAutoModerationRuleJSONBody, RESTPatchAPIAutoModerationRuleJSONBody, RESTGetAPIGuildMembersSearchQuery, RESTGetAPIGuildMembersSearchResult, RESTPatchAPIGuildMemberJSONBody, RESTPostAPIGuildTemplatesJSONBody, RESTGetAPIGuildWebhooksResult, RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody, RESTPutAPIGuildOnboardingJSONBody, RESTPatchAPIWebhookJSONBody, RESTPostAPIWebhookWithTokenJSONBody, RESTPostAPIWebhookWithTokenQuery, RESTPostAPIWebhookWithTokenWaitResult, RESTPostAPIWebhookWithTokenSlackQuery, RESTPostAPIWebhookWithTokenGitHubQuery, RESTGetAPIWebhookWithTokenMessageQuery, RESTPatchAPIWebhookWithTokenMessageJSONBody, APIInteractionResponseCallbackData, APIInteractionResponseDeferredChannelMessageWithSource, APICommandAutocompleteInteractionResponseCallbackData, APIModalInteractionResponseCallbackData, RESTGetAPIInviteQuery, RESTOAuth2AuthorizationQuery, RESTPostOAuth2AccessTokenURLEncodedData, RESTPostOAuth2AccessTokenResult, RESTPostOAuth2RefreshTokenURLEncodedData, RESTPostOAuth2ClientCredentialsURLEncodedData, RESTGetAPIOAuth2CurrentApplicationResult, RESTGetAPIOAuth2CurrentAuthorizationResult, RESTGetAPIApplicationRoleConnectionMetadataResult, RESTPutAPIApplicationRoleConnectionMetadataJSONBody, RESTPutAPIApplicationRoleConnectionMetadataResult, RESTPostAPIStageInstanceJSONBody, RESTPatchAPIStageInstanceJSONBody, RESTGetStickerPacksResult, APIThreadMember, RESTGetAPIChannelThreadMembersResult, RESTGetAPICurrentUserGuildsQuery, RESTGetAPICurrentUserGuildsResult, RESTPatchAPICurrentUserJSONBody, RESTGetAPICurrentUserConnectionsResult, RESTPutAPICurrentUserApplicationRoleConnectionJSONBody, RESTGetAPIVoiceRegionsResult } from 'discord-api-types/v10';
export * from 'discord-api-types/v10';

declare class ApplicationCommandsAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Fetches all global commands for a application
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-commands}
     * @param applicationId - The application id to fetch commands for
     * @param query - The query options for fetching commands
     * @param options - The options for fetching commands
     */
    getGlobalCommands(applicationId: Snowflake, query?: RESTGetAPIApplicationCommandsQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIApplicationCommandsResult>;
    /**
     * Creates a new global command
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-global-application-command}
     * @param applicationId - The application id to create the command for
     * @param body - The data for creating the command
     * @param options - The options for creating the command
     */
    createGlobalCommand(applicationId: Snowflake, body: RESTPostAPIApplicationCommandsJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIApplicationCommand>;
    /**
     * Fetches a global command
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-global-application-command}
     * @param applicationId - The application id to fetch the command from
     * @param commandId - The command id to fetch
     * @param options - The options for fetching the command
     */
    getGlobalCommand(applicationId: Snowflake, commandId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIApplicationCommand>;
    /**
     * Edits a global command
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-global-application-command}
     * @param applicationId - The application id of the command
     * @param commandId - The id of the command to edit
     * @param body - The data for editing the command
     * @param options - The options for editing the command
     */
    editGlobalCommand(applicationId: Snowflake, commandId: Snowflake, body: RESTPatchAPIApplicationCommandJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIApplicationCommand>;
    /**
     * Deletes a global command
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#delete-global-application-command}
     * @param applicationId - The application id of the command
     * @param commandId - The id of the command to delete
     * @param options - The options for deleting a command
     */
    deleteGlobalCommand(applicationId: Snowflake, commandId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Overwrites global commands
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands}
     * @param applicationId - The application id to overwrite commands for
     * @param body - The data for overwriting commands
     * @param options - The options for overwriting commands
     */
    bulkOverwriteGlobalCommands(applicationId: Snowflake, body: RESTPutAPIApplicationCommandsJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTPutAPIApplicationCommandsResult>;
    /**
     * Fetches all commands for a guild
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-commands}
     * @param applicationId - The application id to fetch commands for
     * @param guildId - The guild id to fetch commands for
     * @param query - The data for fetching commands
     * @param options - The options for fetching commands
     */
    getGuildCommands(applicationId: Snowflake, guildId: Snowflake, query?: RESTGetAPIApplicationGuildCommandsQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIApplicationGuildCommandsResult>;
    /**
     * Creates a new command for a guild
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#create-guild-application-command}
     * @param applicationId - The application id to create the command for
     * @param guildId - The guild id to create the command for
     * @param body - The data for creating the command
     * @param options - The options for creating the command
     */
    createGuildCommand(applicationId: Snowflake, guildId: Snowflake, body: RESTPostAPIApplicationGuildCommandsJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTPostAPIApplicationGuildCommandsResult>;
    /**
     * Fetches a guild command
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command}
     * @param applicationId - The application id to fetch the command from
     * @param guildId - The guild id to fetch the command from
     * @param commandId - The command id to fetch
     * @param options - The options for fetching the command
     */
    getGuildCommand(applicationId: Snowflake, guildId: Snowflake, commandId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIApplicationGuildCommandResult>;
    /**
     * Edits a guild command
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-guild-application-command}
     * @param applicationId - The application id of the command
     * @param guildId - The guild id of the command
     * @param commandId - The command id to edit
     * @param body - The data for editing the command
     * @param options - The options for editing the command
     */
    editGuildCommand(applicationId: Snowflake, guildId: Snowflake, commandId: Snowflake, body: RESTPatchAPIApplicationGuildCommandJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTPatchAPIApplicationGuildCommandResult>;
    /**
     * Deletes a guild command
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#delete-guild-application-command}
     * @param applicationId - The application id of the command
     * @param guildId - The guild id of the command
     * @param commandId - The id of the command to delete
     * @param options - The options for deleting the command
     */
    deleteGuildCommand(applicationId: Snowflake, guildId: Snowflake, commandId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Bulk overwrites guild commands
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-guild-application-commands}
     * @param applicationId - The application id to overwrite commands for
     * @param guildId - The guild id to overwrite commands for
     * @param body - The data for overwriting commands
     * @param options - The options for overwriting the commands
     */
    bulkOverwriteGuildCommands(applicationId: Snowflake, guildId: Snowflake, body: RESTPutAPIApplicationGuildCommandsJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTPutAPIApplicationGuildCommandsResult>;
    /**
     * Fetches the permissions for a guild command
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-guild-application-command-permissions}
     * @param applicationId - The application id to get the permissions for
     * @param guildId - The guild id of the command
     * @param commandId - The command id to get the permissions for
     * @param options - The option for fetching the command
     */
    getGuildCommandPermissions(applicationId: Snowflake, guildId: Snowflake, commandId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildApplicationCommandPermissions>;
    /**
     * Fetches all permissions for all commands in a guild
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#get-application-command-permissions}
     * @param applicationId - The application id to get the permissions for
     * @param guildId - The guild id to get the permissions for
     * @param options - The options for fetching permissions
     */
    getGuildCommandsPermissions(applicationId: Snowflake, guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildApplicationCommandsPermissionsResult>;
    /**
     * Edits the permissions for a guild command
     *
     * @see {@link https://discord.com/developers/docs/interactions/application-commands#edit-application-command-permissions}
     * @param userToken - The token of the user to edit permissions on behalf of
     * @param applicationId - The application id to edit the permissions for
     * @param guildId - The guild id to edit the permissions for
     * @param commandId - The id of the command to edit the permissions for
     * @param body - The data for editing the permissions
     * @param options - The options for editing the permissions
     */
    editGuildCommandPermissions(userToken: string, applicationId: Snowflake, guildId: Snowflake, commandId: Snowflake, body: RESTPutAPIApplicationCommandPermissionsJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildApplicationCommandPermissions>;
}

declare class ApplicationsAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Fetches the application associated with the requesting bot user.
     *
     * @see {@link https://discord.com/developers/docs/resources/application#get-current-application}
     * @param options - The options for fetching the application
     */
    getCurrent({ signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIApplication>;
    /**
     * Edits properties of the application associated with the requesting bot user.
     *
     * @see {@link https://discord.com/developers/docs/resources/application#edit-current-application}
     * @param body - The new application data
     * @param options - The options for editing the application
     */
    editCurrent(body: RESTPatchCurrentApplicationJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIApplication>;
}

interface StartForumThreadOptions extends RESTPostAPIGuildForumThreadsJSONBody {
    message: RESTPostAPIGuildForumThreadsJSONBody['message'] & {
        files?: RawFile[];
    };
}
declare class ChannelsAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Sends a message in a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#create-message}
     * @param channelId - The id of the channel to send the message in
     * @param body - The data for sending the message
     * @param options - The options for sending the message
     */
    createMessage(channelId: Snowflake, { files, ...body }: RESTPostAPIChannelMessageJSONBody & {
        files?: RawFile[];
    }, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIMessage>;
    /**
     * Edits a message
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#edit-message}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to edit
     * @param body - The data for editing the message
     * @param options - The options for editing the message
     */
    editMessage(channelId: Snowflake, messageId: Snowflake, { files, ...body }: RESTPatchAPIChannelMessageJSONBody & {
        files?: RawFile[];
    }, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIMessage>;
    /**
     * Fetches the reactions for a message
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#get-reactions}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to get the reactions for
     * @param emoji - The emoji to get the reactions for
     * @param query - The query options for fetching the reactions
     * @param options - The options for fetching the message reactions
     */
    getMessageReactions(channelId: Snowflake, messageId: Snowflake, emoji: string, query?: RESTGetAPIChannelMessageReactionUsersQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIChannelMessageReactionUsersResult>;
    /**
     * Deletes a reaction for the current user
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#delete-own-reaction}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to delete the reaction for
     * @param emoji - The emoji to delete the reaction for
     * @param options - The options for deleting the reaction
     */
    deleteOwnMessageReaction(channelId: Snowflake, messageId: Snowflake, emoji: string, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Deletes a reaction for a user
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#delete-user-reaction}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to delete the reaction for
     * @param emoji - The emoji to delete the reaction for
     * @param userId - The id of the user to delete the reaction for
     * @param options - The options for deleting the reaction
     */
    deleteUserMessageReaction(channelId: Snowflake, messageId: Snowflake, emoji: string, userId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Deletes all reactions for a message
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#delete-all-reactions}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to delete the reactions for
     * @param options - The options for deleting the reactions
     */
    deleteAllMessageReactions(channelId: Snowflake, messageId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Deletes all reactions of an emoji for a message
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#delete-all-reactions-for-emoji}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to delete the reactions for
     * @param emoji - The emoji to delete the reactions for
     * @param options - The options for deleting the reactions
     */
    deleteAllMessageReactionsForEmoji(channelId: Snowflake, messageId: Snowflake, emoji: string, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Adds a reaction to a message
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#create-reaction}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to add the reaction to
     * @param emoji - The emoji to add the reaction with
     * @param options - The options for adding the reaction
     */
    addMessageReaction(channelId: Snowflake, messageId: Snowflake, emoji: string, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Fetches a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#get-channel}
     * @param channelId - The id of the channel
     * @param options - The options for fetching the channel
     */
    get(channelId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIChannel>;
    /**
     * Edits a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#modify-channel}
     * @param channelId - The id of the channel to edit
     * @param body - The new channel data
     * @param options - The options for editing the channel
     */
    edit(channelId: Snowflake, body: RESTPatchAPIChannelJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIChannel>;
    /**
     * Deletes a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#deleteclose-channel}
     * @param channelId - The id of the channel to delete
     * @param options - The options for deleting the channel
     */
    delete(channelId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIChannel>;
    /**
     * Fetches the messages of a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-messages}
     * @param channelId - The id of the channel to fetch messages from
     * @param query - The query options for fetching messages
     * @param options - The options for fetching the messages
     */
    getMessages(channelId: Snowflake, query?: RESTGetAPIChannelMessagesQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIChannelMessagesResult>;
    /**
     * Shows a typing indicator in a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#trigger-typing-indicator}
     * @param channelId - The id of the channel to show the typing indicator in
     * @param options - The options for showing the typing indicator
     */
    showTyping(channelId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Fetches the pinned messages of a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#get-pinned-messages}
     * @param channelId - The id of the channel to fetch pinned messages from
     * @param options - The options for fetching the pinned messages
     */
    getPins(channelId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIChannelPinsResult>;
    /**
     * Pins a message in a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#pin-message}
     * @param channelId - The id of the channel to pin the message in
     * @param messageId - The id of the message to pin
     * @param options - The options for pinning the message
     */
    pinMessage(channelId: Snowflake, messageId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Deletes a message
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#delete-message}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to delete
     * @param options - The options for deleting the message
     */
    deleteMessage(channelId: Snowflake, messageId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Bulk deletes messages
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#bulk-delete-messages}
     * @param channelId - The id of the channel the messages are in
     * @param messageIds - The ids of the messages to delete
     * @param options - The options for deleting the messages
     */
    bulkDeleteMessages(channelId: Snowflake, messageIds: Snowflake[], { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Fetches a message
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-message}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to fetch
     * @param options - The options for fetching the message
     */
    getMessage(channelId: Snowflake, messageId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIMessage>;
    /**
     * Crossposts a message
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#crosspost-message}
     * @param channelId - The id of the channel the message is in
     * @param messageId - The id of the message to crosspost
     * @param options - The options for crossposting the message
     */
    crosspostMessage(channelId: Snowflake, messageId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIMessage>;
    /**
     * Unpins a message in a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#unpin-message}
     * @param channelId - The id of the channel to unpin the message in
     * @param messageId - The id of the message to unpin
     * @param options - The options for unpinning the message
     */
    unpinMessage(channelId: Snowflake, messageId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Follows an announcement channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#follow-announcement-channel}
     * @param channelId - The id of the announcement channel to follow
     * @param webhookChannelId - The id of the webhook channel to follow the announcements in
     * @param options - The options for following the announcement channel
     */
    followAnnouncements(channelId: Snowflake, webhookChannelId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIFollowedChannel>;
    /**
     * Creates a new invite for a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#create-channel-invite}
     * @param channelId - The id of the channel to create an invite for
     * @param body - The data for creating the invite
     * @param options - The options for creating the invite
     */
    createInvite(channelId: Snowflake, body: RESTPostAPIChannelInviteJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIExtendedInvite>;
    /**
     * Fetches the invites of a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#get-channel-invites}
     * @param channelId - The id of the channel to fetch invites from
     * @param options - The options for fetching the invites
     */
    getInvites(channelId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIChannelInvitesResult>;
    /**
     * Creates a new thread
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-from-message}
     * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-without-message}
     * @param channelId - The id of the channel to start the thread in
     * @param body - The data for starting the thread
     * @param messageId - The id of the message to start the thread from
     * @param options - The options for starting the thread
     */
    createThread(channelId: Snowflake, body: RESTPostAPIChannelThreadsJSONBody, messageId?: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIChannel>;
    /**
     * Creates a new forum post
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#start-thread-in-forum-channel}
     * @param channelId - The id of the forum channel to start the thread in
     * @param body - The data for starting the thread
     * @param options - The options for starting the thread
     */
    createForumThread(channelId: Snowflake, { message, ...optionsBody }: StartForumThreadOptions, { signal }?: Pick<RequestData, 'signal'>): Promise<APIThreadChannel>;
    /**
     * Fetches the archived threads of a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#list-public-archived-threads}
     * @see {@link https://discord.com/developers/docs/resources/channel#list-private-archived-threads}
     * @param channelId - The id of the channel to fetch archived threads from
     * @param archivedStatus - The archived status of the threads to fetch
     * @param query - The options for fetching archived threads
     * @param options - The options for fetching archived threads
     */
    getArchivedThreads(channelId: Snowflake, archivedStatus: 'private' | 'public', query?: RESTGetAPIChannelThreadsArchivedQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIChannelUsersThreadsArchivedResult>;
    /**
     * Fetches the private joined archived threads of a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#list-joined-private-archived-threads}
     * @param channelId - The id of the channel to fetch joined archived threads from
     * @param query - The options for fetching joined archived threads
     * @param options - The options for fetching joined archived threads
     */
    getJoinedPrivateArchivedThreads(channelId: Snowflake, query?: RESTGetAPIChannelThreadsArchivedQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIChannelUsersThreadsArchivedResult>;
    /**
     * Creates a new webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#create-webhook}
     * @param channelId - The id of the channel to create the webhook in
     * @param body - The data for creating the webhook
     * @param options - The options for creating the webhook
     */
    createWebhook(channelId: Snowflake, body: RESTPostAPIChannelWebhookJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIWebhook>;
    /**
     * Fetches the webhooks of a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#get-channel-webhooks}
     * @param channelId - The id of the channel
     */
    getWebhooks(channelId: Snowflake): Promise<RESTGetAPIChannelWebhooksResult>;
    /**
     * Edits the permission overwrite for a user or role in a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#edit-channel-permissions}
     * @param channelId - The id of the channel to edit the permission overwrite in
     * @param overwriteId - The id of the user or role to edit the permission overwrite for
     * @param body - The data for editing the permission overwrite
     * @param options - The options for editing the permission overwrite
     */
    editPermissionOverwrite(channelId: Snowflake, overwriteId: Snowflake, body: RESTPutAPIChannelPermissionJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Deletes the permission overwrite for a user or role in a channel
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#delete-channel-permission}
     * @param channelId - The id of the channel to delete the permission overwrite in
     * @param overwriteId - The id of the user or role to delete the permission overwrite for
     * @param options - The options for deleting the permission overwrite
     */
    deletePermissionOverwrite(channelId: Snowflake, overwriteId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
}

declare class GuildsAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Fetches a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild}
     * @param guildId - The id of the guild
     * @param options - The options for fetching the guild
     */
    get(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuild>;
    /**
     * Fetches a guild preview
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-preview}
     * @param guildId - The id of the guild to fetch the preview from
     * @param options - The options for fetching the guild preview
     */
    getPreview(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildPreview>;
    /**
     * Creates a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#create-guild}
     * @param body - The guild to create
     * @param options - The options for creating the guild
     */
    create(body: RESTPostAPIGuildsJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuild>;
    /**
     * Edits a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild}
     * @param guildId - The id of the guild to edit
     * @param body - The new guild data
     * @param options - The options for editing the guild
     */
    edit(guildId: Snowflake, body: RESTPatchAPIGuildJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIGuild>;
    /**
     * Deletes a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild}
     * @param guildId - The id of the guild to delete
     * @param options - The options for deleting this guild
     */
    delete(guildId: Snowflake, { signal, reason }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Adds user to the guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member}
     * @param guildId - The id of the guild to add the user to
     * @param userId - The id of the user to add
     * @param body - The data for adding users to the guild
     * @param options - The options for adding users to the guild
     */
    addMember(guildId: Snowflake, userId: Snowflake, body: RESTPutAPIGuildMemberJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTPutAPIGuildMemberResult>;
    /**
     * Fetches all the members of a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#list-guild-members}
     * @param guildId - The id of the guild
     * @param query - The query for fetching the guild members
     * @param options - The options for fetching the guild members
     */
    getMembers(guildId: Snowflake, query?: RESTGetAPIGuildMembersQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildMembersResult>;
    /**
     * Fetches a guild's channels
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-channels}
     * @param guildId - The id of the guild to fetch the channels from
     * @param options - The options for fetching the guild channels
     */
    getChannels(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildChannelsResult>;
    /**
     * Creates a guild channel
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-channel}
     * @param guildId - The id of the guild to create the channel in
     * @param body - The data to create the new channel
     * @param options - The options for creating the guild channel
     */
    createChannel(guildId: Snowflake, body: RESTPostAPIGuildChannelJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIChannel>;
    /**
     * Edits a guild channel's positions
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-channel-positions}
     * @param guildId - The id of the guild to edit the channel positions from
     * @param body - The data to edit the channel positions with
     * @param options - The options for editing the guild channel positions
     */
    setChannelPositions(guildId: Snowflake, body: RESTPatchAPIGuildChannelPositionsJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Fetches the active threads in a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#list-active-guild-threads}
     * @param guildId - The id of the guild to fetch the active threads from
     * @param options - The options for fetching the active threads
     */
    getActiveThreads(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIThreadList>;
    /**
     * Fetches a guild member ban
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-ban}
     * @param guildId - The id of the guild to fetch the ban from
     * @param userId - The id of the user to fetch the ban
     * @param options - The options for fetching the ban
     */
    getMemberBan(guildId: Snowflake, userId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIBan>;
    /**
     * Fetches guild member bans
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-bans}
     * @param guildId - The id of the guild to fetch the bans from
     * @param query - The query options for fetching the bans
     * @param options - The options for fetching the bans
     */
    getMemberBans(guildId: Snowflake, query?: RESTGetAPIGuildBansQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildBansResult>;
    /**
     * Bans a user from a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-ban}
     * @param guildId - The id of the guild to ban the member in
     * @param userId - The id of the user to ban
     * @param body - The payload for banning the user
     * @param options - The options for banning the user
     */
    banUser(guildId: Snowflake, userId: Snowflake, body?: RESTPutAPIGuildBanJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Unbans a user from a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-ban}
     * @param guildId - The id of the guild to unban the member in
     * @param userId - The id of the user to unban
     * @param options - The options for unbanning the user
     */
    unbanUser(guildId: Snowflake, userId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Gets all the roles in a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-roles}
     * @param guildId - The id of the guild to fetch the roles from
     * @param options - The options for fetching the guild roles
     */
    getRoles(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildRolesResult>;
    /**
     * Creates a guild role
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#create-guild-role}
     * @param guildId - The id of the guild to create the role in
     * @param body - The data to create the role with
     * @param options - The options for creating the guild role
     */
    createRole(guildId: Snowflake, body: RESTPostAPIGuildRoleJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIRole>;
    /**
     * Sets role positions in a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role-positions}
     * @param guildId - The id of the guild to set role positions for
     * @param body - The data for setting a role position
     * @param options - The options for setting role positions
     */
    setRolePositions(guildId: Snowflake, body: RESTPatchAPIGuildRolePositionsJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<RESTPatchAPIGuildRolePositionsResult>;
    /**
     * Edits a guild role
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-role}
     * @param guildId - The id of the guild to edit the role in
     * @param roleId - The id of the role to edit
     * @param body - data for editing the role
     * @param options - The options for editing the guild role
     */
    editRole(guildId: Snowflake, roleId: Snowflake, body: RESTPatchAPIGuildRoleJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIRole>;
    /**
     * Deletes a guild role
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-role}
     * @param guildId - The id of the guild to delete the role in
     * @param roleId - The id of the role to delete
     * @param options - The options for deleting the guild role
     */
    deleteRole(guildId: Snowflake, roleId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Edits the multi-factor-authentication (MFA) level of a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-mfa-level}
     * @param guildId - The id of the guild to edit the MFA level for
     * @param level - The new MFA level
     * @param options - The options for editing the MFA level
     */
    editMFALevel(guildId: Snowflake, level: GuildMFALevel, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.RESTPostAPIGuildsMFAJSONBody>;
    /**
     * Fetch the number of members that can be pruned from a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-prune-count}
     * @param guildId - The id of the guild to fetch the number of pruned members from
     * @param query - The query options for fetching the number of pruned members
     * @param options - The options for fetching the number of pruned members
     */
    getPruneCount(guildId: Snowflake, query?: RESTGetAPIGuildPruneCountQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildPruneCountResult>;
    /**
     * Prunes members in a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#begin-guild-prune}
     * @param guildId - The id of the guild to prune members in
     * @param body - The options for pruning members
     * @param options - The options for initiating the prune
     */
    beginPrune(guildId: Snowflake, body?: RESTPostAPIGuildPruneJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<RESTPostAPIGuildPruneResult>;
    /**
     * Fetches voice regions for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-voice-regions}
     * @param guildId - The id of the guild to fetch the voice regions from
     * @param options - The options for fetching the voice regions
     */
    getVoiceRegions(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildVoiceRegionsResult>;
    /**
     * Fetches the invites for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-invites}
     * @param guildId - The id of the guild to fetch the invites from
     * @param options - The options for fetching the invites
     */
    getInvites(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildInvitesResult>;
    /**
     * Fetches the integrations for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-integrations}
     * @param guildId - The id of the guild to fetch the integrations from
     * @param options - The options for fetching the integrations
     */
    getIntegrations(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildIntegrationsResult>;
    /**
     * Deletes an integration from a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#delete-guild-integration}
     * @param guildId - The id of the guild to delete the integration from
     * @param integrationId - The id of the integration to delete
     * @param options - The options for deleting the integration
     */
    deleteIntegration(guildId: Snowflake, integrationId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Fetches the widget settings for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-settings}
     * @param guildId - The id of the guild to fetch the widget settings from
     * @param options - The options for fetching the widget settings
     */
    getWidgetSettings(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildWidgetSettings>;
    /**
     * Edits the widget settings for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-widget}
     * @param guildId - The id of the guild to edit the widget settings from
     * @param body - The new widget settings data
     * @param options - The options for editing the widget settings
     */
    editWidgetSettings(guildId: Snowflake, body: RESTPatchAPIGuildWidgetSettingsJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIGuildWidgetSettings>;
    /**
     * Fetches the widget for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget}
     * @param guildId - The id of the guild to fetch the widget from
     * @param options - The options for fetching the widget
     */
    getWidget(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildWidget>;
    /**
     * Fetches the vanity url for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-vanity-url}
     * @param guildId - The id of the guild to fetch the vanity url from
     * @param options - The options for fetching the vanity url
     */
    getVanityURL(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildVanityUrlResult>;
    /**
     * Fetches the widget image for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-widget-image}
     * @param guildId - The id of the guild to fetch the widget image from
     * @param style - The style of the widget image
     * @param options - The options for fetching the widget image
     */
    getWidgetImage(guildId: Snowflake, style?: GuildWidgetStyle, { signal }?: Pick<RequestData, 'signal'>): Promise<ArrayBuffer>;
    /**
     * Fetches the welcome screen for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-welcome-screen}
     * @param guildId - The id of the guild to fetch the welcome screen from
     * @param options - The options for fetching the welcome screen
     */
    getWelcomeScreen(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildWelcomeScreen>;
    /**
     * Edits the welcome screen for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-welcome-screen}
     * @param guildId - The id of the guild to edit the welcome screen for
     * @param body - The new welcome screen data
     * @param options - The options for editing the welcome screen
     */
    editWelcomeScreen(guildId: Snowflake, body?: RESTPatchAPIGuildWelcomeScreenJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIGuildWelcomeScreen>;
    /**
     * Edits a user's voice state in a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-user-voice-state}
     * @param guildId - The id of the guild to edit the current user's voice state in
     * @param userId - The id of the user to edit the voice state for
     * @param body - The data for editing the voice state
     * @param options - The options for editing the voice state
     */
    editUserVoiceState(guildId: Snowflake, userId: Snowflake, body: RESTPatchAPIGuildVoiceStateUserJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Fetches all emojis for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/emoji#list-guild-emojis}
     * @param guildId - The id of the guild to fetch the emojis from
     * @param options - The options for fetching the emojis
     */
    getEmojis(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildEmojisResult>;
    /**
     * Fetches an emoji for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/emoji#get-guild-emoji}
     * @param guildId - The id of the guild to fetch the emoji from
     * @param emojiId - The id of the emoji to fetch
     * @param options - The options for fetching the emoji
     */
    getEmoji(guildId: Snowflake, emojiId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIEmoji>;
    /**
     * Creates a new emoji for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/emoji#create-guild-emoji}
     * @param guildId - The id of the guild to create the emoji from
     * @param body - The data for creating the emoji
     * @param options - The options for creating the emoji
     */
    createEmoji(guildId: Snowflake, body: RESTPostAPIGuildEmojiJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIEmoji>;
    /**
     * Edits an emoji for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/emoji#modify-guild-emoji}
     * @param guildId - The id of the guild to edit the emoji from
     * @param emojiId - The id of the emoji to edit
     * @param body - The data for editing the emoji
     * @param options - The options for editing the emoji
     */
    editEmoji(guildId: Snowflake, emojiId: Snowflake, body: RESTPatchAPIGuildEmojiJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIEmoji>;
    /**
     * Deletes an emoji for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/emoji#delete-guild-emoji}
     * @param guildId - The id of the guild to delete the emoji from
     * @param emojiId - The id of the emoji to delete
     * @param options - The options for deleting the emoji
     */
    deleteEmoji(guildId: Snowflake, emojiId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Fetches all scheduled events for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#list-scheduled-events-for-guild}
     * @param guildId - The id of the guild to fetch the scheduled events from
     * @param query - The query options for fetching the scheduled events
     * @param options - The options for fetching the scheduled events
     */
    getScheduledEvents(guildId: Snowflake, query?: RESTGetAPIGuildScheduledEventsQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildScheduledEventsResult>;
    /**
     * Creates a new scheduled event for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#create-guild-scheduled-event}
     * @param guildId - The id of the guild to create the scheduled event from
     * @param body - The data to create the event with
     * @param options - The options for creating the scheduled event
     */
    createScheduledEvent(guildId: Snowflake, body: RESTPostAPIGuildScheduledEventJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIGuildScheduledEvent>;
    /**
     * Fetches a scheduled event for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event}
     * @param guildId - The id of the guild to fetch the scheduled event from
     * @param eventId - The id of the scheduled event to fetch
     * @param query - The options for fetching the scheduled event
     * @param options - The options for fetching the scheduled event
     */
    getScheduledEvent(guildId: Snowflake, eventId: Snowflake, query?: RESTGetAPIGuildScheduledEventQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildScheduledEvent>;
    /**
     * Edits a scheduled event for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#modify-guild-scheduled-event}
     * @param guildId - The id of the guild to edit the scheduled event from
     * @param eventId - The id of the scheduled event to edit
     * @param body - The new event data
     * @param options - The options for editing the scheduled event
     */
    editScheduledEvent(guildId: Snowflake, eventId: Snowflake, body: RESTPatchAPIGuildScheduledEventJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIGuildScheduledEvent>;
    /**
     * Deletes a scheduled event for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#delete-guild-scheduled-event}
     * @param guildId - The id of the guild to delete the scheduled event from
     * @param eventId - The id of the scheduled event to delete
     * @param options - The options for deleting the scheduled event
     */
    deleteScheduledEvent(guildId: Snowflake, eventId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Gets all users that are interested in a scheduled event
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-scheduled-event#get-guild-scheduled-event-users}
     * @param guildId - The id of the guild to fetch the scheduled event users from
     * @param eventId - The id of the scheduled event to fetch the users for
     * @param query - The options for fetching the scheduled event users
     * @param options - The options for fetching the scheduled event users
     */
    getScheduledEventUsers(guildId: Snowflake, eventId: Snowflake, query?: RESTGetAPIGuildScheduledEventUsersQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildScheduledEventUsersResult>;
    /**
     * Fetches all the templates for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-template#get-guild-templates}
     * @param guildId - The id of the guild to fetch the templates from
     * @param options - The options for fetching the templates
     */
    getTemplates(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildTemplatesResult>;
    /**
     * Syncs a template for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-template#sync-guild-template}
     * @param guildId - The id of the guild to sync the template from
     * @param templateCode - The code of the template to sync
     * @param options - The options for syncing the template
     */
    syncTemplate(guildId: Snowflake, templateCode: string, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APITemplate>;
    /**
     * Edits a template for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-template#modify-guild-template}
     * @param guildId - The id of the guild to edit the template from
     * @param templateCode - The code of the template to edit
     * @param body - The data for editing the template
     * @param options - The options for editing the template
     */
    editTemplate(guildId: Snowflake, templateCode: string, body: RESTPatchAPIGuildTemplateJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APITemplate>;
    /**
     * Deletes a template for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-template#delete-guild-template}
     * @param guildId - The id of the guild to delete the template from
     * @param templateCode - The code of the template to delete
     * @param options - The options for deleting the template
     */
    deleteTemplate(guildId: Snowflake, templateCode: string, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Fetches all the stickers for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/sticker#list-guild-stickers}
     * @param guildId - The id of the guild to fetch the stickers from
     * @param options - The options for fetching the stickers
     */
    getStickers(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildStickersResult>;
    /**
     * Fetches a sticker for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/sticker#get-guild-sticker}
     * @param guildId - The id of the guild to fetch the sticker from
     * @param stickerId - The id of the sticker to fetch
     * @param options - The options for fetching the sticker
     */
    getSticker(guildId: Snowflake, stickerId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APISticker>;
    /**
     * Creates a sticker for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/sticker#create-guild-sticker}
     * @param guildId - The id of the guild to create the sticker for
     * @param body - The data for creating the sticker
     * @param options - The options for creating the sticker
     */
    createSticker(guildId: Snowflake, { file, ...body }: Omit<RESTPostAPIGuildStickerFormDataBody, 'file'> & {
        file: RawFile;
    }, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APISticker>;
    /**
     * Edits a sticker for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/sticker#modify-guild-sticker}
     * @param guildId - The id of the guild to edit the sticker from
     * @param stickerId - The id of the sticker to edit
     * @param body - The data for editing the sticker
     * @param options - The options for editing the sticker
     */
    editSticker(guildId: Snowflake, stickerId: Snowflake, body: RESTPatchAPIGuildStickerJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APISticker>;
    /**
     * Deletes a sticker for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/sticker#delete-guild-sticker}
     * @param guildId - The id of the guild to delete the sticker from
     * @param stickerId - The id of the sticker to delete
     * @param options - The options for deleting the sticker
     */
    deleteSticker(guildId: Snowflake, stickerId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Fetches the audit logs for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/audit-log#get-guild-audit-log}
     * @param guildId - The id of the guild to fetch the audit logs from
     * @param query - The query options for fetching the audit logs
     * @param options - The options for fetching the audit logs
     */
    getAuditLogs(guildId: Snowflake, query?: RESTGetAPIAuditLogQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIAuditLog>;
    /**
     * Fetches all auto moderation rules for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/auto-moderation#list-auto-moderation-rules-for-guild}
     * @param guildId - The id of the guild to fetch the auto moderation rules from
     * @param options - The options for fetching the auto moderation rules
     */
    getAutoModerationRules(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIAutoModerationRulesResult>;
    /**
     * Fetches an auto moderation rule for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/auto-moderation#get-auto-moderation-rule}
     * @param guildId - The id of the guild to fetch the auto moderation rule from
     * @param ruleId - The id of the auto moderation rule to fetch
     * @param options - The options for fetching the auto moderation rule
     */
    getAutoModerationRule(guildId: Snowflake, ruleId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIAutoModerationRule>;
    /**
     * Creates a new auto moderation rule for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/auto-moderation#create-auto-moderation-rule}
     * @param guildId - The id of the guild to create the auto moderation rule from
     * @param body - The data for creating the auto moderation rule
     * @param options - The options for creating the auto moderation rule
     */
    createAutoModerationRule(guildId: Snowflake, body: RESTPostAPIAutoModerationRuleJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIAutoModerationRule>;
    /**
     * Edits an auto moderation rule for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/auto-moderation#modify-auto-moderation-rule}
     * @param guildId - The id of the guild to edit the auto moderation rule from
     * @param ruleId - The id of the auto moderation rule to edit
     * @param body - The data for editing the auto moderation rule
     * @param options - The options for editing the auto moderation rule
     */
    editAutoModerationRule(guildId: Snowflake, ruleId: Snowflake, body: RESTPatchAPIAutoModerationRuleJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIAutoModerationRule>;
    /**
     * Deletes an auto moderation rule for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/auto-moderation#delete-auto-moderation-rule}
     * @param guildId - The id of the guild to delete the auto moderation rule from
     * @param ruleId - The id of the auto moderation rule to delete
     * @param options - The options for deleting the auto moderation rule
     */
    deleteAutoModerationRule(guildId: Snowflake, ruleId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Fetches a guild member
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-member}
     * @param guildId - The id of the guild
     * @param userId - The id of the user
     * @param options - The options for fetching the guild member
     */
    getMember(guildId: Snowflake, userId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildMember>;
    /**
     * Searches for guild members
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#search-guild-members}
     * @param guildId - The id of the guild to search in
     * @param query - The query to search for
     * @param options - The options for searching for guild members
     */
    searchForMembers(guildId: Snowflake, query: RESTGetAPIGuildMembersSearchQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIGuildMembersSearchResult>;
    /**
     * Edits a guild member
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-member}
     * @param guildId - The id of the guild
     * @param userId - The id of the user
     * @param body - The data for editing the guild member
     * @param options - The options for editing the guild member
     */
    editMember(guildId: Snowflake, userId: Snowflake, body?: RESTPatchAPIGuildMemberJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIGuildMember>;
    /**
     * Removes a member from a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member}
     * @param guildId - The id of the guild
     * @param userId - The id of the user
     * @param options - The options for removing the guild member
     */
    removeMember(guildId: Snowflake, userId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<unknown>;
    /**
     * Adds a role to a guild member
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#add-guild-member-role}
     * @param guildId - The id of the guild
     * @param userId - The id of the user
     * @param roleId - The id of the role
     * @param options - The options for adding a role to a guild member
     */
    addRoleToMember(guildId: Snowflake, userId: Snowflake, roleId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Removes a role from a guild member
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#remove-guild-member-role}
     * @param guildId - The id of the guild
     * @param userId - The id of the user
     * @param roleId - The id of the role
     * @param options - The options for removing a role from a guild member
     */
    removeRoleFromMember(guildId: Snowflake, userId: Snowflake, roleId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
    /**
     * Fetches a guild template
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-template#get-guild-template}
     * @param templateCode - The code of the template
     * @param options - The options for fetching the guild template
     */
    getTemplate(templateCode: string, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APITemplate>;
    /**
     * Creates a new template
     *
     * @see {@link https://discord.com/developers/docs/resources/guild-template#create-guild-template}
     * @param templateCode - The code of the template
     * @param body - The data for creating the template
     * @param options - The options for creating the template
     */
    createTemplate(templateCode: string, body: RESTPostAPIGuildTemplatesJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APITemplate>;
    /**
     * Fetches webhooks for a guild
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#get-guild-webhooks}
     * @param id - The id of the guild
     */
    getWebhooks(id: Snowflake): Promise<RESTGetAPIGuildWebhooksResult>;
    /**
     * Sets the voice state for the current user
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-user-voice-state}
     * @param guildId - The id of the guild
     * @param body - The options for setting the voice state
     */
    setVoiceState(guildId: Snowflake, body?: RESTPatchAPIGuildVoiceStateCurrentMemberJSONBody): Promise<never>;
    /**
     * Fetches a guild onboarding
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#get-guild-onboarding}
     * @param guildId - The id of the guild
     * @param options - The options for fetching the guild onboarding
     */
    getOnboarding(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildOnboarding>;
    /**
     * Edits a guild onboarding
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-guild-onboarding}
     * @param guildId - The id of the guild
     * @param body - The data for editing the guild onboarding
     * @param options - The options for editing the guild onboarding
     */
    editOnboarding(guildId: Snowflake, body: RESTPutAPIGuildOnboardingJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIGuildOnboarding>;
}

declare class WebhooksAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Fetches a webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook}
     * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-with-token}
     * @param id - The id of the webhook
     * @param options - The options for fetching the webhook
     */
    get(id: Snowflake, { token, signal }?: Pick<RequestData, 'signal'> & {
        token?: string | undefined;
    }): Promise<discord_api_types_v10.APIWebhook>;
    /**
     * Edits a webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook}
     * @see {@link https://discord.com/developers/docs/resources/webhook#modify-webhook-with-token}
     * @param id - The id of the webhook to edit
     * @param body - The new webhook data
     * @param options - The options for editing the webhook
     */
    edit(id: Snowflake, body: RESTPatchAPIWebhookJSONBody, { token, reason, signal }?: Pick<RequestData, 'reason' | 'signal'> & {
        token?: string | undefined;
    }): Promise<discord_api_types_v10.APIWebhook>;
    /**
     * Deletes a webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook}
     * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-with-token}
     * @param id - The id of the webhook to delete
     * @param options - The options for deleting the webhook
     */
    delete(id: Snowflake, { token, reason, signal }?: Pick<RequestData, 'reason' | 'signal'> & {
        token?: string | undefined;
    }): Promise<void>;
    /**
     * Executes a webhook and returns the created message
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook}
     * @param id - The id of the webhook
     * @param token - The token of the webhook
     * @param body - The data for executing the webhook
     * @param options - The options for executing the webhook
     */
    execute(id: Snowflake, token: string, body: RESTPostAPIWebhookWithTokenJSONBody & RESTPostAPIWebhookWithTokenQuery & {
        files?: RawFile[];
        wait: true;
    }, options?: Pick<RequestData, 'signal'>): Promise<RESTPostAPIWebhookWithTokenWaitResult>;
    /**
     * Executes a webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook}
     * @param id - The id of the webhook
     * @param token - The token of the webhook
     * @param body - The data for executing the webhook
     * @param options - The options for executing the webhook
     */
    execute(id: Snowflake, token: string, body: RESTPostAPIWebhookWithTokenJSONBody & RESTPostAPIWebhookWithTokenQuery & {
        files?: RawFile[];
        wait?: false;
    }, options?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Executes a slack webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#execute-slackcompatible-webhook}
     * @param id - The id of the webhook
     * @param token - The token of the webhook
     * @param body - The data for executing the webhook
     * @param query - The query options for executing the webhook
     * @param options - The options for executing the webhook
     */
    executeSlack(id: Snowflake, token: string, body: unknown, query?: RESTPostAPIWebhookWithTokenSlackQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Executes a github webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#execute-githubcompatible-webhook}
     * @param id - The id of the webhook
     * @param token - The token of the webhook
     * @param body - The data for executing the webhook
     * @param query - The options for executing the webhook
     * @param options - The options for executing the webhook
     */
    executeGitHub(id: Snowflake, token: string, body: unknown, query?: RESTPostAPIWebhookWithTokenGitHubQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Fetches an associated message from a webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#get-webhook-message}
     * @param id - The id of the webhook
     * @param token - The token of the webhook
     * @param messageId - The id of the message to fetch
     * @param query - The query options for fetching the message
     * @param options - The options for fetching the message
     */
    getMessage(id: Snowflake, token: string, messageId: Snowflake, query?: RESTGetAPIWebhookWithTokenMessageQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIMessage>;
    /**
     * Edits an associated message from a webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#edit-webhook-message}
     * @param id - The id of the webhook
     * @param token - The token of the webhook
     * @param messageId - The id of the message to edit
     * @param body - The data for editing the message
     * @param options - The options for editing the message
     */
    editMessage(id: Snowflake, token: string, messageId: Snowflake, { thread_id, files, ...body }: RESTPatchAPIWebhookWithTokenMessageJSONBody & {
        files?: RawFile[];
        thread_id?: string;
    }, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIMessage>;
    /**
     * Deletes an associated message from a webhook
     *
     * @see {@link https://discord.com/developers/docs/resources/webhook#delete-webhook-message}
     * @param id - The id of the webhook
     * @param token - The token of the webhook
     * @param messageId - The id of the message to delete
     * @param query - The options for deleting the message
     * @param options - The options for deleting the message
     */
    deleteMessage(id: Snowflake, token: string, messageId: Snowflake, query?: {
        thread_id?: Snowflake;
    }, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
}

declare class InteractionsAPI {
    private readonly rest;
    private readonly webhooks;
    constructor(rest: REST, webhooks: WebhooksAPI);
    /**
     * Replies to an interaction
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
     * @param interactionId - The id of the interaction
     * @param interactionToken - The token of the interaction
     * @param body - The callback data for replying
     * @param options - The options for replying
     */
    reply(interactionId: Snowflake, interactionToken: string, { files, ...data }: APIInteractionResponseCallbackData & {
        files?: RawFile[];
    }, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Defers the reply to an interaction
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
     * @param interactionId - The id of the interaction
     * @param interactionToken - The token of the interaction
     * @param data - The data for deferring the reply
     * @param options - The options for deferring
     */
    defer(interactionId: Snowflake, interactionToken: string, data?: APIInteractionResponseDeferredChannelMessageWithSource['data'], { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Defers an update from a message component interaction
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
     * @param interactionId - The id of the interaction
     * @param interactionToken - The token of the interaction
     * @param options - The options for deferring
     */
    deferMessageUpdate(interactionId: Snowflake, interactionToken: string, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Reply to a deferred interaction
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-followup-message}
     * @param applicationId - The application id of the interaction
     * @param interactionToken - The token of the interaction
     * @param body - The callback data for replying
     * @param options - The options for replying
     */
    followUp(applicationId: Snowflake, interactionToken: string, body: APIInteractionResponseCallbackData & {
        files?: RawFile[];
    }, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIMessage>;
    /**
     * Edits the initial reply to an interaction
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-original-interaction-response}
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#edit-followup-message}
     * @param applicationId - The application id of the interaction
     * @param interactionToken - The token of the interaction
     * @param callbackData - The callback data for editing the reply
     * @param messageId - The id of the message to edit. If omitted, the original reply will be edited
     * @param options - The options for editing the reply
     */
    editReply(applicationId: Snowflake, interactionToken: string, callbackData: APIInteractionResponseCallbackData & {
        files?: RawFile[];
    }, messageId?: Snowflake | '@original', { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIMessage>;
    /**
     * Fetches the initial reply to an interaction
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#get-original-interaction-response}
     * @param applicationId - The application id of the interaction
     * @param interactionToken - The token of the interaction
     * @param options - The options for fetching the reply
     */
    getOriginalReply(applicationId: Snowflake, interactionToken: string, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIMessage>;
    /**
     * Deletes the initial reply to an interaction
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-original-interaction-response}
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#delete-followup-message}
     * @param applicationId - The application id of the interaction
     * @param interactionToken - The token of the interaction
     * @param messageId - The id of the message to delete. If omitted, the original reply will be deleted
     * @param options - The options for deleting the reply
     */
    deleteReply(applicationId: Snowflake, interactionToken: string, messageId?: Snowflake | '@original', { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Updates the the message the component interaction was triggered on
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
     * @param interactionId - The id of the interaction
     * @param interactionToken - The token of the interaction
     * @param callbackData - The callback data for updating the interaction
     * @param options - The options for updating the interaction
     */
    updateMessage(interactionId: Snowflake, interactionToken: string, { files, ...data }: APIInteractionResponseCallbackData & {
        files?: RawFile[];
    }, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Sends an autocomplete response to an interaction
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
     * @param interactionId - The id of the interaction
     * @param interactionToken - The token of the interaction
     * @param callbackData - The callback data for the autocomplete response
     * @param options - The options for sending the autocomplete response
     */
    createAutocompleteResponse(interactionId: Snowflake, interactionToken: string, callbackData: APICommandAutocompleteInteractionResponseCallbackData, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Sends a modal response to an interaction
     *
     * @see {@link https://discord.com/developers/docs/interactions/receiving-and-responding#create-interaction-response}
     * @param interactionId - The id of the interaction
     * @param interactionToken - The token of the interaction
     * @param callbackData - The modal callback data to send
     * @param options - The options for sending the modal
     */
    createModal(interactionId: Snowflake, interactionToken: string, callbackData: APIModalInteractionResponseCallbackData, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
}

declare class InvitesAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Fetches an invite
     *
     * @see {@link https://discord.com/developers/docs/resources/invite#get-invite}
     * @param code - The invite code
     * @param query - The options for fetching the invite
     * @param options - The options for fetching the invite
     */
    get(code: string, query?: RESTGetAPIInviteQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIInvite>;
    /**
     * Deletes an invite
     *
     * @see {@link https://discord.com/developers/docs/resources/invite#delete-invite}
     * @param code - The invite code
     * @param options - The options for deleting the invite
     */
    delete(code: string, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
}

declare class OAuth2API {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Creates an OAuth2 authorization URL given the options
     *
     * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-authorization-url-example}
     * @param options - The options for creating the authorization URL
     */
    generateAuthorizationURL(options: RESTOAuth2AuthorizationQuery): string;
    /**
     * Performs an OAuth2 token exchange, giving you an access token
     *
     * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-access-token-exchange-example}
     * @param body - The body of the token exchange request
     * @param options - The options for the token exchange request
     */
    tokenExchange(body: RESTPostOAuth2AccessTokenURLEncodedData, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTPostOAuth2AccessTokenResult>;
    /**
     * Refreshes an OAuth2 access token, giving you a new one
     *
     * @see {@link https://discord.com/developers/docs/topics/oauth2#authorization-code-grant-refresh-token-exchange-example}
     * @param body - The options for the refresh token request
     * @param options - The options for the refresh token request
     */
    refreshToken(body: RESTPostOAuth2RefreshTokenURLEncodedData, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTPostOAuth2AccessTokenResult>;
    /**
     * Fetches the bearer token for the current application
     *
     * @remarks
     * This is primarily used for testing purposes
     * @see {@link https://discord.com/developers/docs/topics/oauth2#client-credentials-grant}
     * @param body - The options for the client credentials grant request
     * @param options - The options for the client credentials grant request
     */
    getToken(body: RESTPostOAuth2ClientCredentialsURLEncodedData, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.RESTOAuth2ImplicitAuthorizationURLFragmentResult>;
    /**
     * Fetches the current bot's application information
     *
     * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-bot-application-information}
     * @param options - The options for the current bot application information request
     */
    getCurrentBotApplicationInformation({ signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIOAuth2CurrentApplicationResult>;
    /**
     * Fetches the current authorization information
     *
     * @see {@link https://discord.com/developers/docs/topics/oauth2#get-current-authorization-information}
     * @param options - The options for the current authorization information request
     */
    getCurrentAuthorizationInformation({ signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIOAuth2CurrentAuthorizationResult>;
}

declare class RoleConnectionsAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Gets the role connection metadata records for the application
     *
     * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#get-application-role-connection-metadata-records}
     * @param applicationId - The id of the application to get role connection metadata records for
     * @param options - The options for fetching the role connection metadata records
     */
    getMetadataRecords(applicationId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIApplicationRoleConnectionMetadataResult>;
    /**
     * Updates the role connection metadata records for the application
     *
     * @see {@link https://discord.com/developers/docs/resources/application-role-connection-metadata#update-application-role-connection-metadata-records}
     * @param applicationId - The id of the application to update role connection metadata records for
     * @param body - The new role connection metadata records
     * @param options - The options for updating the role connection metadata records
     */
    updateMetadataRecords(applicationId: Snowflake, body: RESTPutAPIApplicationRoleConnectionMetadataJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTPutAPIApplicationRoleConnectionMetadataResult>;
}

declare class StageInstancesAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Creates a new stage instance
     *
     * @see {@link https://discord.com/developers/docs/resources/stage-instance#get-stage-instance}
     * @param body - The data for creating the new stage instance
     * @param options - The options for creating the new stage instance
     */
    create(body: RESTPostAPIStageInstanceJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIStageInstance>;
    /**
     * Fetches a stage instance
     *
     * @see {@link https://discord.com/developers/docs/resources/stage-instance#get-stage-instance}
     * @param channelId - The id of the channel
     * @param options - The options for fetching the stage instance
     */
    get(channelId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIStageInstance>;
    /**
     * Edits a stage instance
     *
     * @see {@link https://discord.com/developers/docs/resources/stage-instance#modify-stage-instance}
     * @param channelId - The id of the channel
     * @param body - The new stage instance data
     * @param options - The options for editing the stage instance
     */
    edit(channelId: Snowflake, body: RESTPatchAPIStageInstanceJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIStageInstance>;
    /**
     * Deletes a stage instance
     *
     * @see {@link https://discord.com/developers/docs/resources/stage-instance#delete-stage-instance}
     * @param channelId - The id of the channel
     * @param options - The options for deleting the stage instance
     */
    delete(channelId: Snowflake, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<void>;
}

declare class StickersAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Fetches all of the sticker packs
     *
     * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
     * @param options - The options for fetching the sticker packs
     */
    getStickers({ signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetStickerPacksResult>;
    /**
     * Fetches all of the sticker packs
     *
     * @see {@link https://discord.com/developers/docs/resources/sticker#list-sticker-packs}
     * @param options - The options for fetching the sticker packs
     * @deprecated Use {@link StickersAPI.getStickers} instead.
     */
    getNitroStickers(options?: Pick<RequestData, 'signal'>): Promise<RESTGetStickerPacksResult>;
    /**
     * Fetches a sticker
     *
     * @see {@link https://discord.com/developers/docs/resources/sticker#get-sticker}
     * @param stickerId - The id of the sticker
     * @param options - The options for fetching the sticker
     */
    get(stickerId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APISticker>;
}

declare class ThreadsAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Adds the current user to a thread
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#join-thread}
     * @param threadId - The id of the thread to join
     * @param options - The options for joining the thread
     */
    join(threadId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Adds a member to a thread
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#add-thread-member}
     * @param threadId - The id of the thread to add the member to
     * @param userId - The id of the user to add to the thread
     * @param options - The options for adding the member to the thread
     */
    addMember(threadId: Snowflake, userId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Removes the current user from a thread
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#leave-thread}
     * @param threadId - The id of the thread to leave
     * @param options - The options for leaving the thread
     */
    leave(threadId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Removes a member from a thread
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#remove-thread-member}
     * @param threadId - The id of the thread to remove the member from
     * @param userId - The id of the user to remove from the thread
     * @param options - The options for removing the member from the thread
     */
    removeMember(threadId: Snowflake, userId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Fetches a member of a thread
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#get-thread-member}
     * @param threadId - The id of the thread to fetch the member from
     * @param userId - The id of the user
     * @param options - The options for fetching the member
     */
    getMember(threadId: Snowflake, userId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<APIThreadMember>;
    /**
     * Fetches all members of a thread
     *
     * @see {@link https://discord.com/developers/docs/resources/channel#list-thread-members}
     * @param threadId - The id of the thread to fetch the members from
     * @param options - The options for fetching the members
     */
    getAllMembers(threadId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIChannelThreadMembersResult>;
}

declare class UsersAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Fetches a user by their id
     *
     * @see {@link https://discord.com/developers/docs/resources/user#get-user}
     * @param userId - The id of the user to fetch
     * @param options - The options for fetching the user
     */
    get(userId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIUser>;
    /**
     * Returns the user object of the requester's account
     *
     * @see {@link https://discord.com/developers/docs/resources/user#get-current-user}
     * @param options - The options for fetching the current user
     */
    getCurrent({ signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIUser>;
    /**
     * Returns a list of partial guild objects the current user is a member of
     *
     * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guilds}
     * @param query - The query options for fetching the current user's guilds
     * @param options - The options for fetching the guilds
     */
    getGuilds(query?: RESTGetAPICurrentUserGuildsQuery, { signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPICurrentUserGuildsResult>;
    /**
     * Leaves the guild with the given id
     *
     * @see {@link https://discord.com/developers/docs/resources/user#leave-guild}
     * @param guildId - The id of the guild
     * @param options - The options for leaving the guild
     */
    leaveGuild(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<void>;
    /**
     * Edits the current user
     *
     * @see {@link https://discord.com/developers/docs/resources/user#modify-current-user}
     * @param body - The new data for the current user
     * @param options - The options for editing the user
     */
    edit(body: RESTPatchAPICurrentUserJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIUser>;
    /**
     * Fetches the guild member for the current user
     *
     * @see {@link https://discord.com/developers/docs/resources/user#get-current-user-guild-member}
     * @param guildId - The id of the guild
     * @param options - The options for fetching the guild member
     */
    getGuildMember(guildId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIGuildMember>;
    /**
     * Edits the guild member for the current user
     *
     * @see {@link https://discord.com/developers/docs/resources/guild#modify-current-member}
     * @param guildId - The id of the guild
     * @param body - The new data for the guild member
     * @param options - The options for editing the guild member
     */
    editCurrentGuildMember(guildId: Snowflake, body?: RESTPatchAPIGuildMemberJSONBody, { reason, signal }?: Pick<RequestData, 'reason' | 'signal'>): Promise<discord_api_types_v10.APIGuildMember>;
    /**
     * Opens a new DM channel with a user
     *
     * @see {@link https://discord.com/developers/docs/resources/user#create-dm}
     * @param userId - The id of the user to open a DM channel with
     * @param options - The options for opening the DM
     */
    createDM(userId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIChannel>;
    /**
     * Gets the current user's connections
     *
     * @see {@link https://discord.com/developers/docs/resources/user#get-user-connections}
     * @param options - The options for fetching the user's connections
     */
    getConnections({ signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPICurrentUserConnectionsResult>;
    /**
     * Gets the current user's active application role connection
     *
     * @see {@link https://discord.com/developers/docs/resources/user#get-user-application-role-connection}
     * @param applicationId - The id of the application
     * @param options - The options for fetching the role connections
     */
    getApplicationRoleConnection(applicationId: Snowflake, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIApplicationRoleConnection>;
    /**
     * Updates the current user's application role connection
     *
     * @see {@link https://discord.com/developers/docs/resources/user#update-user-application-role-connection}
     * @param applicationId - The id of the application
     * @param body - The data for updating the application role connection
     * @param options - The options for updating the application role connection
     */
    updateApplicationRoleConnection(applicationId: Snowflake, body: RESTPutAPICurrentUserApplicationRoleConnectionJSONBody, { signal }?: Pick<RequestData, 'signal'>): Promise<discord_api_types_v10.APIApplicationRoleConnection>;
}

declare class VoiceAPI {
    private readonly rest;
    constructor(rest: REST);
    /**
     * Fetches all voice regions
     *
     * @see {@link https://discord.com/developers/docs/resources/voice#list-voice-regions}
     * @param options - The options for fetching the voice regions
     */
    getVoiceRegions({ signal }?: Pick<RequestData, 'signal'>): Promise<RESTGetAPIVoiceRegionsResult>;
}

declare class API {
    readonly rest: REST;
    readonly applicationCommands: ApplicationCommandsAPI;
    readonly applications: ApplicationsAPI;
    readonly channels: ChannelsAPI;
    readonly guilds: GuildsAPI;
    readonly interactions: InteractionsAPI;
    readonly invites: InvitesAPI;
    readonly oauth2: OAuth2API;
    readonly roleConnections: RoleConnectionsAPI;
    readonly stageInstances: StageInstancesAPI;
    readonly stickers: StickersAPI;
    readonly threads: ThreadsAPI;
    readonly users: UsersAPI;
    readonly voice: VoiceAPI;
    readonly webhooks: WebhooksAPI;
    constructor(rest: REST);
}

interface DescriptiveRawFile extends RawFile {
    description?: string;
}
/**
 * A utility function to create a form data payload given an array of file buffers
 *
 * @param files - The files to create a form data payload for
 * @param options - The additional options for the form data payload
 */
declare function withFiles(files: DescriptiveRawFile[], options: APIInteractionResponseCallbackData): {
    body: {
        attachments: {
            id: string;
            description: string | undefined;
        }[];
        flags?: discord_api_types_v10.MessageFlags;
        content?: string | undefined;
        tts?: boolean | undefined;
        embeds?: discord_api_types_v10.APIEmbed[] | undefined;
        allowed_mentions?: discord_api_types_v10.APIAllowedMentions | undefined;
        components?: discord_api_types_v10.APIActionRowComponent<discord_api_types_v10.APIMessageActionRowComponent>[] | undefined;
        thread_name?: string | undefined;
    };
    files: {
        name: string;
        data: string | number | boolean | Uint8Array | Buffer;
    }[];
};

/**
 * The {@link https://github.com/discordjs/discord.js/blob/main/packages/core#readme | @discordjs/core} version
 * that you are currently using.
 */
declare const version: string;

export { API, ApplicationCommandsAPI, ApplicationsAPI, ChannelsAPI, DescriptiveRawFile, GuildsAPI, InteractionsAPI, InvitesAPI, OAuth2API, RoleConnectionsAPI, StageInstancesAPI, StartForumThreadOptions, StickersAPI, ThreadsAPI, UsersAPI, VoiceAPI, WebhooksAPI, version, withFiles };
