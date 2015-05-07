class Api::CommentsController < ApplicationController
  def index
    @comments = TodoComment.where(:todo_id => params[:todo_id])
    render "comments/index"
  end

  def create
    @comment = TodoComment.new(comment_params)

    if @comment.save
      render "comments/show"
    else
      render :json => @comment.errors, :status => :unprocessable_entity
    end
  end

  def show
    @comment = TodoComment.find(params[:id])
    render "comments/show"
  end

  def destroy
    @comment = TodoComment.find(params[:id])
    @comment.destroy
    render "comments/show"
  end

  def update
    @comment = TodoComment.find(params[:id])
    if @comment.update_attributes(comment_params)
      render "comments/show"
    else
      render :json => @comment.errors, :status => :unprocessable_entity
    end
  end

  private

  def comment_params
    params[:comment].permit(:todo_id, :content)
  end

end