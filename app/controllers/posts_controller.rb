class PostsController < ApplicationController
  before_action :set_post, only: [:edit, :update, :destroy]
  before_filter :authenticate_user!, :except => [:show, :index, :index_code, :index_life, :index_about]
  before_filter :head_title
  
  def head_title
    if !@post.nil?
      @title = @post.title
      @description = @post.description
      @info = @post.updated_at.strftime("%b %d, %Y")
    else
      @title = "indra.prasetya"
      @description = "yet another useless blog"
    end
  end
  
  # GET /posts
  # GET /posts.json
  def index
    @posts = Post.page(params[:page]).per(5)
  end
  def index_code
    @posts = Post.code().page(params[:page]).per(5)
    render :index
  end
  def index_life
    @posts = Post.life().page(params[:page]).per(5)
    render :index
  end
  def index_about
    @posts = Post.about().page(params[:page]).per(5)
    render :index
  end

  # GET /posts/1
  # GET /posts/1.json
  def show
    @post = Post.find_by_slug(params[:slug])
    logger.debug @post
  end

  # GET /posts/new
  def new
    @post = Post.new
  end

  # GET /posts/1/edit
  def edit
  end

  # POST /posts
  # POST /posts.json
  def create
    @post = Post.new(post_params)

    respond_to do |format|
      if @post.save
        format.html { redirect_to @post, notice: 'Post was successfully created.' }
        format.json { render :show, status: :created, location: @post }
      else
        format.html { render :new }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /posts/1
  # PATCH/PUT /posts/1.json
  def update
    respond_to do |format|
      if @post.update(post_params)
        format.html { redirect_to @post, notice: 'Post was successfully updated.' }
        format.json { render :show, status: :ok, location: @post }
      else
        format.html { render :edit }
        format.json { render json: @post.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /posts/1
  # DELETE /posts/1.json
  def destroy
    @post.destroy
    respond_to do |format|
      format.html { redirect_to posts_url, notice: 'Post was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def post_params
      params.require(:post).permit(:title, :slug, :description, :category_id, :content, :is_published)
    end
end
