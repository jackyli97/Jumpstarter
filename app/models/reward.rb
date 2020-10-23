# == Schema Information
#
# Table name: rewards
#
#  id                 :bigint           not null, primary key
#  project_id         :integer          not null
#  title              :string           not null
#  description        :text             not null
#  estimated_delivery :date             not null
#  shipping_loc       :string           not null
#  cost               :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
class Reward < ApplicationRecord
    validates :title, :description, :estimated_delivery, :shipping_loc, :cost, presence: true

    belongs_to :project,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Project

    has_many :backings,
        primary_key: :id,
        foreign_key: :reward_id,
        class_name: :Backing

    has_many :receivers,
        through: :backings,
        source: :backer

    has_one :author,
        through: :project,
        source: :author

    def self.convert_to_date(string)
        Date.new((string[0..3]).to_i, (string[5..6]).to_i, (string[8..9]).to_i)
    end
end
