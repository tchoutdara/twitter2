class Api::PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]

  def index
    render json: Post.order(created_at: :desc)
  end

  def show
    render json: @post
  end

  def destroy
    @post.destroy
  end

  def update
    if @post.update(post_params)
      render json: @post 
    else
      render json: post.errors, status: 422
    end
  end

  def create
    post = Post.create(post_params)

    if post.save
      render json: post
    else
      render json: post.errors, status: 422
    end
  end

  private

  def set_post
    @post = current_user.posts.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:text, :likes, :dislikes, :user_id)
  end
end
