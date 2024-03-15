require "test_helper"

class Api::TimelinesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_timelines_index_url
    assert_response :success
  end

  test "should get show" do
    get api_timelines_show_url
    assert_response :success
  end
end
