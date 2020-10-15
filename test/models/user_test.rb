# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  biography       :text
#  location        :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  name            :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
