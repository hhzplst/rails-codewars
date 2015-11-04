class KataController < ApplicationController
  before_action :current_user
  def index
    #choose JS or ruby
    #fade out
    #ajax call 
    #
  end

  def create
    level = @current_user.level.to_s
    strategy = "kyu_#{level}_workout"
    request = Typhoeus::Request.new(
      "https://www.codewars.com/api/v1/code-challenges/#{language}/train",
      method: :post,
      params: { stratgey: strategy },
      headers: { Authorization: "q-sizxUQz1x1tsnxuFnY", ContentType: "text/html;" }
    )
    response = request.run
    @result = JSON.parse(response.response_body)
    @description = @result["description"].gsub(/[`]/, "")
    @setup = @result["session"]["setup”]
  end

  private

  def kata_params
    params.require(:katum).permit(:Javascript, :Ruby)
  end

end
