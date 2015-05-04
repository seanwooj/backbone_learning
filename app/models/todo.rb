class Todo < ActiveRecord::Base
	has_many :comments, :class_name => "TodoComment"

  validates :title, :presence => true
end
