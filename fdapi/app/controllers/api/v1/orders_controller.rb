class Api::V1::OrdersController < ApplicationController
  def create
    array = params[:list]
    order = Order.new(order_params)
    if (order_params[:user_id] != 2) 
      order.user_id = decode(order_params[:user_id])["user_id"]
    end
    order.total_money = caculateTotal(array)
    if order.save
      order_detail = []
      array.each do |prd|
        total_money = prd[:price].to_i * prd[:quantity].to_i
        order_detail << OrderDetail.new(order_id: order.id, 
          product_id: prd[:product_id].to_i, quantity: prd[:quantity].to_i,
          total_money: total_money)
      end
      OrderDetail.import order_detail
      render json: {success: true}
    else
      render json: {success: false}
    end
  end

  private
    def caculateTotal(array)
      total = 0
      array.each do |prd|
        total += prd[:price].to_i * prd[:quantity].to_i
      end
      total
    end
    
    def order_params
      params.require(:infor).permit(:name, :email, :address, :phone, :user_id)
    end
  
end
