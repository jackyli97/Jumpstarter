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
#  campaign             :text
#
class Project < ApplicationRecord
    validates :title, :description, :amount_pledged, :funding_goal, :end_date, :location, :risks_and_challenges, presence: true 

    # validate :ensure_photo

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :category,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :Category

    has_many :rewards,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Reward

    has_many :backings,
        primary_key: :id,
        foreign_key: :project_id,
        class_name: :Backing

    has_one_attached :photo
    # has_one_attached :large_photo
        # do this when we need a bigger photo

    # def ensure_photo
    #     unless self.photo.attached?
    #         errors[:photo] << "Must be attached"
    #     end
    # end

    def self.convert_to_date(string)
        Date.new((string[0..3]).to_i, (string[5..6]).to_i, (string[8..9]).to_i)
    end

    def self.get_nine_projects()
        projects = Project.all.to_a
        filtered_projs = []
        until filtered_projs.length == 9
            sample = projects.sample
            if !filtered_projs.include?(sample)
                filtered_projs.append(sample)
            end
        end
        filtered_projs
    end

    def self.num_backings(projects)
        if projects.is_a? Array
            num_hash = Hash.new {|h,k| h[k] = 0}
            projects.each {|project| num_hash[project.id] = (project.backings.length)}
        else
            return projects.backings.length
        end
        return num_hash
    end

end
