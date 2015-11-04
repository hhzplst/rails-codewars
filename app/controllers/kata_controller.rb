class KataController < ApplicationController
  def index
    #choose JS or ruby
    #fade out
    #ajax call 
    #
  end

  def create
    if params[:JavaScript]
    else
    end
  end

  private

  def kata_params
    params.require(:kata).permit(:Javascript, :Ruby)
  end

end
