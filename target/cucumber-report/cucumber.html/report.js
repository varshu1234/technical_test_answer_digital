$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/infinitescroll.feature");
formatter.feature({
  "line": 1,
  "name": "Infinite scroll functionality",
  "description": "As a user,I want to check scroll down and scroll up functionality on Infinite scroll page",
  "id": "infinite-scroll-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4332696200,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that user is able to scroll down and scroll up successfully",
  "description": "",
  "id": "infinite-scroll-functionality;verify-that-user-is-able-to-scroll-down-and-scroll-up-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on infinite scroll feature",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I scroll down twice to bottom of the page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I scroll up to top of the page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should be able to see infinite scroll text successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 204400600,
  "status": "passed"
});
formatter.match({
  "location": "InfinitesScroll.iClickOnInfiniteScrollFeature()"
});
formatter.result({
  "duration": 521101800,
  "status": "passed"
});
formatter.match({
  "location": "InfinitesScroll.iScrollDownTwiceToBottomOfThePage()"
});
formatter.result({
  "duration": 53671500,
  "status": "passed"
});
formatter.match({
  "location": "InfinitesScroll.iScrollUpToTopOfThePage()"
});
formatter.result({
  "duration": 14635300,
  "status": "passed"
});
formatter.match({
  "location": "InfinitesScroll.iShouldBeAbleToSeeInfiniteScrollTextSuccessfully()"
});
formatter.result({
  "duration": 107847800,
  "status": "passed"
});
formatter.after({
  "duration": 703370200,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/keypresses.feature");
formatter.feature({
  "line": 1,
  "name": "Key presses functionality",
  "description": "As a user I want to click on key presses.so i can click on four keys",
  "id": "key-presses-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5702837900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that user is able to click on keys",
  "description": "",
  "id": "key-presses-functionality;verify-that-user-is-able-to-click-on-keys",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on key presses link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I press A keys in field \"A\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "System should shows displayed A successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I press B keys in field \"B\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "System should shows displayed B successfully",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I press C keys in field \"C\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "System should shows displayed C successfully",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "And I press D keys in field \"D\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "System should shows displayed D successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 41900,
  "status": "passed"
});
formatter.match({
  "location": "KeyPress.iClickOnKeyPressesLink()"
});
formatter.result({
  "duration": 427537000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A",
      "offset": 25
    }
  ],
  "location": "KeyPress.iPressAKeysInField(String)"
});
formatter.result({
  "duration": 127392800,
  "status": "passed"
});
formatter.match({
  "location": "KeyPress.systemShouldShowsDisplayedASuccessfully()"
});
formatter.result({
  "duration": 125360000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "B",
      "offset": 25
    }
  ],
  "location": "KeyPress.iPressBKeysInField(String)"
});
formatter.result({
  "duration": 80271800,
  "status": "passed"
});
formatter.match({
  "location": "KeyPress.systemShouldShowsDisplayedBSuccessfully()"
});
formatter.result({
  "duration": 108814900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "C",
      "offset": 25
    }
  ],
  "location": "KeyPress.iPressCKeysInField(String)"
});
formatter.result({
  "duration": 77319900,
  "status": "passed"
});
formatter.match({
  "location": "KeyPress.systemShouldShowsDisplayedCSuccessfully()"
});
formatter.result({
  "duration": 116956200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D",
      "offset": 29
    }
  ],
  "location": "KeyPress.andIPressDKeysInField(String)"
});
formatter.result({
  "duration": 89970800,
  "status": "passed"
});
formatter.match({
  "location": "KeyPress.systemShouldShowsDisplayedDSuccessfully()"
});
formatter.result({
  "duration": 42226700,
  "status": "passed"
});
formatter.after({
  "duration": 738951600,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As a user I want to visit the-internet.herokuapp website.So I can visit login page",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3387651900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify user click on Form Authentication feature",
  "description": "",
  "id": "login-functionality;verify-user-click-on-form-authentication-feature",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Form authentication feature",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should be on Login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 39500,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnFormAuthenticationFeature()"
});
formatter.result({
  "duration": 497084800,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeOnLoginPageSuccessfully()"
});
formatter.result({
  "duration": 65871000,
  "status": "passed"
});
formatter.after({
  "duration": 1155565800,
  "status": "passed"
});
formatter.before({
  "duration": 3988237800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Verify user can log in on Form Authentication and logout",
  "description": "",
  "id": "login-functionality;verify-user-can-log-in-on-form-authentication-and-logout",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Form authentication feature",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter correct username in username fields \"tomsmith\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter correct password in password fields \"SuperSecretPassword!\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Login in feature",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be on Login successfully and logout successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.iAmOnTheHomePage()"
});
formatter.result({
  "duration": 16100,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnFormAuthenticationFeature()"
});
formatter.result({
  "duration": 625683800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 45
    }
  ],
  "location": "Login.iEnterCorrectUsernameInUsernameFields(String)"
});
formatter.result({
  "duration": 201410400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 45
    }
  ],
  "location": "Login.iEnterCorrectPasswordInPasswordFields(String)"
});
formatter.result({
  "duration": 210609900,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnLoginInFeature()"
});
formatter.result({
  "duration": 563431000,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeOnLoginSuccessfullyAndLogoutSuccessfully()"
});
formatter.result({
  "duration": 489793600,
  "status": "passed"
});
formatter.after({
  "duration": 669015700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "Verify user should not login with correct username and wrong password",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-correct-username-and-wrong-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I enter correct username in username field \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter incorrect password in password field \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Login in feature",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be not login to system and verify errorMessage",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-correct-username-and-wrong-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 24,
      "id": "login-functionality;verify-user-should-not-login-with-correct-username-and-wrong-password;;1"
    },
    {
      "cells": [
        "tomsmith",
        "abcd@"
      ],
      "line": 25,
      "id": "login-functionality;verify-user-should-not-login-with-correct-username-and-wrong-password;;2"
    },
    {
      "cells": [
        "tomsmith",
        "abcd123@"
      ],
      "line": 26,
      "id": "login-functionality;verify-user-should-not-login-with-correct-username-and-wrong-password;;3"
    },
    {
      "cells": [
        "tomsmith",
        "123abcd@"
      ],
      "line": 27,
      "id": "login-functionality;verify-user-should-not-login-with-correct-username-and-wrong-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3743955400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify user should not login with correct username and wrong password",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-correct-username-and-wrong-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I enter correct username in username field \"tomsmith\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter incorrect password in password field \"abcd@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Login in feature",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be not login to system and verify errorMessage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 44
    }
  ],
  "location": "Login.iEnterCorrectUsernameInUsernameField(String)"
});
formatter.result({
  "duration": 811842600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@",
      "offset": 46
    }
  ],
  "location": "Login.iEnterIncorrectPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 127824500,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnLoginInFeature()"
});
formatter.result({
  "duration": 601612200,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeNotLoginToSystemAndVerifyErrorMessage()"
});
formatter.result({
  "duration": 100626700,
  "status": "passed"
});
formatter.after({
  "duration": 728211000,
  "status": "passed"
});
formatter.before({
  "duration": 3128509400,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify user should not login with correct username and wrong password",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-correct-username-and-wrong-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I enter correct username in username field \"tomsmith\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter incorrect password in password field \"abcd123@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Login in feature",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be not login to system and verify errorMessage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 44
    }
  ],
  "location": "Login.iEnterCorrectUsernameInUsernameField(String)"
});
formatter.result({
  "duration": 763968600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@",
      "offset": 46
    }
  ],
  "location": "Login.iEnterIncorrectPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 108468500,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnLoginInFeature()"
});
formatter.result({
  "duration": 625538200,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeNotLoginToSystemAndVerifyErrorMessage()"
});
formatter.result({
  "duration": 100491800,
  "status": "passed"
});
formatter.after({
  "duration": 712928200,
  "status": "passed"
});
formatter.before({
  "duration": 3143120400,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify user should not login with correct username and wrong password",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-correct-username-and-wrong-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 19,
  "name": "I enter correct username in username field \"tomsmith\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter incorrect password in password field \"123abcd@\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Login in feature",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be not login to system and verify errorMessage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "tomsmith",
      "offset": 44
    }
  ],
  "location": "Login.iEnterCorrectUsernameInUsernameField(String)"
});
formatter.result({
  "duration": 683165900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123abcd@",
      "offset": 46
    }
  ],
  "location": "Login.iEnterIncorrectPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 110838800,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnLoginInFeature()"
});
formatter.result({
  "duration": 724943000,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeNotLoginToSystemAndVerifyErrorMessage()"
});
formatter.result({
  "duration": 54556000,
  "status": "passed"
});
formatter.after({
  "duration": 704449200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "Verify user should not login with incorrect username and correct password",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-incorrect-username-and-correct-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I enter incorrect username in username field \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter correct password in password field \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Login in feature",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be not login to system and verify errorMessages",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-incorrect-username-and-correct-password;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 35,
      "id": "login-functionality;verify-user-should-not-login-with-incorrect-username-and-correct-password;;1"
    },
    {
      "cells": [
        "smithtom",
        "SuperSecretPassword!"
      ],
      "line": 36,
      "id": "login-functionality;verify-user-should-not-login-with-incorrect-username-and-correct-password;;2"
    },
    {
      "cells": [
        "smithtom1",
        "SuperSecretPassword!"
      ],
      "line": 37,
      "id": "login-functionality;verify-user-should-not-login-with-incorrect-username-and-correct-password;;3"
    },
    {
      "cells": [
        "smithtom3",
        "SuperSecretPassword!"
      ],
      "line": 38,
      "id": "login-functionality;verify-user-should-not-login-with-incorrect-username-and-correct-password;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3161034200,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Verify user should not login with incorrect username and correct password",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-incorrect-username-and-correct-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I enter incorrect username in username field \"smithtom\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter correct password in password field \"SuperSecretPassword!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Login in feature",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be not login to system and verify errorMessages",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "smithtom",
      "offset": 46
    }
  ],
  "location": "Login.iEnterIncorrectUsernameInUsernameField(String)"
});
formatter.result({
  "duration": 887641100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 44
    }
  ],
  "location": "Login.iEnterCorrectPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 117512700,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnLoginInFeature()"
});
formatter.result({
  "duration": 452631600,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeNotLoginToSystemAndVerifyErrorMessages()"
});
formatter.result({
  "duration": 57002900,
  "status": "passed"
});
formatter.after({
  "duration": 697587200,
  "status": "passed"
});
formatter.before({
  "duration": 4736444200,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Verify user should not login with incorrect username and correct password",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-incorrect-username-and-correct-password;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I enter incorrect username in username field \"smithtom1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter correct password in password field \"SuperSecretPassword!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Login in feature",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be not login to system and verify errorMessages",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "smithtom1",
      "offset": 46
    }
  ],
  "location": "Login.iEnterIncorrectUsernameInUsernameField(String)"
});
formatter.result({
  "duration": 825225700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 44
    }
  ],
  "location": "Login.iEnterCorrectPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 189655500,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnLoginInFeature()"
});
formatter.result({
  "duration": 476022400,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeNotLoginToSystemAndVerifyErrorMessages()"
});
formatter.result({
  "duration": 58111100,
  "status": "passed"
});
formatter.after({
  "duration": 684641100,
  "status": "passed"
});
formatter.before({
  "duration": 4789626500,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify user should not login with incorrect username and correct password",
  "description": "",
  "id": "login-functionality;verify-user-should-not-login-with-incorrect-username-and-correct-password;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 30,
  "name": "I enter incorrect username in username field \"smithtom3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter correct password in password field \"SuperSecretPassword!\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on Login in feature",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be not login to system and verify errorMessages",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "smithtom3",
      "offset": 46
    }
  ],
  "location": "Login.iEnterIncorrectUsernameInUsernameField(String)"
});
formatter.result({
  "duration": 845908100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "SuperSecretPassword!",
      "offset": 44
    }
  ],
  "location": "Login.iEnterCorrectPasswordInPasswordField(String)"
});
formatter.result({
  "duration": 134644300,
  "status": "passed"
});
formatter.match({
  "location": "Login.iClickOnLoginInFeature()"
});
formatter.result({
  "duration": 503832500,
  "status": "passed"
});
formatter.match({
  "location": "Login.iShouldBeNotLoginToSystemAndVerifyErrorMessages()"
});
formatter.result({
  "duration": 59823700,
  "status": "passed"
});
formatter.after({
  "duration": 683827400,
  "status": "passed"
});
});