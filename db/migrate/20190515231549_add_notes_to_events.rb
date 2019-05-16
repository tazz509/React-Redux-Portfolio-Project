class AddNotesToEvents < ActiveRecord::Migration[5.1]
  def change
    add_column :events, :notes, :string
  end
end
