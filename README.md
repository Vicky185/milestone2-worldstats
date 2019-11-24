# Milestone 2 Project: World Population Statistics - Interactive Frontend Development

## An interactive frontend webside which gives insight into the world's population, growth and the differences in gender

In this website you can have a look at a variety of graph and chart types, showing the change in our world's population over time (since 1960) and what it looks like today. You can also have a look to see how the numbers vary across the individual countries.

## Project purpose

To provide an informative and interactive insight into world demographics - as they vary over time, by gender and country.

The data is taken and adapted from the [UN Data World Bank](_https://data.worldbank.org/_).

*The following requirements were set at the beginning of the project:*
* primary target audience are general geographers, people interested in finding out about data and world statistics
* show how data can be presented in an easy,readable and accessible way
* show the audience about the changes to our population on a page
* ensure a smooth read of data and exploration with the mouse to find out new information

*User stories*
As a general user,
* I want the page to be simple and easy to use
* I am generally curious about the world and how populations have grown
* I'd be interested to see how it varies and I'd like this to be easy to access and quick to inform me upon sight

As an informed and studious demographer  , I want...
* to see accurate data
* to see a different portrayal of data
* to interact with the data and see how it changes and has changed
* to be informed and find out something

## Features

#### For this site, a range of features were used:

* HTML, CSS & JavaScript
* D3, DC, Crossfilter, Queue and JQuery libraries
* I also used the DataTables API (_https://datatables.net/_)
* CSV datasets and external files (from _https://data.worldbank.org/_)

#### Additional features in the future will include:

* additional pages which contain information and interactive datasets on birthrates, fertility and death rates
* population counter
* mapping population, using a chloropleth map for analysing population statistics across an area

## Structure

One page of navigation, scrolling down one page to next view. 
Four graphs/tables which are separated by image to break up the page and for styling. 

### Surface/Design


*** Design, Colour Scheme and Fonts ***

* Bootswatch theme used for graph and general styling and design
* Bootstrap was used for general styling
* Fonts used were: Lato and Quicksand from Google Fonts.

## Technologies

Below is listed all of the technologies used to create this site:

* HTML
* CSS
* JavaScript 
* CDN Libraries:
    * D3
    * DC
    * Crossfilter
    * Queue
    * JQuery
*DataTables API - _https://datatables.net/_
* Bootstrap -  _https://getbootstrap.com/_
* Google Fonts - _https://fonts.google.com/_
* AWS Cloud9 - as IDE
* GitHub - as the remote backup used on this project and for other project users to view the code
* UN Data World Bank - _https://data.worldbank.org/_

## Testing

In testing, it has been to check that the navbar works well when navigating through the pages and sticks with you as you move down. 

The graphs have been tested with hovering and clicking. It proves to be interactive and encouraging to users to explore the page. 
##### Navigation: 
* Go to the Top and select the "Population Table".
Click on the title.
You should be driven smoothly down the entire website to the bottom to where there is a population table. 
The table has a search option in the top right hand corner, if you search a number, a country the table will shorten and show results according to your search.
On the top left you have a dropdown menu letting you choose how many rows you see.
There is also workable pagination at the bottom right of the table which takes you to further rows of country information.
The headers of the table will alter the cursor encouraging you to click, this will alter ascension and descension order of the rows in the table. 
Hovering over the rows will highlight them.

Any bugs?
Slight bug on the first graph's button which requires a double click at beginning. 


## Deployment

This project was built using Cloud9 and then uploading via Git onto GitHub - final access has been through the GitHub Pages.

If you want to access the project please log into GitHub and select the 'https://vicky185.github.io/milestone2-worldstats/#' repository. From there you can access the HTML code and CSS styling. You can also see the site via the 'Settings' tab, then scroll down to 'GitHub Pages' (if link not there, select 'Master branch' from dropdown). The site will refresh then you will be able to view it after 5-10 minutes.

To add this to your own repository, please go to the 'Code' tab and click the green button 'Clone/Download'.

## Credits and Acknowledgement

For the information on each graph and the data, I used information from the UN Data World Bank and news articles:
* _https://data.worldbank.org/_
* _https://ourworldindata.org/gender-ratio_

For the images, I used free and downloadable stock images from:
* _https://www.pexels.com/_ 

I also used a lot of the Mark Bostock d3 libraries and graph templates from: 
* _https://bl.ocks.org/_
* _https://cdnjs.com/_

My mentor Spencer Barriball also helped a lot with this and the tricky bits of code. Thanks, Spence, for your patience with me, and also thanks to Code Institute Tutor Support who steered me right! 

