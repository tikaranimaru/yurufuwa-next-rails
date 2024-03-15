class TimelinesController < ApplicationController
  def new
    @timeline = Timeline.new
  end


  # POST /timelines or /timelines.json
  def create
    @timeline = Timeline.new(timeline_params)

    if @timeline.save
      # "http://127.0.0.1:3000/timelines"
      redirect_to "#{request.protocol}#{request.host_with_port}/timelines"
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def timeline_params
    params.require(:timeline).permit(:user_id, :datetime, :content, :content)
  end
end
