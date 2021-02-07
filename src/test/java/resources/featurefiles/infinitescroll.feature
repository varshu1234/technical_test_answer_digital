Feature: Infinite scroll functionality
  As a user,I want to check scroll down and scroll up functionality on Infinite scroll page

  Scenario: Verify that user is able to scroll down and scroll up successfully
    Given I am on the home page
    When I click on infinite scroll feature
    And I scroll down twice to bottom of the page
    And I scroll up to top of the page
    Then I should be able to see infinite scroll text successfully