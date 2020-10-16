# == Schema Information
#
# Table name: projects
#
#  id                   :bigint           not null, primary key
#  title                :string           not null
#  description          :text             not null
#  updates              :text
#  faq                  :text
#  author_id            :integer          not null
#  amount_pledged       :integer          not null
#  funding_goal         :integer          not null
#  end_date             :date             not null
#  category_id          :integer          not null
#  location             :string           not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#  risks_and_challenges :text             not null
#
class Project < ApplicationRecord
    validates :title, :description, :amount_pledged, :funding_goal, :end_date, :location, :risks_and_challenges, presence: true 
    
    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User
end
