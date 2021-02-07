Feature: Login Functionality
  As a user I want to visit the-internet.herokuapp website.So I can visit login page


  Scenario: Verify user click on Form Authentication feature
    Given I am on the home page
    When I click on Form authentication feature
    Then I should be on Login page successfully

  Scenario Outline: Verify user should not login with correct username and wrong password
    When I enter correct username in username field "<username>"
    And I enter incorrect password in password field "<password>"
    And I click on Login in feature
    Then I should be not login to system and verify errorMessage
    Examples:
      | username | password |
      | tomsmith | abcd@    |
      | tomsmith | abcd123@ |
      | tomsmith | 123abcd@ |

  Scenario Outline: Verify user should not login with incorrect username and correct password
    When I enter incorrect username in username field "<username>"
    And I enter correct password in password field "<password>"
    And I click on Login in feature
    Then I should be not login to system and verify errorMessages
    Examples:
      | username  | password             |
      | smithtom  | SuperSecretPassword! |
      | smithtom1 | SuperSecretPassword! |
      | smithtom3 | SuperSecretPassword! |

  Scenario: Verify user can log in on Form Authentication and logout
    Given I am on the home page
    When I click on Form authentication feature
    And I enter correct username in username fields "tomsmith"
    And I enter correct password in password fields "SuperSecretPassword!"
    And I click on Login in feature
    Then I should be on Login successfully and logout successfully





