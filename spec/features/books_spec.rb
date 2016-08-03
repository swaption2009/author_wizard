require 'rails_helper'

feature 'Books', js: true do
  scenario 'list page' do
    visit '/'
    expect(page).to have_content('Books')
  end

  scenario 'new book' do
    visit '/'
    click_on 'New Book'
    fill_in 'Name', with: 'A Little History of the World'
    click_on 'Submit'
    expect(page).to have_content('A Little History of the World')
  end

  scenario 'edit book' do
    create(:book, name: 'The Lost Art of Finding Our asdf')

    visit '/'
    click_on 'Edit'
    fill_in 'Name', with: 'The Lost Art of Finding Our Way'
    click_on 'Submit'
    expect(page).to have_content('The Lost Art of Finding Our Way')
  end

  scenario 'delete book' do
    create(:book, name: 'Eat to Live')

    visit '/'
    click_on 'Delete'
    expect(page).not_to have_content('Eat to Live')
  end
end
