import { Campaign } from '@/types/sms'

type Props = { campaign: Campaign }

export default function CampaignCard({ campaign }: Props) {
  return (
    <div className="border p-2 mb-2">
      <h3>{campaign.name}</h3>
      <div className="flex gap-1 mt-1">
        {campaign.tags?.map(tag => (
          <span key={tag.id} style={{ backgroundColor: tag.color }} className="px-2 py-0.5 rounded text-white text-xs">
            {tag.name}
          </span>
        ))}
      </div>
    </div>
  )
}
