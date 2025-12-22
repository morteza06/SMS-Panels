import { Campaign, Message, Tag } from '@/types/sms'

let campaigns: Campaign[] = []
let messages: Message[] = []

export function addTagToCampaign(campaignId: string, tag: Tag) {
  const campaign = campaigns.find(c => c.id === campaignId)
  if (!campaign) throw new Error('Campaign not found')
  campaign.tags = [...(campaign.tags || []), tag]
  return campaign
}

export function addTagToMessage(messageId: string, tag: Tag) {
  const message = messages.find(m => m.id === messageId)
  if (!message) throw new Error('Message not found')
  message.tags = [...(message.tags || []), tag]
  return message
}

export function getCampaigns() {
  return campaigns
}

export function getMessages() {
  return messages
}
