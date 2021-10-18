class Api::V1::ProductsController < ApplicationController
  def index
    @products = Product.filter(params[:filter]).paginate(page: params[:page])
    @total = Product.filter(params[:filter]).count
    render json: {lists: @products, totalProducts: @total}
  end

  def show
    @products = Product.find_by(id: params[:id])
    if @products
      render json: @products
    else
      render json: {error: "Not found product"}
    end
  end
  
end
