require 'rails_helper'

feature 'Books', js: true do
  scenario 'list page' do
    visit '/'

    expect(page).to have_content('Books')
  end
end
