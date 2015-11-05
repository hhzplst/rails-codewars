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
    language = params["language"]
    request = Typhoeus::Request.new(
      "https://www.codewars.com/api/v1/code-challenges/#{language}/train",
      method: :post,
      params: { stratgey: strategy },
      headers: { Authorization: "q-sizxUQz1x1tsnxuFnY", ContentType: "text/html;" }
    )
    response = request.run
    @result = JSON.parse(response.response_body)
    @setup = @result["session"]["setup"]
    # binding.pry
    # @katum = {description: @result["description"], setup: @result["session"]["setup"]}
    render json: {description: @result["description"].gsub(/[```]/, ""), setup: @result["session"]["setup"]}
  end

  private

  def kata_params
    params.require(:katum).permit(:language)
  end

end
