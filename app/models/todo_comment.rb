class TodoComment < ActiveRecord::Base

  belongs_to :todo
  validates :content, :todo, :presence => true

end
