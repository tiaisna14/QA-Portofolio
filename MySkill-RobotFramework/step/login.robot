*** Settings ***
Library                SeleniumLibrary
Suite Setup            Open Browser    ${WebSauceDemo}    ${BROWSER}
Suite Teardown         Close Browser
Variables              ../resources/login_locators.yaml

*** Variables ***
${WebSauceDemo}        https://www.saucedemo.com/
${BROWSER}             chrome

*** Keywords ***
Open Browser to WebSauceDemo
    Open Browser ${WebSauceDemo}  ${BROWSER}

Closing the Browser
    Close Browser

Input Username
    Input Text   ${txtUsername}   standard_user

Input password
    Input Text   ${txtPassword}   secret_sauce

Input invalid Username
    Input Text   ${txtUsername}   123

Click button login
    Click Element    ${btnLogin}
    Sleep     1s

Verify on Login page
    Page Should Contain    Sauce Labs Backpack


*** Test cases ***
  
User login with invalid username
    Input invalid Username
    Input password
    Click button login



