class Api::TweetsController < ApplicationController
    respond_to :json

    def index 
        respond_with Tweet.order(tweet_date: :DESC)

    def create
        respond_with :api, Tweet.create(tweet_params)
    end

    def show 
        tweet = Tweet.find_by(id:params[:id])
        render json: tweet, status: 200
    end

    def destroy
        respond_with Tweet.destroy(params[:id])
      end


    def update 
        tweet = Tweet.find(params['id'])
        tweet.update(tweet_params)
        respond_with Tweet, json: tweet
    end

    def tweet_params 
        params.require(:tweet).permit(:content,:user_id)
    end
end
