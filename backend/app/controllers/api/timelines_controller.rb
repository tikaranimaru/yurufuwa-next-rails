class Api::TimelinesController < ApplicationController
  before_action :set_timeline, only: %i[ show ]

  def index
    @timelines = Timeline.where(user_id: params[:user_id])

    render json: @timelines
  end

  def show
    render json: @timeline
  end

  def set_timeline
    @timeline = Timeline.find(params[:id])
  end
end
