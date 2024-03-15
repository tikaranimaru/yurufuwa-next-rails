class TimelinesController < ApplicationController
  def new
    @timeline = Timeline.new
  end


  # POST /timelines or /timelines.json
  def create
    @timeline = Timeline.new(timeline_params)
    @timeline.datetime = Time.now
    if @timeline.save
      # "http://127.0.0.1:3000/timelines"
      redirect_to "#{request.protocol}#{request.host_with_port}/timelines", allow_other_host: true
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def timeline_params
    params.require(:timeline).permit(:user_id, :content, :content)
  end
end
