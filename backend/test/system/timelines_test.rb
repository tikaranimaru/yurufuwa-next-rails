require "application_system_test_case"

class TimelinesTest < ApplicationSystemTestCase
  setup do
    @timeline = timelines(:one)
  end

  test "visiting the index" do
    visit timelines_url
    assert_selector "h1", text: "Timelines"
  end

  test "should create timeline" do
    visit timelines_url
    click_on "New timeline"

    fill_in "Content", with: @timeline.content
    fill_in "Datetime", with: @timeline.datetime
    fill_in "User", with: @timeline.user_id
    click_on "Create Timeline"

    assert_text "Timeline was successfully created"
    click_on "Back"
  end

  test "should update Timeline" do
    visit timeline_url(@timeline)
    click_on "Edit this timeline", match: :first

    fill_in "Content", with: @timeline.content
    fill_in "Datetime", with: @timeline.datetime
    fill_in "User", with: @timeline.user_id
    click_on "Update Timeline"

    assert_text "Timeline was successfully updated"
    click_on "Back"
  end

  test "should destroy Timeline" do
    visit timeline_url(@timeline)
    click_on "Destroy this timeline", match: :first

    assert_text "Timeline was successfully destroyed"
  end
end
