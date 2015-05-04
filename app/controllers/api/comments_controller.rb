class Api::CommentsController < ApplicationController
  def index
    @comments = TodoComment.where(:todo_id => params[:todo_id])
    render :json => @comments
  end

  def create
    @comment = TodoComment.new(comment_params)

    if @comment.save
      render :json => @comment
    else
      render :json => @comment.errors, :status => :unprocessable_entity
    end
  end

  def show
    @comment = TodoComment.find(params[:id])
    render :json => @comment
  end

  private

  def comment_params
    params[:comment].permit(:todo_id, :content)
  end

end