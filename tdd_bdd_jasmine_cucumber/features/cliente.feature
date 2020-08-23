Scenario: List of clients
  Given I am have {9} clients im my database
  When I acess the home webpage
  Then see the list of {9} itens