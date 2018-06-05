# TO-DOs for 5 O'Clock DC Release

* GOOGLE ANALYTICS
    * ADD THIS ASAP

* cuisine dropdown
    * remove hardcoded cuisines and replace with same patterns as neighborhoods (mapping over imported array)
    * spend time strategizing the types of cuisine we want submitters to select from

* filter modal
    * on longer neighborhood names, filter modal buttons are pushed below the modal

* data edge cases
    * some bars have different happy hours based on day of the week (incorporate in the future?)

* data clean up
    * add public: true tag to all current bars to enable us to queue entered bars in the future (with public: flase)
    * change adam's morgan to adams morgan

* map functionality
    * decide on a map tech to use

* neighborhood
    * per UI/UX instructor, neighborhood dropdown on homepage could have more visual indications drawing the user into interacting with it
    * locations in the neighborhood dropdown could have some kind of address to let people know where theyre referring to (eg admo 18th and Q) for out of towners

* bar card
    * find a way to display the menus inside of or below the barcard to avoid having to navigate away from the page

* results page layout
    * display multiple bars per row on large screens

* submit form
    * instead of the user inputting address, zip etc, integrate the yelp scraper to pull that data
    * allow users to upload their own photograph
    * take image link and download it into our database(Possible?)
    
* data sanitization
   * add datafield for all displayed entries such as "displayed: true" and only display ones where value is true
   * have submit form apply a "displayed: false" value until a developer approves the entry

#DONES
* add ability to search all neighborhoods
* change existing 'Pub' cuisine entries to 'Pub Fare'
* add category for not serving food
* place info on top of picture rather than below
* go back and change bedrock billiards, board room to NA
