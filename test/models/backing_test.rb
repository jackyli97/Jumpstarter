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
require 'test_helper'

class BackingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
