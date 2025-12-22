
'use client'
import { useState } from 'react'
import { Campaign } from '@/types/sms'
import { getCampaigns, addTagToCampaign } from '@/features/sms/service'
import CampaignCard from '@/components/campaign/sms/CampaginCard'
import TagForm from '@/components/campaign/sms/TagForm'

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(getCampaigns())

  const handleAddTag = (campaignId: string) => (tag: any) => {
    addTagToCampaign(campaignId, tag)
    setCampaigns([...getCampaigns()])
  }

  return (
    <div className="space-y-4">
      {campaigns.map(c => (
        <div key={c.id} className="border p-2">
          <CampaignCard campaign={c} />
          <TagForm onAddTag={handleAddTag(c.id)} />
        </div>
      ))}
    </div>
  )
}
