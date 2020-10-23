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
require 'test_helper'

class RewardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
