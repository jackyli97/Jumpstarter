class ChangeColumnNullBackings < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:backings, :reward_id, true)
  end
end
