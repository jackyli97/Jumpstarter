# == Schema Information
#
# Table name: backings
#
#  id             :bigint           not null, primary key
#  backing_amount :integer          not null
#  backer_id      :integer          not null
#  reward_id      :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#  project_id     :integer          not null
#
class Backing < ApplicationRecord
    validates :backing_amount, presence: true

    belongs_to :reward,
        primary_key: :id,
        foreign_key: :reward_id,
        class_name: :Reward,
        optional: :true


    belongs_to :backer,
        primary_key: :id,
        foreign_key: :backer_id,
        class_name: :User

    belongs_to :project,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Project

end
